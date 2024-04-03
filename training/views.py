from datetime import datetime
from django.db.models import Avg
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from .models import Activity, UserActivity, UserActivityLog, do_training
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


def all_users(request):
    users = User.objects.annotate(avg_score=Avg('useractivity__useractivitylog__score')).order_by('-avg_score')
    return render(request, 'all_users.html', {'users': users})


def user_activities(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    try:
        activities = UserActivity.objects.filter(user=user)
    except:
        activities = []

    if not activities:
        message = "No activities found for this user."
    else:
        message = None
    return render(request, 'user_activities.html', {'user': user, 'activities': activities, 'message': message})


@csrf_exempt
def perform_activity(request, activity_id):
    if request.method == 'POST':
        activity = UserActivity.objects.get(pk=activity_id)
        if not activity.completed:
            score = do_training()
            UserActivityLog.objects.create(
                user_activity=activity,
                score=score,
                created_at=datetime.now()
            )
            activity.completed = True
            activity.save()
            return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})


