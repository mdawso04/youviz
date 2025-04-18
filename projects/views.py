from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.urls import reverse
from django.http import Http404
from django.http import JsonResponse

# Create your views here.
from .models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover, Comment
from .forms import DatasourceForm
from .decorators import check_user_able_to_see_page
from project import settings
from django.shortcuts import render, redirect

from projects.components.viz import VizView
from projects.components.dataframe import DataframeView
from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings

import os

default_template = 'projects/app_top.html'

def top_list(request, search=False):    
    context = {
        'context': {
            'mode': 'list',
            'query': request.GET.get('query', ''),
            'page': request.GET.get('page', 1),
            'user': request.GET.get('user', ''), 
            'search': search, 
        }
    }
    return render(request, default_template, context)

def search(request):    
    return top_list(request, search=True)

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

def view(request, slug):
    context = {
        'context': {
            'mode': 'view',
            'pk': None,
            'slug': slug, 
        }
    }
    return render(request, default_template, context)




import csv
from django.http import StreamingHttpResponse

class Echo:
    """An object that implements just the write method of the file-like
    interface.
    """

    def write(self, value):
        """Write the value by returning it, instead of storing in a buffer."""
        return value

def api(request, key, token, api_id):
    """A view that streams a large CSV file."""
    # Generate a sequence of rows. The range is based on the maximum number of
    # rows that can be handled by a single sheet in most spreadsheet
    # applications.
    vizs = Viz.list()
    header_row = (['datasource_slug', 'datasource_name'],)
    data_rows = ([v.datasource.slug, v.datasource.name] for v in vizs)
    rows = tuple(list(header_row) + list(data_rows))
    pseudo_buffer = Echo()
    writer = csv.writer(pseudo_buffer)
    return StreamingHttpResponse(
        (writer.writerow(row) for row in rows),
        content_type="text/csv",
        headers={"Content-Disposition": 'attachment; filename="somefilename.csv"'},
    )
    
def new(request):
    '''
    Handle 'new' requests
    '''
    context = {
        'context': {
            'mode': 'new',
        }
    }
    return render(request, default_template, context)

def add_datamenu(request, context):
    return render(request, default_template, context)

def add_vizmenu(request, context):
    return render(request, default_template, context)

def add_datastream(request, context):
    return render(request, default_template, context)

def add_datasource(request, context):
    return render(request, default_template, context)

def add_viz(request, context):
    return render(request, default_template, context)

def viz(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'app'}}
    
    return VizView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

def viz_viewmode(request, pk = None, hash_k = None, session_salt = None):
    context = {'context': {'mode': 'view'}}
    
    #ignore session_salt - its only to trigger client-side cache refresh
    
    return VizView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

def viz_data(request, pk = None):
    viz = Viz.item(pk=pk)
    ds = viz.datasource
    current_user = request.user
    
    if ds.is_published:
        if not any({current_user.has_perm('projects.view_published_datasource', ds), current_user.has_perm('projects.view_datasource', ds)}):
            raise Http404()
    else:
        if not current_user.has_perm('projects.view_datasource', ds):
            raise Http404()
    
    #context = {'context': {'mode': 'data', 'viz': viz}}
    
    #return render(request, 'projects/data.json', context)
    
    cols = [{"title": c} for c in viz.datatable_preview["columns"]]
    dtypes = [{"title": dt, "field": c, "switchableLabel": c } for c, dt in zip(viz.datatable_preview["columns"], viz.datatable_preview["dtypes"])]
   
    #replace Nan with None to prevent JSON decode error in client browser
    rows = [{k: v for k, v in zip(viz.datatable_preview["columns"], r)} for r in viz.datatable_preview["data"]]
    res = {"columns": [cols, dtypes], "rows": rows}
    #res = {"columns": cols, "rows": rows}
    return JsonResponse(res)


def dataframe(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'app'}}
    
    return DataframeView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

def dataframe_viewmode(request, pk = None, hash_k = None):
    context = {'context': {'mode': 'view'}}
    
    return DataframeView.as_view()(request, context=context, pk=pk, hash_k=hash_k)

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
    
def handler404(request, exception):
    return render(request, 'projects/handler404.html')