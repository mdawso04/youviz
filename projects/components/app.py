# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from django import forms
from django.shortcuts import render,redirect
from django.urls import reverse
#from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
#from django.conf import settings
from projects.models import Project, File, Viz
from projects.forms import FileForm
from project import settings

# pp
import pp
from pp.log import logger

#python standard libraries
import os

#non-standard libraries
import pandas as pd
import plotly.express as px
import plotly.io as pio

class AppView(UnicornView):
    files = File.objects.none()
    file: File = None
    #vizs: QuerySetType[Viz] = None
    vizs = Viz.objects.none()
    #activeTab = None
    
    def __init__(self, *args, **kwargs):
        super().__init__(**kwargs)  # calling super is required
        logger.debug(f'AppView init')
        
    
#LOAD/UPDATE START
    
    def mount(self):
        #logger.debug('AppView > mount start')
        self.load_table()
        logger.debug(f'AppView mount. Children: {self.children}')
        #logger.debug('AppView > mount end')
        
    def load_table(self):
        if self.request:
            if self.request.user.is_authenticated:
                #logger.debug('AppView > load_table (user authenticated) start')
                self.files = File.objects.filter(user=self.request.user).all().order_by('-id')
                self.file = self.files.first()
                filepath= os.path.join(str(settings.MEDIA_ROOT), str(self.file.document))
                #self.data = pd.read_csv(filepath).iloc[0:15, 0:15].to_dict(orient='tight')
                self.vizs = Viz.objects.filter(file=self.file).all().order_by('-id')
                #self.activeTab = str(self.vizs[0].pk)
                #logger.debug('vizs: {}'.format(self.vizs))
                #logger.debug('AppView > load_table (user authenticated) end')
            else:
                #logger.debug('AppView > load_table (user not authenticated) start')
                self.files = File.objects.none()
                self.file = None
                #self.data = None
                self.vizs = Viz.objects.none()
                #logger.debug('AppView > load_table (user not authenticated) end')
    
    def hydrate(self):
        pass
        #logger.debug('AppView > hydrate start')
        #logger.debug('AppView > hydrate end')
        
    def updating(self, name, value):
        pass
        #logger.debug('AppView > updating start')
        #logger.debug('AppView > updating end')
    
    def updated(self, name, value):
        pass
        #logger.debug('AppView > updated start')
        #logger.debug('AppView > updated end')
    
#LOAD/UPDATE END
#ACTIONS START

    def calling(self, name, args):
        pass
        #logger.debug('AppView > calling start')
        #logger.debug('AppView > calling end')

    def setFile(self, f):
        self.file = self.files.get(pk=f)
        self.load_table()
        
    def addViz(self, viz_type='NewViz'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        filepath= os.path.join(str(settings.MEDIA_ROOT), str(self.file.document))
        a = pp.App()
        a.add('READ_CSV', {'src': filepath})
        a.add('VIZ_HIST', {'x': 'Age'})
        json = a.todos
        v = Viz(file=self.file, title=viz_type, json=json)
        v.save()
        self.load_table()
        #logger.debug('AppView > addViz end')
        
    def copyViz(self, pk):
        v = Viz.objects.get(pk=pk)
        v.pk = None
        v.save()
        self.load_table()
        
    def uploadRemoteFile(self, f):
        #logger.debug('AppView > addRemoteFile start')
        #get data, make dataframe, check
        df = pd.DataFrame.from_csv('https://github.com/IBM/employee-attrition-aif360/blob/master/data/emp_attrition.csv')
        #form = FileForm(request.POST, request.FILES)
        #form = FileForm(initial={'description': 'xxxx', 'file': xxxx})
        if form.is_valid():
            form.save()
        #logger.debug('AppView > addRemoteFile end')
        
    def called(self, name, args):
        pass
        #logger.debug('AppView > called start')
        #logger.debug('AppView > called end')
    
#ACTIONS END
        
    def complete(self):
        #logger.debug('AppView > complete start')
        logger.debug('AppView > complete end')

#RENDER START

    '''
    def test_test(self):
        #logger.debug('AppView > test_test start')
        #logger.debug('AppView > test_test end')
        return 'This is some test text'
    
    def child_test(self):
        #logger.debug('AppView > child_test start')
        c = None
        for child in self.children:
            if hasattr(child, 'viz'):
                logger.debug(child)
                c = child
        #logger.debug('AppView > child_test end')
        return c
    ''' 
    '''    
    def df(self):
        return pd.DataFrame.from_dict(self.data, orient='tight') if self.data else None
    
    def toData(self, df):
        self.data = df.to_dict(orient='tight')
    '''    
    def rendered(self, html):
        #pass
        #logger.debug('AppView > rendered start')
        logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        pass
        #logger.debug('AppView > parent_rendered start')
        #logger.debug('AppView > parent_rendered end')
        
#RENDER END