from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Activity, UserActivity, UserActivityLog


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email",)


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = "__all__"


class UserActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    activity = ActivitySerializer()

    class Meta:
        model = UserActivity
        fields = "__all__"


class UserActivityLogSerializer(serializers.Serializer):
    user = serializers.SerializerMethodField()
    total_score = serializers.IntegerField()

    def get_user(self, obj):
        user_data = {
            "id": obj["user_activity__user__id"],
            "username": obj["user_activity__user__username"].title()
        }
        user_serializer = UserSerializer(user_data)
        return user_serializer.data
