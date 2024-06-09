import logging

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail
from django.urls import reverse
from django.conf import settings
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes

from registration.models import Player


class TokenGenerator(PasswordResetTokenGenerator):
    pass
User=Player;
account_activation_token = TokenGenerator()

logger = logging.getLogger(__name__)

def send_verification_email(user):
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = account_activation_token.make_token(user)
    verification_url = f"{settings.SITE_URL}/email-verify/{uid}/{token}"
    try:
        result = send_mail(
            'Verify your email',
            f'Please verify your email by clicking on this link: {verification_url}',
            settings.DEFAULT_FROM_EMAIL,
            [user.email],
            fail_silently=False,
        )
        return result == 1  # Возвращает True, если email был успешно отправлен
    except Exception as e:
        logger.exception(f'Exception occurred while sending email to {user.email}: {str(e)}')
        return False
def get_user_from_token(uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    return user