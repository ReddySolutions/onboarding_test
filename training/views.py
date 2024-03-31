from django.shortcuts import get_object_or_404
from training.models import Activity, UserActivity, do_training
from .seriliazers import (
    ActivitySerializer,
    UserActivityLog,
    UserActivityLogSerializer,
    UserActivitySerializer,
)
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


@api_view(["GET"])
def list_scoreboard(request: Request):
    if request.method == "GET":
        user_log = UserActivityLog.objects.all().order_by("-score")
        serializer = UserActivityLogSerializer(user_log, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def do_activity(request: Request):
    score = do_training()
    activity_name = request.data.get("activity_name")

    if activity_name:
        activity_obj = get_object_or_404(Activity, name=activity_name)

        serializer = UserActivitySerializer(data=request.data)
        if serializer.is_valid():
            user_activity = UserActivity.objects.create(
                user=request.user,
                activity=activity_obj,
                completed=serializer.validated_data.get("completed", False),
            )
            user_activity_log_obj = UserActivityLog.objects.create(
                user_activity=user_activity, score=score
            )
            user_activity_log_obj.save()
            serializer = UserActivityLogSerializer(user_activity_log_obj)
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
