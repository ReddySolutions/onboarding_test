from django.contrib.auth.models import User
from django.db.models import Count, F, Q, Sum
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from training.models import Activity, UserActivity, UserActivityLog, do_training
from training.serializers import (
    ActivitySerializer,
    UserActivityLogSerializer,
    UserActivitySerializer,
)


class StartActivityView(APIView):
    def post(self, request):

        activity_id = request.data.get("activity_id")
        user_id = 1  # assuming user 1 is logged in

        try:
            activity = Activity.objects.get(id=activity_id)
        except Activity.DoesNotExist:
            return Response(
                {"error": "Activity not found"}, status=status.HTTP_404_NOT_FOUND
            )

        user_activity = UserActivity.objects.create(user_id=user_id, activity=activity)
        user_activity_log = UserActivityLog.objects.create(
            user_activity=user_activity, score=0
        )

        return Response(
            {"message": f"{activity.name} Activity Started"},
            status=status.HTTP_201_CREATED,
        )


class CompleteActivityView(APIView):
    def post(self, request):
        activity_id = request.data.get("activity_id")
        user_id = 1  # assuming user 1 is logged in

        try:
            activity = Activity.objects.get(id=activity_id)
        except Activity.DoesNotExist:
            return Response(
                {"error": "Activity not found"}, status=status.HTTP_404_NOT_FOUND
            )

        user_activity = UserActivity.objects.get(user_id=user_id, activity=activity)
        if user_activity.completed:
            return Response({"error": "Already Completed"}, status=status.HTTP_200_OK)

        # Mark activity as completed
        user_activity.completed = True
        user_activity_log = UserActivityLog.objects.get(user_activity=user_activity)
        user_activity_log.score = do_training()

        user_activity.save()

        return Response(
            {"message": f"{activity.name} Training completed successfully"},
            status=status.HTTP_200_OK,
        )


class LeaderboardView(APIView):
    """
    Leaderboard GET View
    Takes only completed activities into consideration.
    Returns a list of users in descending order of their total score
    """

    def get(self, request):
        leaderboard_data = (
            UserActivity.objects.filter(completed=True)
            .values("user", username=F("user__username"))
            .annotate(
                total_score=Sum("useractivitylog__score"),
                completed_count=Count("id", filter=Q(completed=True)),
            )
            .order_by("-total_score")
        )
        return Response({"leaderboard": leaderboard_data}, status=status.HTTP_200_OK)


class UserProgressView(APIView):

    def get(self, request):
        user_id = 1  # hardcoding user id as 1.(assuming he is logged in)
        user_activity_logs = UserActivityLog.objects.filter(
            user_activity__user_id=user_id
        ).values(
            "score",
            "started_at",
            "ended_at",
            activity_name=F("user_activity__activity__name"),
            completed=F("user_activity__completed"),
        )
        serializer = UserActivityLogSerializer(user_activity_logs, many=True)
        user = User.objects.get(id=user_id)
        total_score = UserActivity.objects.filter(
            completed=True, user_id=user_id
        ).aggregate(total_score=Sum("useractivitylog__score"))
        user_profile = {
            "username": user.username,
            "total_score": total_score["total_score"],
        }

        return Response(
            {"user_profile": user_profile, "user_progress": serializer.data},
            status=status.HTTP_200_OK,
        )


class ActivityListView(ListAPIView):
    """
    Activity List View
    """

    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer


class UserActivityListView(ListAPIView):
    """
    User Activity List View
    """

    queryset = UserActivity.objects.filter(user_id=1)
    serializer_class = UserActivitySerializer
