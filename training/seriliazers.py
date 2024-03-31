from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Activity, UserActivity, UserActivityLog


class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["username", "id"]
        extra_kwargs = {"id": {"read_only": True}}


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            "name",
            "description",
            "start_date",
            "end_date",
            "is_active",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ("created_at", "updated_at")


class UserActivitySerializer(serializers.ModelSerializer):
    # activity_id = serializers.IntegerField()

    class Meta:
        model = UserActivity
        fields = [
            # "activity_id",
            "user",
            # "activity",
            "completed",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ("created_at", "updated_at")


class UserActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivityLog
        fields = ["user_activity", "score", "created_at", "started_at", "ended_at"]
        read_only_fields = (
            "created_at",
            "started_at",
            "ended_at",
        )
