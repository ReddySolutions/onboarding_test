from django.contrib.auth.models import User
from django.db.models import Q, Subquery, OuterRef, Sum
from django.db import transaction
from django.shortcuts import get_object_or_404
from django.utils import timezone

from training.models import UserActivity, Activity, UserActivityLog, do_training


class ActivityService:
    @classmethod
    def list_activities(cls, params):
        name = params.get("name")
        is_open = params.get("is_open", "").lower()
        queryset = Activity.objects.all()
        if name:
            queryset = queryset.filter(name__icontains=name)
        if is_open in ["true", "false"]:
            now = timezone.now().date()
            query = Q(start_date__lte=now, end_date__gte=now)
            if is_open == 'true':
                queryset = queryset.filter(query)
            else:
                queryset = queryset.exclude(query)
        return queryset

    @classmethod
    def retrieve_activity(cls, pk):
        activity = get_object_or_404(Activity, id=pk)
        return activity

    @classmethod
    def view_leaderboard(cls):
        # Annotate each user with the total score for all their UserActivity entries
        queryset = User.objects.annotate(
            total_score=Sum('useractivity__useractivitylog__score',
                            filter=Q(useractivity__completed=True))
        ).filter(total_score__isnull=False).order_by("-total_score")
        return queryset


class UserActivityService:
    @classmethod
    def list_user_activities(cls, user, activity_id):
        return UserActivity.objects.filter(user=user, activity_id=activity_id)

    @classmethod
    def enroll(cls, user, activity_id):
        """
        Method to allow user enroll in a training
        """
        activity = get_object_or_404(Activity, id=activity_id)
        user_activity, _ = UserActivity.objects.get_or_create(
            activity=activity, user=user)
        return user_activity

    @classmethod
    def complete_training(cls, user, user_activity_id):
        """
        Method to allow user complete a training
        """
        user_activity = get_object_or_404(
            UserActivity, id=user_activity_id, completed=False, user=user)
        with transaction.atomic():
            UserActivityLog.objects.create(
                user_activity=user_activity, score=do_training())
            user_activity.completed = True
            user_activity.save(update_fields=["completed"])
        return user_activity


class UserService:
    @classmethod
    def list_users(cls, user):
        return User.objects.exclude(id=user.id).exclude(is_staff=True)
