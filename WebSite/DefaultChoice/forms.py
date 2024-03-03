from.models import Classes
from django.forms import ModelForm, TextInput, NumberInput, Textarea,BooleanField,CheckboxInput,ChoiceField,ImageField,ClearableFileInput
from django import forms
class UserForm(ModelForm):
    class Meta:
        model = Classes
        fields = ['ClassName','ClassCheckBox']