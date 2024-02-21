from django.shortcuts import render
from .models import Character
from .forms import CharacterForm
from django.http import HttpResponse

# Create your views here.

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