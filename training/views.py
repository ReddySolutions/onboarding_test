from django.contrib.auth.models import User
from django.db.models import Sum, Count, Q
from rest_framework import generics, status
from rest_framework.response import Response

from training.models import Activity
from training.serializers import TotalScorePerUserSerializer, DashboardSerializer, UserProgressSerializer, \
    ActivitySerializer


class TotalScorePerUserView(generics.ListAPIView):
    """
    List all users with their total score
    """
    serializer_class = TotalScorePerUserSerializer

    def get_queryset(self):
        # Calculate total score for each user
        queryset = User.objects.annotate(total_score=Sum('useractivity__useractivitylog__score')).values('username',
                                                                                                         'total_score').order_by('-total_score')
        return queryset

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response({"status_code": status.HTTP_200_OK, "data": serializer.data}, status=status.HTTP_200_OK)


class DashboardView(generics.ListAPIView):
    """
    List task details with their completion count of users
    """
    serializer_class = DashboardSerializer
    queryset = Activity.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        # Annotate each activity with the count of completed users
        queryset = queryset.annotate(total_completion=Count('useractivity',
                                                             filter=Q(useractivity__completed=True)))
        return queryset

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response({"status_code": status.HTTP_200_OK, "data": {"total_enroll": User.objects.all().count(),
                                                                    "total_activity":Activity.objects.all().count(),
                                                                    "report": serializer.data}},
                                                                    status=status.HTTP_200_OK)


class ActivityProgressView(generics.ListAPIView):
    """
    List user with their completion count of activity
    """
    serializer_class = UserProgressSerializer
    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        activities = Activity.objects.all()
        # Serialize the activities
        activity_serializer = ActivitySerializer(activities, many=True)
        return Response({"status_code": status.HTTP_200_OK, "data": serializer.data,
                         "activities": activity_serializer.data}, status=status.HTTP_200_OK)
