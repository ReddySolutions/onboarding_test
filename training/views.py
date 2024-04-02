from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Sum
from django.db import models
from .models import UserActivityLog
from .serializers import UserActivityLogSerializer, ActivitySerializer

def calculate_user_scores():
    """
    Aggregate the total score for each user along with their username
    """
    user_scores = UserActivityLog.objects.annotate(
        username=models.F('user_activity__user__username')
    ).values('user_activity__user_id', 'username').annotate(
        total_score=Sum('score')
    )
    return user_scores


class LeaderboardAPIView(APIView):
    def get(self, request):
        """
        Retrieve top performers based on training progress (e.g., highest scores)
        Example logic: Fetch users with the highest total scores
        """
        user_scores = calculate_user_scores()
        sorted_user_scores = sorted(user_scores, key=lambda x: x['total_score'], reverse=True)
        user_ids = [user_score['user_activity__user_id'] for user_score in sorted_user_scores]

        queryset = UserActivityLog.objects.filter(user_activity__user_id__in=user_ids).order_by('-score')

        # Filter out duplicate users
        unique_user_ids = set()
        unique_user_logs = []
        for log in queryset:
            if log.user_activity.user.id not in unique_user_ids:
                unique_user_ids.add(log.user_activity.user.id)
                unique_user_logs.append(log)

        serializer = UserActivityLogSerializer(unique_user_logs, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class TrainingModulesAPIView(APIView):
    def get(self, request, user_id):
        """
        Retrieve training modules taken by a specific user
        """
        try:
            user_logs = UserActivityLog.objects.filter(user_activity__user_id=user_id)
            modules = [log.user_activity.activity for log in user_logs]
            serializer = ActivitySerializer(modules, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except UserActivityLog.DoesNotExist:
            return Response({"error": "User activity logs not found"}, status=status.HTTP_404_NOT_FOUND)
