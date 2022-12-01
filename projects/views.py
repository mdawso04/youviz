from django.shortcuts import render, redirect

# Create your views here.
from .models import Datasource
from .forms import DatasourceForm
from project import settings
import os

def app_top(request):
    if request.user.is_authenticated:
        return render(request, 'projects/app_top.html')
    else:
        return render(request, 'projects/landing_top.html')
    
def dataframe(request, pk):
    if request.user.is_authenticated:
        d = Datasource.objects.filter(pk=int(pk)).last()
        if d and d.project.user == request.user:
            return render(request, 'projects/dataframe.html', {'datasource' : d})
    else:
        return render(request, 'projects/landing_top.html')

def report(request, pk):
    return render(request, 'projects/report.html', {'pk' : pk})

def model_form_upload(request):
    if request.method == 'POST':
        form = DatasourceForm(request.POST, request.FILES)
        print(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/table/')
    else:
        form = DatasourceForm()
    return render(request, 'projects/model_form_upload.html', {
        'form': form
    })

def youviz_js(request):
    return render(request, 'projects/youviz.js', content_type='text/javascript')
