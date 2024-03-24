import random

from django.db import models
from django.contrib.auth.models import User


def do_training():
    return random.randint(0, 100)


class Activity(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.activity.name}"


class UserActivityLog(models.Model):
    user_activity = models.ForeignKey(UserActivity, on_delete=models.CASCADE)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    started_at = models.DateTimeField(auto_now_add=True)
    ended_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.user_activity.user.username} - {self.user_activity.activity.name} - {self.score}"
