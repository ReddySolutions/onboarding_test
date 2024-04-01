from django.shortcuts import render
from django.db.models import Sum  
from .models import UserActivityLog, UserActivity, do_training

def leaderboard(request):
    # Query UserActivityLog to calculate total score for each user
    user_scores = UserActivityLog.objects.values('user_activity__user__username').annotate(total_score=Sum('score')).order_by('-total_score')

    return render(request, 'leaderboard.html', {'user_scores': user_scores})


def progress(request):
    
    user_activity_logs = UserActivityLog.objects.filter(user_activity__user=1)

    return render(request, 'progress.html', {'user_activity_logs': user_activity_logs}) 
