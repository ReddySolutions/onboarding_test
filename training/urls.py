from django.urls import path

from training import views

urlpatterns = [
    path('students/', views.TotalScorePerUserView.as_view(), name='score_per_user_view'),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard_view'),
    path('progress/', views.ActivityProgressView.as_view(), name='activity_progress_view'),
]
