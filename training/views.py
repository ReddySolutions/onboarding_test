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
        user_logs = UserActivityLog.objects.all().order_by("-score")
        serializer = UserActivityLogSerializer(user_logs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def do_activity(request: Request):
    score = do_training()
    activity_name = request.data.get("activity_name")
    user = request.data.get("user")
    if not activity_name:
        return Response(
            {"error": "activity_name is required"}, status=status.HTTP_400_BAD_REQUEST
        )

    activity_obj = get_object_or_404(Activity, name=activity_name)
    serializer = UserActivitySerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user_activity, created = UserActivity.objects.get_or_create(
        user=user,
        activity=activity_obj,
        defaults={"completed": serializer.validated_data.get("completed", False)},
    )

    if created:
        user_activity_log_obj = UserActivityLog.objects.create(
            user_activity=user_activity, score=score
        )
        serializer = UserActivityLogSerializer(user_activity_log_obj)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(
            {"error": f"UserActivity already exists for {request.user}"},
            status=status.HTTP_400_BAD_REQUEST,
        )
