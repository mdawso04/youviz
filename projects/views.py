from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

# Create your views here.
from .models import Datasource
from .forms import DatasourceForm
from project import settings
import os

def app(request, pk=None):
    if request.user.is_authenticated:
        c = {'context': {'mode': 'app', 'pk': pk}}
        return render(request, 'projects/app_top.html', c)
    else:
        return render(request, 'projects/landing_new.html')

def list(request):
    query = request.GET.get('query', '')
    page = request.GET.get('page', 1)
    user = request.GET.get('user', '')
    c = {'context': {'mode': 'list', 'query': query, 'page': page, 'user': user}}
    return render(request, 'projects/app_top.html', c)

def view(request, pk):
    if True: #id is valid && share is on
        c = {'context': {'mode': 'view', 'pk': pk}}
        return render(request, 'projects/app_top.html', c)
    else:
        return list(request)

def new_viz_list(request):
    if request.user.is_authenticated:
        c = {'context': {'mode': 'new_viz_list'}}
        return render(request, 'projects/app_top.html', c)
    else:
        return render(request, 'projects/landing_new.html')

def new_viz(request, pk):
    if request.user.is_authenticated:
        c = {'context': {'mode': 'new_viz', 'pk': pk}}
        return render(request, 'projects/app_top.html', c)
    else:
        return render(request, 'projects/landing_new.html')

'''
    def share(request, pk):
    if True: #id is valid && share is on
        context = {'mode': 'share'}
        return render(request, 'projects/app_top.html', context)
    else:
        return render(request, 'projects/landing_new.html')

def gallery(request, pk):
    if request.user.is_authenticated:
        return render(request, 'projects/app_top.html', {'pk': pk, 'gallery_mode':True})
    else:
        return render(request, 'projects/landing_new.html')
'''

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

def signup(request):
    if request.user.is_authenticated:
        return redirect('/')
     
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
 
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username = username, password = password)
            login(request, user)
            return redirect('/')
         
        else:
            return render(request,'projects/landing_new.html',{'form':form})
     
    else:
        form = UserCreationForm()
        return render(request,'projects/landing_new.html',{'form':form})

def login(request):
    if request.user.is_authenticated:
        return redirect('/')
     
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username =username, password = password)
 
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            form = AuthenticationForm()
            return render(request,'projects/landing_new.html',{'form':form})
     
    else:
        form = AuthenticationForm()
        return render(request, 'projects/landing_new.html', {'form':form})