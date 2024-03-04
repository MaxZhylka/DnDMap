from .models import Classes
from .models import WheelClasses
from .models import Spells
from django.forms import ModelForm, TextInput, NumberInput, Textarea,BooleanField,CheckboxInput,ChoiceField,ImageField,ClearableFileInput
from django import forms
class UserForm(ModelForm):
    class Meta:
        model = Classes,WheelClasses,Spells
        fields = ['ClassName','ClassCheckBox','SpellName','SpellEngName','SpellLevel','SpellSchool','SpellCastTime','SpellCastTimeText','SpellDistance','SpellDistanceText','SpellVerbal','SpellSomat','SpellMaterial','SpellMaterials','SpellDuration','SpellCaster','SpellArchtipes','SpellSource','SpellDescription','SpellLevelDescription']