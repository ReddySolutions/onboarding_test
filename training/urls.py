from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ActivityViewSet, UserViewSet

router = DefaultRouter(trailing_slash=False)
router.register(r"activities", ActivityViewSet, basename="activities")
router.register(r"users", UserViewSet, basename="users")

urlpatterns = [
    path("", include(router.urls))
]
