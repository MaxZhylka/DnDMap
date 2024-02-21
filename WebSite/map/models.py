import os
from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField


class Cities(models.Model):
    name=models.CharField('Название города', max_length=20)
    coordinates=models.CharField('Координаты', max_length=20)
    icon=models.ImageField(upload_to='CityIcon/', default='CityIcon/point.png')
    description = models.TextField('Описание города')
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Город'
        verbose_name_plural = 'Города'
class Roads(models.Model):
    name=models.CharField('Название дороги', max_length=20)
    coordinates=models.TextField('coordinates')

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Дорога'
        verbose_name_plural = 'Дороги'
