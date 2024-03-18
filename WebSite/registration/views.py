from django.shortcuts import render
from rest_framework import viewsets
from .models import Character
from .serializer import CharacterSerializer
from .forms import CharacterForm
from django.http import HttpResponse

# Create your views here.
class CharacterApiView(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
def Character(request):
    error = ''
    if request.method == 'POST':
        form = CharacterForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = 'Форма неверная'

    form = CharacterForm()
    data = {
        'form': form,
        'error': error
    }

    return render(request, "registration/registerCharacter.html",data)




def User(request):

    return render(request, "registration/registerUser.html")

