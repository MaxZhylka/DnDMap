from django.db import models

class Classes(models.Model):
    ClassName = models.CharField('Имя персонажа', max_length=20, default='')
    ClassCheckBox = models.BooleanField('Э чи нема', max_length=20, default='')

def __str__(self):
        return self.name
class Users(models.Model):
    users = models.CharField(max_length=100)
    link = models.OneToOneField(Classes, on_delete=models.CASCADE)

# Create your models here.
