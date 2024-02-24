import os
from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone


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

class News(models.Model):
    Header = models.CharField('Главный заголвовк', max_length=30)
    Body = models.TextField('Главный текст')
    date = models.DateTimeField('Дата публикации', default=timezone.now)
    Header2 = models.CharField('Второстепенный заголовок', max_length=30, default='0')
    Body2 = models.TextField('Второстепенный текст', default='0')
    GeneralImage =models.ImageField(upload_to='GeneralNewsImage/')
    SecondaryImage =models.ImageField(upload_to='GeneralNewsImage/', default='0')
    def __str__(self):
        return self.Header
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
