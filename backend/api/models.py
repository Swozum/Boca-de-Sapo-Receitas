from django.db import models


# Create your models here.


#nome, ultimo nome, data de nascimento, idade, email


class User(models.Model):
    username = models.CharField(max_length=100)
    last_Name = models.CharField(max_length=100)
    birth_Date = models.DateField()
    email = models.EmailField()
    password = models.CharField(max_length=50)
    user_Id = models.BigAutoField(primary_key=True)

    def __str__(self):
        return self.username

# com nome, descrição, nivel de dificuldade, tempo de preparação,
# data de criação da receita, ingredientes, modo de preparação e images


class Photos(models.Model):
    name = models.CharField(max_length=100)
    local = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name


class Recipe(models.Model):
    recipe_Name = models.CharField(max_length=100)
    description = models.TextField()
    difficulty_Level = models.FloatField()
    preparation_Time = models.TimeField()
    creation_Date = models.TimeField(auto_created=True)
    ingredients = models.TextField()
    photos = models.ManyToManyField(Photos)
    recipe_Id = models.BigAutoField(primary_key=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.recipe_Name
