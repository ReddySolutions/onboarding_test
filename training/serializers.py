from rest_framework import serializers
from .models import UserActivityLog, Activity


class UserActivityLogSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    class Meta:
        model = UserActivityLog
        fields = ['id', 'username', 'score', 'created_at', 'started_at', 'ended_at']

    def get_username(self, obj):
        return obj.user_activity.user.username

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return representation


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'name', 'description', 'start_date', 'end_date', 'is_active', 'created_at', 'updated_at']
