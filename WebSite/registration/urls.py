from django.urls import path,include
from rest_framework import routers
from .views import CharacterApiView, RegisterView, LoginView, PlayerData, CharacterViewSet, \
    PlayerViewSet, MyCharactersViewSet, CharacterUpdateView, ImageUpdateView
from . import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'api/characters', CharacterApiView)
router.register(r'characters', CharacterViewSet)
router.register(r'players', PlayerViewSet)
router.register(r'my_characters', MyCharactersViewSet, basename='my_characters')

urlpatterns = [
    path('user', views.User),
    path('character', views.Character),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/getData/', PlayerData.as_view(), name='Data'),
    path('api/getAvatar/', PlayerAvatar.as_view(), name='Data'),
    path('', include(router.urls)),
    path('characters/<int:pk>/', CharacterUpdateView.as_view(), name='character-update'),
    path('image/<int:pk>/', ImageUpdateView.as_view(), name='image-update'),
    path('delete_user/', DeleteUserView.as_view(), name='delete_user'),
]