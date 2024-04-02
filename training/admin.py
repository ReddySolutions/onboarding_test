from django.contrib import admin
from .models import Activity, UserActivity, UserActivityLog

# Register your models here.


class ActivityAdmin(admin.ModelAdmin):
    ...


class UserActivityAdmin(admin.ModelAdmin):
    ...


class UserActivityLogAdmin(admin.ModelAdmin):
    ...


admin.site.register(Activity, ActivityAdmin)
admin.site.register(UserActivity, UserActivityAdmin)
admin.site.register(UserActivityLog, UserActivityLogAdmin)
