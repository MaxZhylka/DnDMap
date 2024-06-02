import binascii
import os

from rest_framework.decorators import action
from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .models import Character, Player, Token
from .serializer import CharacterSerializer, ImageSerializer

from rest_framework import status, views
from rest_framework.response import Response

from .serializer import PlayerSerializer, AuthTokenSerializer
from .auth import TokenAuthentication
from django.http import HttpResponse, JsonResponse


# Create your views here.
class CharacterApiView(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


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





class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = ImageSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(player=self.request.user)

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def my_characters(self, request):
        characters = Character.objects.filter(player=request.user)
        serializer = self.get_serializer(characters, many=True)
        return Response(serializer.data)

class PlayerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)