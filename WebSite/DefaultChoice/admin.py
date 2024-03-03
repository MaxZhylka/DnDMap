from django.contrib import admin
from .models import Classes
admin.site.register(Classes)
from .models import WheelClasses
admin.site.register(WheelClasses)
from .models import Spells
admin.site.register(Spells)
from .models import WheelSpells
admin.site.register(WheelSpells)
# Register your models here.
