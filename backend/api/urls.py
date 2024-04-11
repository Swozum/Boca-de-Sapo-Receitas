from django.urls import path
from .views import user_list, recipe_list, create_user, user_details, recipe_details, create_recipe, delete_user, update_user

urlpatterns = [
    #User
    path('user/', user_list),
    path('create_user/', create_user),
    path('user_detail/<int:pk>/',user_details),
    path('delete_user/<int:pk>/',delete_user),
    path('update_user/<int:pk>/',update_user),
    #Recipe
    path('recipe/', recipe_list),
    path('create_recipe/', create_recipe),
    path('recipe_detail/<int:pk>/',recipe_details),
    
]
