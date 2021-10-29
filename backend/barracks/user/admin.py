from django.contrib import admin
from .models import User#, LoggedInUser

class UserAdmin(admin.ModelAdmin):
    pass

admin.site.register(User, UserAdmin)