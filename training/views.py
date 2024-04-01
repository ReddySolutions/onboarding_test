from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import *

# Create your views here.
class LeaderboardModelViewSet(viewsets.ModelViewSet):

    queryset = UserActivityLog.objects.all()
    serializer_class = LeaderboardSerializer

# class QuizesModelViewSet(viewsets.ModelViewSet):

#     queryset = Quiz.objects.all()
#     serializer_class = QuizesSerializer
    
# class RewardsModelViewSet(viewsets.ModelViewSet):

#     queryset = Reward.objects.all()
#     serializer_class = RewardsSerializer