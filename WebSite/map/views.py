from django.shortcuts import render
from django.http import HttpResponse
from .models import Cities
from .models import Roads




def Name(request):
    cities=Cities.objects.all()
    roads=Roads.objects.all()

    return render(request, "map/map.html",{'cities': cities, 'roads': roads})

