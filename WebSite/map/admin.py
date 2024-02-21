from django.contrib import admin
from .models import Cities
from .models import Roads

admin.site.register(Cities)
admin.site.register(Roads)