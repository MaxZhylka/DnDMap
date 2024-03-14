from django.core.management.base import BaseCommand
from DefaultChoice.models import Spells, WheelSpells

class Command(BaseCommand):
    help = 'Transfers data from Spells to WheelSpells'

    def handle(self, *args, **kwargs):
        spells = Spells.objects.all()
        wheel_spells_to_update = []
        wheel_spells_to_create = []

        for spell in spells:
            try:
                wheel_spell = WheelSpells.objects.get(id=spell.id)
            except WheelSpells.DoesNotExist:
                wheel_spell = WheelSpells(id=spell.id)

            wheel_spell.SpellName = spell.SpellName
            wheel_spell.SpellLevel = spell.SpellLevel
            wheel_spell.SpellSchool = spell.SpellSchool
            wheel_spell.SpellCastTime = spell.SpellCastTime
            wheel_spell.SpellCastTimeText = spell.SpellCastTimeText
            wheel_spell.SpellDistance = spell.SpellDistance
            wheel_spell.SpellDistanceText = spell.SpellDistanceText
            wheel_spell.SpellVerbal = spell.SpellVerbal
            wheel_spell.SpellSomat = spell.SpellSomat
            wheel_spell.SpellMaterial = spell.SpellMaterial
            wheel_spell.SpellMaterials = spell.SpellMaterials
            wheel_spell.SpellDuration = spell.SpellDuration
            wheel_spell.SpellCaster = spell.SpellCaster
            wheel_spell.SpellArchtipes = spell.SpellArchtipes
            wheel_spell.SpellSource = spell.SpellSource
            wheel_spell.SpellDescription = spell.SpellDescription
            wheel_spell.SpellLevelDescription = spell.SpellLevelDescription
            wheel_spell.SpellCheckBox = spell.SpellCheckBox

            if wheel_spell._state.adding:
                wheel_spells_to_create.append(wheel_spell)
            else:
                wheel_spells_to_update.append(wheel_spell)

        WheelSpells.objects.bulk_create(wheel_spells_to_create)
        WheelSpells.objects.bulk_update(wheel_spells_to_update, [
            'SpellName', 'SpellLevel', 'SpellSchool', 'SpellCastTime',
            'SpellCastTimeText', 'SpellDistance', 'SpellDistanceText',
            'SpellVerbal', 'SpellSomat', 'SpellMaterial', 'SpellMaterials',
            'SpellDuration', 'SpellCaster', 'SpellArchtipes', 'SpellSource',
            'SpellDescription', 'SpellLevelDescription', 'SpellCheckBox'
        ])

        self.stdout.write(self.style.SUCCESS('Successfully transferred Spells to WheelSpells'))
