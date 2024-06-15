from django.contrib import admin
from .models import Character, Player, Token, UploadedImage

admin.site.register(Character)
admin.site.register(Player)
admin.site.register(Token)
admin.site.register(UploadedImage)
# Register your models here.
