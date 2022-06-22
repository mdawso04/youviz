from django.shortcuts import render, redirect

# Create your views here.
from projects.models import Project
from .models import File
from .forms import FileForm
from project import settings
import os

def project_index(request):
    projects = Project.objects.all()
    
    #dataframe load
    lastfile= File.objects.last()
    filepath= os.path.join(str(settings.MEDIA_ROOT), str(lastfile.document))
    
    context = {
        'projects': projects,
        'filepath': filepath,      
    }
    
    return render(request, 'projects/project_index.html', context)

def project_detail(request, pk):
    project = Project.objects.get(pk=pk)
    context = {
        'project': project
    }
    return render(request, 'projects/project_detail.html', context)

def app_top(request):
    return render(request, 'projects/app_top.html')


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

def table(request):
    projects = Project.objects.all()
    
    #dataframe load
    lastfile= File.objects.last()
    filepath= os.path.join(str(settings.MEDIA_ROOT), str(lastfile.document))
    
    context = {
        'projects': projects,
        'filepath': filepath,      
    }
    
    return render(request, 'projects/table.html', context)