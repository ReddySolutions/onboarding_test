from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from onboarding_test.permissions import IsAuthenticated
from training.service import ActivityService, UserActivityService, UserService
from training.serializers import ActivitySerializer, UserActivitySerializer, UserSerializer, LeaderBoardSerializer


class ActivityViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        queryset = ActivityService.list_activities(request.GET)
        data = ActivitySerializer(queryset, many=True).data
        # TODO: paginate response
        return Response(
            {
                "data": data,
                "status": "success",
                "message": "Data retrieved successfully",
            },
            status=200
        )

    def retrieve(self, request, pk=None):
        activity = ActivityService.retrieve_activity(pk)
        data = ActivitySerializer(activity).data
        return Response(
            {
                "data": data,
                "status": "success",
                "message": "Data retrieved successfully",
            },
            status=200
        )

    @action(detail=False, methods=["get"], url_path="(?P<activity_id>[a-z,A-Z,0-9]+)/user")
    def list_training_activities(self, request, activity_id=None):
        queryset = UserActivityService.list_user_activities(
            request.auth_user, activity_id)
        data = UserActivitySerializer(queryset, many=True).data
        # TODO: paginate respons e
        return Response(
            {
                "data": data,
                "status": "success",
                "message": "Data retrieved successfully",
            },
            status=200
        )

    @action(detail=False, methods=["post"], url_path="(?P<activity_id>[a-z,A-Z,0-9]+)/enroll")
    def enroll(self, request, activity_id=None):
        user_activity = UserActivityService.enroll(
            request.auth_user, activity_id=activity_id)
        return Response(
            {
                "data": UserActivitySerializer(user_activity).data,
                "status": "success",
                "message": "Data created successfully"
            },
            status=201
        )

    @action(detail=False, methods=["post"], url_path="complete/(?P<training_id>[a-z,A-Z,0-9]+)")
    def complete_training(self, request, training_id=None):
        user_activity = UserActivityService.complete_training(
            request.auth_user, user_activity_id=training_id)
        return Response(
            {
                "data": UserActivitySerializer(user_activity).data,
                "status": "success",
                "message": "Data updated successfully"
            },
            status=200
        )

    @action(detail=False, methods=["get"], url_path="leaderboard")
    def leaderboard(self, request):
        leaderboard_list = ActivityService.view_leaderboard()
        data = LeaderBoardSerializer(leaderboard_list, many=True).data
        # TODO: paginate response
        return Response(
            {
                "data": data,
                "status": "success",
                "message": "Data retrieved successfully",
            },
            status=200
        )


class UserViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        users = UserService.list_users(request.auth_user)
        data = UserSerializer(users, many=True).data
        return Response(
            {
                "data": data,
                "status": "success",
                "message": "Data retrieved successfully",
            },
            status=200
        )
