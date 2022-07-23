# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import File, Item

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render,redirect

# pp
import pp
from pp.log import logger

class FilecontrolView(UnicornView):
    editing_file = False
    file: File = None
    items = Item.objects.none()
        
#LOAD/UPDATE

    def mount(self):
        #logger.debug('AppView > mount start')
        self.load_table()
        #logger.debug(f'AppView mount. Children: {self.children}')
        #logger.debug('AppView > mount end')
        
    def load_table(self):
        if self.file.learner_mode:
            self.items = Item.objects.filter(mission=self.file).all().order_by('-id')
        else:
            self.items = Item.objects.none()
        
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
        pass
        #logger.debug('LoginView > updated end')
        
#ACTIONS    
        
    def calling(self, name, args):
        #logger.debug('LoginView > calling start')
        pass
        #logger.debug('LoginView > calling end')
        
    def saveFileInfo(self):
        self.file.save()
        self.editing_file = False
        
    def called(self, name, args):
        #logger.debug('LoginView > called start')
        pass
        #logger.debug('LoginView > called end')
        
    def complete(self):
        #logger.debug('LoginView > complete start')
        pass
        #logger.debug('LoginView > complete end')
        
#RENDER
        
    def rendered(self, html):
        #logger.debug('LoginView > rendered start')
        pass
        #logger.debug('LoginView > rendered end')
        
    def parent_rendered(self, html):
        #logger.debug('LoginView > parent_rendered start')
        pass
        #logger.debug('LoginView > parent_rendered end')
        