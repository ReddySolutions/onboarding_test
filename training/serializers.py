from rest_framework import serializers
from .models import Activity, UserActivity, UserActivityLog
from django.contrib.auth.models import User

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('__all__')

class UserActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivity
        fields = ('__all__')

class UserActivityLogSerializer(serializers.ModelSerializer):
    user= serializers.CharField(source='user_activity.user')
    activity = serializers.CharField(source='user_activity.activity.name')

    class Meta:
        model = UserActivityLog
        fields = ('__all__')