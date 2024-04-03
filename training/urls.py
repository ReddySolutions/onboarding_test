from django.urls import path 
from . import views 

# URLConf
urlpatterns = [
    path('logs/', views.UserActivityLogList.as_view()),
]