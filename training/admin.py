from django.contrib import admin
from . import models

admin.site.register(models.Activity)
admin.site.register(models.UserActivity)
admin.site.register(models.UserActivityLog)
