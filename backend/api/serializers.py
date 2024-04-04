from rest_framework import serializers
from .models import Recipe, User, Photos


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'user_Id',
            'username',
            'last_Name',
            'birth_Date',
            'email',
            'password'
        ]

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.last_Name = validated_data.get('last_Name', instance.last_Name)
        instance.birth_Date = validated_data.get('birth_Date', instance.birth_Date)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        return instance

    def delete(self, instance):
        """
        Deletar o user
        """
        instance.delete()


    def get_info(self, instance):
        return {
            'username': instance.username,
            'last_Name': instance.last_Name,
            'birth_Date': instance.birth_Date,
            'email': instance.email,
            'password': instance.password,
            'user_Id': instance.user_Id
        }


class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = [
            'id',
            'name',
            'local'
        ]

    def create(self, validated_data):
        return Photos.objects.create(**validated_data)

    def delete(self, instance):
        """
        Deletar o user
        """
        instance.delete()

    def get_info(self, instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'local': instance.local
        }


class RecipeSerializer(serializers.ModelSerializer):
    photos = PhotosSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        fields = ['recipe_Id', 'recipe_Name', 'description', 'difficulty_Level', 'preparation_Time',
                  'creation_Date', 'ingredients', 'photos', 'creator']

    def create(self, validated_data):
        # Custom create logic if needed
        photos_data = validated_data.pop('photos', None)
        recipe = Recipe.objects.create(**validated_data)
        if photos_data:
            for photo_data in photos_data:
                photo = Photos.objects.create(recipe=recipe, **photo_data)
                recipe.photos.add(photo)
        return recipe

    def update(self, instance, validated_data):
        # Custom update logic if needed
        instance.recipe_name = validated_data.get('recipe_name', instance.recipe_name)
        instance.description = validated_data.get('description', instance.description)
        instance.difficulty_level = validated_data.get('difficulty_level', instance.difficulty_level)
        instance.preparation_time = validated_data.get('preparation_time', instance.preparation_time)
        instance.ingredients = validated_data.get('ingredients', instance.ingredients)
        # Update other fields as needed
        instance.save()

        # Handling Many-to-Many relationship with photos
        photos_data = validated_data.get('photos', None)
        if photos_data:
            instance.photos.clear()
            for photo_data in photos_data:
                photo = Photos.objects.create(recipe=instance, **photo_data)
                instance.photos.add(photo)

        return instance
