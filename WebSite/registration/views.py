import binascii
import os
from django.conf import settings
from rest_framework.decorators import action
from django.shortcuts import render,get_object_or_404
from rest_framework import viewsets, permissions,  generics
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
class PlayerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

class MyCharactersViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CharacterSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Character.objects.filter(player=self.request.user)

class CharacterUpdateView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        character = Character.objects.get(pk=kwargs['pk'])
        serializer = CharacterSerializer(character, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        character = get_object_or_404(Character, pk=kwargs['pk'])
        character.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ImageUpdateView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        character = Character.objects.get(pk=kwargs['pk'])


        old_avatar = character.appearance

        serializer = ImageSerializer(character, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()


            if old_avatar:

                file_path = os.path.join(settings.MEDIA_ROOT, str(old_avatar))

                if os.path.exists(file_path):
                    os.remove(file_path)

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class DeleteUserView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        user = request.user
        user.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)