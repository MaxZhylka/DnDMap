from celery import shared_task
from django.utils import timezone
from .models import Character

@shared_task
def check_end_dates():
    now = timezone.now()
    characters_in_way = Character.objects.filter(inWay=True, dateOfEnd__lte=now)
    for character in characters_in_way:
        character.location = character.newCityLocation
        character.inWay = False
        character.WayCoordinates = ''
        character.dateOfStart = None
        character.dateOfEnd = None
        character.save()