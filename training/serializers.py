from rest_framework import serializers

from training.models import Activity, UserActivity


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = "__all__"


class UserActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivity
        fields = "__all__"


class UserActivityLogSerializer(serializers.Serializer):
    score = serializers.IntegerField()
    started_at = serializers.DateTimeField()
    ended_at = serializers.DateTimeField()
    activity_name = serializers.CharField()
    completed = serializers.BooleanField()
