from django.shortcuts import render
from .models import Classes
from .forms import UserForm
from django.http import HttpResponse

# Create your views here.

def Classes(request):
    error = ''
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = 'Форма неверная'

    form = UserForm()
    data = {
        'form': form,
        'error': error
    }

    return render(request, "registration/registerCharacter.html",data)
def WheelClasses(request):
    error = ''
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = 'Форма неверная'

    form = UserForm()
    data = {
        'form': form,
        'error': error
    }

    return render(request, "registration/registerCharacter.html",data)


def User(request):

    return render(request, "registration/registerUser.html")