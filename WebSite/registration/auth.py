from django.contrib.auth import get_user_model
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import HTTP_HEADER_ENCODING
from rest_framework.permissions import BasePermission

from .models import Token

class TokenAuthentication(BaseAuthentication):
    def authenticate(self, request):

        auth = request.META.get('HTTP_AUTHORIZATION', b'')
        if not auth or not auth.startswith('Token '):
            return None

        try:

            key = auth.split(' ')[1].encode(HTTP_HEADER_ENCODING)
        except IndexError:
            raise AuthenticationFailed('Invalid token header')

        try:

            token = Token.objects.get(key=key.decode(HTTP_HEADER_ENCODING))
        except Token.DoesNotExist:
            raise AuthenticationFailed('Invalid token')


        if not token.user.is_active:
            raise AuthenticationFailed('User inactive or deleted')

        return (token.user, token)

    def authenticate_header(self, request):
        return 'Token'
