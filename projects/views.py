from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.urls import reverse
#from django.contrib.auth.decorators import user_passes_test, permission_required
from guardian.decorators import permission_required
from guardian.utils import get_anonymous_user

# Create your views here.
from .models import Datasource
from .forms import DatasourceForm
from .decorators import check_user_able_to_see_page
from project import settings
from django.shortcuts import render, redirect

from projects.components.viz import VizView
from projects.components.dataframe import DataframeView
from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings

import os

#switch if any
#load item if any, judge request type & quality
#authorise
#marshal params
#render
default_template = 'projects/app_top.html'

@permission_required('projects.view_datasource')
def list(request):
    
    context = {
        'context': {
            'mode': 'list',
            'query': request.GET.get('query', ''),
            'page': request.GET.get('page', 1),
            'user': request.GET.get('user', ''), 
        }
    }
    
    return render(request, default_template, context)

@permission_required('projects.view_datasource')
def user(request, slug):
    context = {
        'context': {
            'mode': 'user',
            'query': request.GET.get('query', ''),
            'page': request.GET.get('page', 1),
            'user': request.GET.get('user', ''), 
            'slug': slug, 
        }
    }
    
    return render(request, default_template, context)

@permission_required('projects.view_datasource')
def view(request, slug):
    context = {
        'context': {
            'mode': 'view',
            'pk': None,
            'slug': slug, 
        }
    }
    
    return render(request, default_template, context)
    
'''
def _new(request):
    if request.user.is_authenticated:
        c = {'context': {'mode': 'new'}}
        return render(request, 'projects/app_top.html', c)
    else:
        return redirect(reverse('list'))
'''
    
def new(request):
    '''
    Handle 'new' requests
    '''
    context = {
        'context': {
            'mode': 'new'
        }
    }
    
    if request.GET['o'] == 'datamenu':
        context['context']['page'] = 'new.datamenu'
        return add_datamenu(request, context=context)

    elif request.GET['o'] == 'vizmenu':
        context['context']['page'] = 'new.vizmenu'
        return add_vizmenu(request, context=context)

    elif request.GET['o'] == 'datastream':
        context['context']['page'] = 'new.datastream'
        return add_datastream(request, context=context)
        
    elif request.GET['o'] == 'datasource':
        context['context']['page'] = 'new.datasource'
        return add_datasource(request, context=context)

    elif request.GET['o'] == 'viz':
        context['context']['page'] = 'new.viz'
        return add_viz(request, context=context)

    else:
        return redirect('/')

#@permission_required(TBD,)
def add_datamenu(request, context):
    return render(request, default_template, context)

#@permission_required('projects.add_viz',)
def add_vizmenu(request, context):
    return render(request, default_template, context)

#@permission_required('projects.add_datastream',)
def add_datastream(request, context):
    return render(request, default_template, context)

#@permission_required('projects.add_datasource',)
def add_datasource(request, context):
    return render(request, default_template, context)

#@permission_required('projects.add_viz',)
def add_viz(request, context):
    return render(request, default_template, context)

@permission_required('projects.view_datasource')
def viz(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'app'}}
    
    return VizView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

@permission_required('projects.view_datasource')
def viz_viewmode(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'view'}}
    
    return VizView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

@permission_required('projects.view_datasource')
def dataframe(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'app'}}
    
    return DataframeView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

@permission_required('projects.view_datasource')
def dataframe_viewmode(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'view'}}
    
    return DataframeView.as_view()(request, context=context, pk=pk, hash_k=hash_k)




'''
def app(request, pk=None):
    if request.user.is_authenticated:
        c = {'context': {'mode': 'app', 'pk': pk}}
        return render(request, 'projects/app_top.html', c)
    else:
        return render(request, 'projects/landing_new.html')

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

def dataframe(request, pk):
    if request.user.is_authenticated:
        d = Datasource.objects.filter(pk=int(pk)).last()
        if d and d.project.user == request.user:
            return render(request, 'projects/dataframe.html', {'datasource' : d})
    else:
        return render(request, 'projects/landing_top.html')

def report(request, pk):
    return render(request, 'projects/report.html', {'pk' : pk})
    
'''

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

'''

def youviz_js(request):
    return render(request, 'projects/youviz.js', content_type='text/javascript')
    
'''

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