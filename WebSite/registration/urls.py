from django.urls import path,include
from rest_framework import routers
from .views import CharacterApiView, RegisterView, LoginView, PlayerData
from . import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'api/characters', CharacterApiView)

urlpatterns = [
    path('user', views.User),
    path('character', views.Character),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/getData/', PlayerData.as_view(), name='Data'),
    path('', include(router.urls))
]