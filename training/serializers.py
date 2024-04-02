from django.contrib.auth.models import User
from rest_framework import serializers

from training.models import Activity, UserActivity, UserActivityLog


class ActivitySerializer(serializers.ModelSerializer):
    is_open = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = "__all__"

    def get_is_open(self, obj):
        return obj.is_open


class UserActivitySerializer(serializers.ModelSerializer):
    activity = ActivitySerializer()
    score = serializers.SerializerMethodField()

    class Meta:
        model = UserActivity
        fields = "__all__"

    def get_score(self, obj):
        return obj.get_latest_score()


class UserActivityLogSerializer(serializers.ModelSerializer):
    user_activity = UserActivitySerializer()

    class Meta:
        model = UserActivityLog
        fields = "__all__"


class LeaderBoardSerializer(serializers.ModelSerializer):
    total_score = serializers.IntegerField()

    class Meta:
        model = User
        fields = ["username", "id", "total_score"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", 'id']
