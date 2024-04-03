from django.contrib import admin

# Register your models here.
from .models import Activity, UserActivity, UserActivityLog

models_list = [Activity, UserActivity, UserActivityLog]
admin.site.register(models_list)