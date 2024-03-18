from django.urls import path,include
from rest_framework import routers
from .views import CharacterApiView
from . import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'api/characters', CharacterApiView)

urlpatterns = [
    path('user', views.User),
    path('character', views.Character),
    path('', include(router.urls))
]