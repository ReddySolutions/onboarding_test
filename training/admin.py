from django.contrib import admin
from .models import Activity, UserActivity, UserActivityLog


admin.site.register(Activity)
admin.site.register(UserActivity)
admin.site.register(UserActivityLog)
