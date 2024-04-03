from django.urls import path
from .views import ActivityView, ActivityLogView, UserActivityView

urlpatterns = [
    path('activities/', ActivityView.as_view()),
    path('activities/<str:pk>/', ActivityView.as_view()),
    path('logs/', ActivityLogView.as_view()),
    path('logs/<int:pk>/', ActivityLogView.as_view()),
    path('user-activity/', UserActivityView.as_view()),
    path('user-activity/<int:pk>/', UserActivityView.as_view()),
]