from rest_framework import serializers
from .models import *

class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivityLog
        fields = '__all__'

# class QuizesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Quiz
#         fields = '__all__'
        
# class RewardSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Rewards
#         fields = '__all__'