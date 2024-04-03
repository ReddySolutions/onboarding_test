from django.contrib.auth.models import User
from django.db.models import Sum

from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import UserActivityLog, UserActivity, do_training
from .serializers import UserActivityLogSerializer, UserActivitySerializer


class LeaderboardAPIView(ListAPIView):
    queryset = UserActivityLog.objects.values("user_activity__user__id",
                                              "user_activity__user__username") \
                                      .annotate(total_score=Sum("score")) \
                                      .order_by("-total_score")
    serializer_class = UserActivityLogSerializer


class TrainingSessionAPIView(APIView):
    user = User.objects.get(pk=1)

    def get(self, request, format=None):
        user_activities = UserActivity.objects.filter(user=self.user)
        data = UserActivitySerializer(user_activities, many=True).data
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        activity_id = request.data.get('activity_id')
        if not activity_id:
            return Response(
                {"detail": "Activity ID is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        user_activity = UserActivity.objects.create(user=self.user,
                                                    activity_id=activity_id)
        score = do_training()

        UserActivityLog.objects.create(user_activity=user_activity,
                                       score=score)

        return Response(
            {"detail": "Training started successfully.", "score": score},
            status=status.HTTP_200_OK
        )

    def put(self, request, format=None):
        activity_id = request.data.get('activity_id')
        if not activity_id:
            return Response(
                {"detail": "Activity ID is required."},
                status=status.HTTP_400_BAD_REQUEST
            )
        user_activity = UserActivity.objects.get(user=self.user,
                                                 activity_id=activity_id)
        user_activity.completed = True
        activity_log = UserActivityLog.objects.get(user_activity=user_activity)
        activity_log.score += do_training()
        user_activity.save()
        activity_log.save()
        new_score = activity_log.score

        return Response(
            {
                "detail": "Training completed successfully.",
                "score": new_score
            },
            status=status.HTTP_200_OK
        )
