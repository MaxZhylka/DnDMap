from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Cities, Roads, News
from .Serializer import CitySerializer, RoadSerializer
from registration.models import Character
from rest_framework import viewsets

def Name(request):
    cities = Cities.objects.all()
    roads = Roads.objects.all()
    characters = Character.objects.all()
    news = News.objects.all()
    return render(request, "map/map.html", {'cities': cities, 'roads': roads, 'characters': characters, 'news': news})

# ---------------- api -------------------
class MapApiView(viewsets.ModelViewSet):
    queryset = Cities.objects.all()
    serializer_class = CitySerializer
    http_method_names = ['get']
class RoadsApiView(viewsets.ModelViewSet):
    queryset = Roads.objects.all()
    serializer_class = RoadSerializer
    http_method_names = ['get']
