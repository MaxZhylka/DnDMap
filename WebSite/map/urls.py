
from django.urls import  path, include
from . import views
from rest_framework import routers
from .views import  MapApiView, RoadsApiView

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()

router.register(r'api/cities', MapApiView, basename='cities')
router.register(r'api/roads', RoadsApiView, basename='roads')
urlpatterns = [


    path('map', views.Name),
    path('', include(router.urls))
]