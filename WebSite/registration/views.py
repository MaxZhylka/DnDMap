import binascii
import os

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .models import Character, Player, Token
from .serializer import CharacterSerializer

from .forms import CharacterForm
from rest_framework import status, views
from rest_framework.response import Response

from .serializer import PlayerSerializer, AuthTokenSerializer
from .auth import TokenAuthentication
from django.http import HttpResponse, JsonResponse


# Create your views here.
class CharacterApiView(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
def Character(request):
    error = ''
    if request.method == 'POST':
        form = CharacterForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = 'Форма неверная'

    form = CharacterForm()
    data = {
        'form': form,
        'error': error
    }

    return render(request, "registration/registerCharacter.html",data)


def generate_key():
    while True:
        key = binascii.hexlify(os.urandom(20)).decode()
        if not Token.objects.filter(key=key).exists():
            return key

def User(request):

    return render(request, "registration/registerUser.html")

class RegisterView(views.APIView):
    def post(self, request):
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'message': 'User created successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(views.APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = Player.objects.authenticate(email=email, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user, defaults={'key': generate_key()})
            return JsonResponse({
                'token': token.key
            }, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
class PlayerData(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        player = request.user
        return Response({
            'email': player.email,
            'name': player.name,
            'avatar': player.avatar.url if player.avatar else None
        })