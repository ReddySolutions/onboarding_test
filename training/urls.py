from django.urls import path
from .views import LeaderboardAPIView, TrainingModulesAPIView

urlpatterns = [
    path('leader-board/', LeaderboardAPIView.as_view(), name='leader_board'),
    path('training-modules/<int:user_id>/', TrainingModulesAPIView.as_view(), name='training_modules'),
]
