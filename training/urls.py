from django.urls import path
from .views import LeaderboardAPIView, TrainingSessionAPIView


urlpatterns = [
    path("activities/", TrainingSessionAPIView.as_view(), name="activity-list"),
    path("leaderboard/", LeaderboardAPIView.as_view(), name="leaderboard"),
]
