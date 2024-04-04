from django.urls import path
from .views import user_list, recipe_list, create_user, user_details

urlpatterns = [
    path('', user_list),
    path('recipe/', recipe_list),
    path('create_user/', create_user),
    path('user_detail/<int:pk>/',user_details)
]
