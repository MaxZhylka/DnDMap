from django.core.management.base import BaseCommand
from DefaultChoice.models import Spells, WheelSpells

class Command(BaseCommand):
    help = 'Transfers data from Classes to WheelClasses'

    def handle(self, *args, **kwargs):
        # Ваш код для переноса данных
        objects_to_transfer = Spells.objects.all()
        for obj in objects_to_transfer:
            try:
                wheel_obj = WheelSpells.objects.get(id=obj.id)
                wheel_obj.SpellName = obj.SpellName
                wheel_obj.SpellLevel = obj.SpellLevel
                wheel_obj.SpellSchool = obj.SpellSchool
                wheel_obj.SpellCastTime = obj.SpellCastTime
                wheel_obj.SpellCastTimeText = obj.SpellCastTimeText
                wheel_obj.SpellDistance = obj.SpellDistance
                wheel_obj.SpellDistanceText = obj.SpellDistanceText
                wheel_obj.SpellVerbal = obj.SpellVerbal
                wheel_obj.SpellSomat = obj.SpellSomat
                wheel_obj.SpellMaterial = obj.SpellMaterial
                wheel_obj.SpellMaterials = obj.SpellMaterials
                wheel_obj.SpellDuration = obj.SpellDuration
                wheel_obj.SpellCaster = obj.SpellCaster
                wheel_obj.SpellArchtipes = obj.SpellArchtipes
                wheel_obj.SpellSource = obj.SpellSource
                wheel_obj.SpellDescription = obj.SpellDescription
                wheel_obj.SpellLevelDescription = obj.SpellLevelDescription
                wheel_obj.SpellCheckBox = obj.SpellCheckBox
                wheel_obj.save()
            except WheelSpells.DoesNotExist:
                pass
        self.stdout.write(self.style.SUCCESS(objects_to_transfer))