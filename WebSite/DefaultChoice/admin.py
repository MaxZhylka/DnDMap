from django.contrib import admin
from .models import Classes
admin.site.register(Classes)
from .models import WheelClasses
admin.site.register(WheelClasses)
from .models import Spells
from .models import WheelSpells
admin.site.register(WheelSpells)

class SpellsAdmin(admin.ModelAdmin):  # Используем admin.ModelAdmin
    list_display = ('SpellName', 'SpellLevel','SpellSchool','SpellConcentration','SpellCaster','SpellSource')  # Поля, отображаемые в админке
    ordering = ('SpellName',)  # Сортировка по убыванию имени заклинания

admin.site.register(Spells, SpellsAdmin)