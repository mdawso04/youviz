# django/unicorn/project
from django.core.files.base import ContentFile

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
    project: Project = None
    files = File.objects.none()
    file: File = None
    vizs = Viz.objects.none()
    
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
                self.project = Project.objects.filter(user=self.request.user).last()
                if not self.project:
                    self.addProject()
                self.files = File.objects.filter(project=self.project).all().order_by('-id')
                if not self.files:
                    self.getRemoteData()
                if not self.file:
                    self.file = File.objects.filter(pk=self.project.selected_file).last()
                    if not self.file:
                        self.file = File.objects.last()
                self.vizs = Viz.objects.filter(file=self.file).all().order_by('-id')
                if not self.vizs:
                    self.addViz()
                #logger.debug('AppView > load_table (user authenticated) end')
            else:
                #logger.debug('AppView > load_table (user not authenticated) start')
                self.files = File.objects.none()
                self.file = None
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

    def addProject(self, description='NewProject'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        p = Project(description=description, user=self.request.user)
        p.save()
        self.load_table()
        #logger.debug('AppView > addViz end')
        
    def setFile(self, f):
        self.file = self.files.get(pk=f)
        self.project.selected_file = f
        self.project.save()
        self.load_table()
        
        return redirect('/projects/app')
        
    def deleteFile(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        #f = File.objects.get(pk=pk)
        #f.document.delete(False)
        #f.delete()
        self.file.document.delete()
        self.file.delete()
        
        self.files = File.objects.none()
        self.file = None
        self.vizs = Viz.objects.none()
        #Viz.objects.filter(file=self.file).all().delete()
        
        '''
        for child in self.children:
            if hasattr(child, "is_editing"):
                child.is_editing = False
        '''
        self.load_table()
        
        #return redirect('/projects/app')
        
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
        
        return redirect('/projects/app')
        #logger.debug('AppView > addViz end')
        
    def copyViz(self, pk):
        v = Viz.objects.get(pk=pk)
        v.pk = None
        v.save()
        self.load_table()
        
        return redirect('/projects/app')
        
    def deleteViz(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        v = Viz.objects.get(pk=pk)
        v.delete()
        self.load_table()
        
        #return redirect('/projects/app')
        
    def getRemoteData(self, service='READ_DATA_ATTRITION'):
        #logger.debug('AppView > addRemoteFile start')
        #get data, make dataframe, check
        
        
        a = pp.App()
        a.add(service)
        df = a.call()
        
        content = df.to_csv(index=False)
        temp_file = ContentFile(content.encode('utf-8'))
        f = File(description=f'{service}.csv', project=self.project)
        f.document.save(f'{service}.csv', temp_file)
        f.save()
        
        self.file = f
        #File.objects.create(description=f'{service}.csv',
        #                    document=temp_file,
        #                    user=self.request.user)
        #f.save()
        #f.save(f'{service}.csv', temp_file)
        
        self.load_table()
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
    def remote_data(self):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    
    def rendered(self, html):
        #pass
        #logger.debug('AppView > rendered start')
        logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        pass
        #logger.debug('AppView > parent_rendered start')
        #logger.debug('AppView > parent_rendered end')
        
#RENDER END