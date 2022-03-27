from django_unicorn.components import UnicornView
from django import forms

#from django.conf import settings

from projects.models import Project, File, Viz
from projects.forms import FileForm
from project import settings
import pandas as pd
import plotly.express as px
import plotly.io as pio
import os

from django.shortcuts import render,redirect
from django.urls import reverse
#from django.contrib.auth import authenticate, login, logout
from django.contrib import messages



class AppView(UnicornView):
    #form_class = HelloWorldForm
    
    files = File.objects.none()
    file: File = None
    vizs = Viz.objects.none()
    data: dict = {}
    viz_types = [
        'Histogram',
        'Scatter',
        'Line',
        'Tree',
        'Hist list'
    ]
    remote_data = [
        {
            'name': 'Attrition',
            'link': 'https://github.com/IBM/employee-attrition-aif360/blob/master/data/emp_attrition.csv'
        }
    ]
    
    def mount(self):
        print('app mount')
        self.load_table()
        #self.call('testAppFunction', 'app mount')
    
    def load_table(self):
        print('app load table')
        
        '''
        for child in self.children:
            if hasattr(child, 'setData'):
                print(self.data)
                child.setData(self.data)
        '''
        if self.request:
            if self.request.user.is_authenticated:
                self.files = File.objects.filter(user=self.request.user).all().order_by('-id')
                self.file = self.files.first()
                filepath= os.path.join(str(settings.MEDIA_ROOT), str(self.file.document))
                self.data = pd.read_csv(filepath).iloc[0:15, 0:15].to_dict(orient='tight')
                self.vizs = Viz.objects.filter(file=self.file).all().order_by('-id')
            else:
                self.files = File.objects.none()
                self.file = None
                self.data = None
                self.vizs = Viz.objects.none()
                
    def df(self):
        return pd.DataFrame.from_dict(self.data, orient='tight') if self.data else None
    
    def toData(self, df):
        self.data = df.to_dict(orient='tight')
        
    def setFile(self, f):
        self.file = self.files.get(pk=f)
        self.load_table()
        '''
        #force bt reset
        for child in self.children:
            if hasattr(child, "resetBT"):
                child.resetBT()
        print("setfile")
        '''
        
    def addViz(self, viz_type):
        print("addViz")
        df = self.df()
        json = dict(
            viz_type=viz_type, 
            viz_params=dict(),
            x=None,
            y=None,
            color=None
        )
        v = Viz(file=self.file, title=viz_type, json=json)
        v.save()
        self.load_table()
        
    def uploadRemoteFile(self, f):
        #get data, make dataframe, check
        df = pd.DataFrame.from_csv('https://github.com/IBM/employee-attrition-aif360/blob/master/data/emp_attrition.csv')
        #form = FileForm(request.POST, request.FILES)
        #form = FileForm(initial={'description': 'xxxx', 'file': xxxx})
        if form.is_valid():
            form.save()
        print("uploadRemoteFile")
    
    '''
    def plot(self):
        df = self.df()
        if df is not None: 
            fig = px.histogram(self.df(), x='Attrition', color='Department')
            return pio.to_html(fig=fig, full_html=False, include_plotlyjs='cdn', include_mathjax=False)
        else:
            return None
    '''
    
    
    # LIFECYCLE 
    def hydrate(self):
        print('app hydrate')
        #self.call('testAppFunction', 'app hydrate')
        
    def updating(self, name, value):
        print('app updating ' + name)
    
    def updated(self, name, value):
        print('app updated ' + name)
    
    def calling(self, name, args):
        print('app calling ' + name)
    
    def called(self, name, args):
        print('app called ' + name)
    
    def complete(self):
        print('app complete')
        #self.call('testAppFunction', 'app complete')
    
    def rendered(self, html):
        #self.children = list(set(self.children))
        #print('app rendered')
        #print('app self.data:')
        #print(self.data)
        '''
        print('app self')
        print(self)
        print('app children:')
        print(self.children)
        '''
        '''
        for child in self.children:
            if hasattr(child, "datatable"):
                print('child.datatable:')
                print(child.datatable)
        '''
        #self.call('dropdownReload')
    
    def parent_rendered(self, html):
        print('app rendered')
        #self.call('testAppFunction', 'app parent_rendered')    
    
    # CUSTOM
    
    '''
    def sort(self, col):
        #self.df.sort_values(by=['col_1'])
        #print(col)
        #print(type(self.data))
        df = self.df().sort_values(by=[col])
        self.toData(df)
    '''
    
    def columns(self):
        return self.data['columns'] if self.data else None
    
    def records(self):
        return self.data['data'] if self.data else None  
        
    '''
    if request.method == 'POST':
            form = AuthenticationForm(request.POST)
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username,password=password)
            if user:
                if user.is_active:
                    login(request,user)
                    return redirect(reverse('your_success_url'))
            else:
                messages.error(request,'username or password not correct')
                return redirect(reverse('your_login_url'))


        else:
            form = AuthenticationForm()
        return render(request,'your_template_name.html',{'form':form})
        '''