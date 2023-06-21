# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Datasource, Item

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render, redirect

# pp
import pp
from pp.log import logger

class AppsettingsView(UnicornView):
    #editing_datasource = False
    datasources: Datasource.objects.none()
    datasource: Datasource = None
    #items = Item.objects.none()
    
    class Meta:
        javascript_exclude = ('datasources', 'datasource.document') 
        
#LOAD/UPDATE

    def mount(self):
        #logger.debug('AppView > mount start')
        self.load_table()
        #logger.debug(f'AppView mount. Children: {self.children}')
        #logger.debug('AppView > mount end')
        
    def load_table(self):
        pass
        '''
        if hasattr(self.datasource, 'items'):
            self.items = self.datasource.items.all()
        else:
            self.items = Item.objects.none()
        '''
        #if self.file.learner_mode:
        #    self.items = Item.objects.filter(file=self.file).all().order_by('-id')
        #else:
        #    self.items = Item.objects.none()
        
    def hydrate(self):
        #logger.debug('LoginView > hydrate start')
        pass
        #logger.debug('LoginView > hydrate end')
        
    def updating(self, name, value):
        #logger.debug('LoginView > updating start')
        pass
        #logger.debug('LoginView > updating end')
        
    def updated(self, name, value):
        #logger.debug('LoginView > updated start')
        if name:
            self.datasource.save()
        #logger.debug('LoginView > updated end')
        
#ACTIONS    
        
    def calling(self, name, args):
        #logger.debug('LoginView > calling start')
        pass
        #logger.debug('LoginView > calling end')
    
    '''
    def saveDatasourceInfo(self):
        self.datasource.save()
        self.editing_datasource = False
    '''
    
    def refreshDatasource(self):
        self.parent.refreshDatasource()
        return redirect('/')
    
    def deleteDatasource(self, pk):
        self.parent.deleteDatasource()
        return redirect('/')
        
    '''
    def switch_learner_mode(self):
        print('**************************')
        self.parent.project.learner_mode = not self.parent.project.learner_mode
        self.parent.project.save()
        #self.project.refresh_from_db()
        #self.parent.load_table()
        return redirect('/')
    '''
       
    def called(self, name, args):
        #logger.debug('LoginView > called start')
        pass
        #logger.debug('LoginView > called end')
        
    def complete(self):
        #logger.debug('LoginView > complete start')
        logger.debug('FileControlView > complete end')
        
#RENDER
        
    def rendered(self, html):
        #logger.debug('LoginView > rendered start')
        pass
        #logger.debug('LoginView > rendered end')
        
    def parent_rendered(self, html):
        #logger.debug('LoginView > parent_rendered start')
        pass
        #logger.debug('LoginView > parent_rendered end')
        