from django.urls import path

from training.views import (
    ActivityListView,
    CompleteActivityView,
    LeaderboardView,
    StartActivityView,
    UserActivityListView,
    UserProgressView,
)

urlpatterns = [
    path("leaderboard/", LeaderboardView.as_view(), name="leaderboard"),
    path("activities/", ActivityListView.as_view(), name="activity_list"),
    path("user-activities/", UserActivityListView.as_view(), name="activity_list"),
    path("user-progress/", UserProgressView.as_view(), name="user_progress"),
    path("start-activity/", StartActivityView.as_view(), name="start_activity"),
    path(
        "complete-activity/", CompleteActivityView.as_view(), name="complete_activity"
    ),
]
