from django.shortcuts import render, redirect

# Create your views here.
from .models import File
from .forms import FileForm
from project import settings
import os

def app_top(request):
    if request.user.is_authenticated:
        return render(request, 'projects/app_top.html')
    else:
        return render(request, 'projects/landing_top.html')

def model_form_upload(request):
    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)
        print(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/table/')
    else:
        form = FileForm()
    return render(request, 'projects/model_form_upload.html', {
        'form': form
    })
