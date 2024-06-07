
from django.urls import  path, include
from . import views
from rest_framework import routers
from .views import MapApiView, RoadsApiView, NewsApiView, SeaRoadsApiView

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()

router.register(r'api/cities', MapApiView, basename='cities')
router.register(r'api/roads', RoadsApiView, basename='roads')
router.register(r'api/news', NewsApiView, basename='news')
router.register(r'api/seaRoads', SeaRoadsApiView, basename='seaRoads')
urlpatterns = [


    path('map', views.Name),
    path('', include(router.urls))
]