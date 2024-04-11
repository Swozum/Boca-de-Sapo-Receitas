from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Recipe, User, Photos
from .serializers import UserSerializer, RecipeSerializer, PhotosSerializer
import json
# Create your views here.

#USERS

@csrf_exempt
def user_list(request):
    """
    Retorna todos os Users da base de dados
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)
@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        # Retrieve data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
        
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

@csrf_exempt
def update_user(request, user_id):
    if request.method == 'PUT':
        # Retrieve data from request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

        # Retrieve user instance to update (Assuming you have a User model)
        try:
            user = User.objects.get(user_Id=user_id)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

        # Update user data
        user.username = data.get('username', user.username)
        user.last_Name = data.get('last_Name', user.last_Name)
        user.birth_Date = data.get('birth_Date', user.birth_Date)
        user.email = data.get('email', user.email)
        user.password = data.get('password', user.password)

        # Save user instance
        user.save()

        # Return updated user data
        return JsonResponse({'success': 'User updated successfully', 'user': UserSerializer(user).data})

    else:
        return JsonResponse({'error': 'Only PUT requests are allowed'}, status=405)
    

@csrf_exempt
def delete_user(request, pk):
    if request.method == "DELETE":
        try:
            user = User.objects.get(user_Id=pk)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    try:
        user.delete()
        return HttpResponse(f'Success User deleted')
    except Exception as e:
        return HttpResponse(f'{e}')
    

@csrf_exempt
def user_details(request, pk):
    try:
        user = User.objects.get(user_Id=pk)
    except User.DoesNotExist:
        return HttpResponse("The user does not exist",status=404)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)

    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=204)

#RECIPES


@csrf_exempt
def recipe_list(request):
    """
    Retorna todos as receitas da base de dados
    """
    if request.method == 'GET':
        recipe = Recipe.objects.all()
        serializer = RecipeSerializer(recipe, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RecipeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def create_recipe(request):
    if request.method == 'POST':
        serializer = RecipeSerializer(data = request.data)
        if serializer.is_Valid():
            serializer.save()
            return HttpResponse(serializer.data, status=200)
        return HttpResponse(serializer.errors, status=400)
    

@csrf_exempt
def recipe_details(request, pk):
    try:
        recipe = Recipe.objects.get(recipe_Id=pk)
    except Recipe.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = UserSerializer(recipe)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserSerializer(recipe, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)

    elif request.method == 'DELETE':
        recipe.delete()
        return HttpResponse(status=204)