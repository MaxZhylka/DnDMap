from rest_framework import serializers
from .models import Character, Player, UploadedImage
from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from rest_framework.authtoken.models import Token


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'
        read_only_fields = ('player','appearance')


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('email', 'name', 'password', 'avatar')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Player.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password'],
            avatar=validated_data.get('avatar')
        )
        return user


class PlayerAvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['avatar']

class AuthTokenSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if user and user.is_active:
            return {'user': user}
        raise serializers.ValidationError("Unable to log in with provided credentials.")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ('id','appearance')

class UpdateNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['name']

class UpdateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['email']

class UpdatePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)