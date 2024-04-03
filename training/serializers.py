from django.contrib.auth.models import User
from rest_framework import serializers

from training.models import Activity, UserActivity


class TotalScorePerUserSerializer(serializers.ModelSerializer):
    """
    Serialize data for total score per user
    """
    total_score = serializers.IntegerField()

    class Meta:
        model = User
        fields = ['id', 'username', 'total_score']


class DashboardSerializer(serializers.ModelSerializer):
    """
    Serialize data for dashboard view
    """
    total_completion = serializers.IntegerField()

    class Meta:
        model = Activity
        fields = ['id', 'name', 'description', 'start_date', 'end_date', 'is_active', 'total_completion']


class UserProgressSerializer(serializers.ModelSerializer):
    """
    Serialize data for user progress view
    """
    current_position = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'current_position']

    def get_current_position(self, obj):
        user_activity_serializer = UserActivity.objects.filter(user=obj, completed=True).last()
        if user_activity_serializer:
            return user_activity_serializer.activity.id
        return 0


class ActivitySerializer(serializers.ModelSerializer):
    """
    Serialize data for activity view
    """
    class Meta:
        model = Activity
        fields = ['id', 'name']
