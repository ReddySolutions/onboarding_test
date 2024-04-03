from rest_framework import serializers
from .models import UserActivityLog, UserActivity


class UserActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivityLog
        fields = '__all__'

    def to_representation(self, instance):
        return str(instance)