import json
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse, Http404
from .models import Activity, UserActivity, UserActivityLog, do_training
from django.contrib.auth.models import User
from .serializers import ActivitySerializer, UserActivitySerializer, UserActivityLogSerializer

# Create your views here.

class ActivityView(APIView):
    def get_activity(self, pk):
        try: 
            activity = Activity.objects.get(name = pk)
            return activity
        except Activity.DoesNotExist:
            raise Http404
        
    def get(self, request, pk = None):
        if pk:
            data = self.get_activity(pk)
            serializer = ActivitySerializer(data)
        else:
            data = Activity.objects.all()
            serializer = ActivitySerializer(data, many = True)
        return Response(serializer.data)

class UserActivityView(APIView):
    def get_user_activity(self, username):
        try: 
            user = UserActivity.objects.filter(user = username)
            return user
        except UserActivity.DoesNotExist:
            raise Http404
        
    def get(self, request, pk = None):
        if pk:
            data = self.get_user_activity(pk)
            serializer = UserActivitySerializer(data, many = True)
        else:
            data = UserActivity.objects.all()
            serializer = UserActivitySerializer(data, many = True)
        return Response(serializer.data)
    
class ActivityLogView(APIView):
    def post(self, request):
        data = request.data
        newActivity = UserActivity.objects.create(user = User.objects.get(username = 'user'+ str(data["user"])), activity = Activity.objects.get(name=data["activity"]))
        newLog = UserActivityLog.objects.create(user_activity = newActivity, score = do_training())
        serializer = UserActivityLogSerializer(data = newLog)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("New Log Entry Added", safe=False)

        return JsonResponse("Failed to add log entry", safe=False)

    def get_log(self, pk):
        try: 
            activity = UserActivityLog.objects.get(id = pk)
            return activity
        except UserActivityLog.DoesNotExist:
            raise Http404
        
    def get(self, request, pk = None):
        if pk:
            data = self.get_log(pk)
            serializer = UserActivityLogSerializer(data)
        else:
            data = UserActivityLog.objects.all()
            serializer = UserActivityLogSerializer((data), many = True)
        return Response(serializer.data)
