from django.shortcuts import render
from django.http import HttpResponse
from .models import Cities
from .models import Roads
from .models import News
from registration.models import Character


def Name(request):
    cities=Cities.objects.all()
    roads=Roads.objects.all()
    characters=Character.objects.all()
    news=News.objects.all()
    return render(request, "map/map.html",{'cities': cities, 'roads': roads, 'characters': characters, 'news': news})

