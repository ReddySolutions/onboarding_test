from django.contrib import admin

from training.models import Activity, UserActivity, UserActivityLog

# Register your models here.
admin.site.register(Activity)
admin.site.register(UserActivity)
admin.site.register(UserActivityLog)
