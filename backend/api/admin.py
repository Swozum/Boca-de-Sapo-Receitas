from django.contrib import admin
from .models import User, Recipe, Photos
# Register your models here.

admin.site.register(User)
admin.site.register(Recipe)
admin.site.register(Photos)