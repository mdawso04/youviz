# django/unicorn/project
from django_unicorn.components import UnicornView
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render,redirect

# pp
import pp
from pp.log import logger

class LoginView(UnicornView):
    username = ""
    password = ""
    
    class Meta:
        javascript_exclude = ("username", "password", )   
        
#LOAD/UPDATE

    def mount(self):
        #logger.debug('LoginView > mount start')
        pass
        #logger.debug('LoginView > mount end')
        
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
        
    def login(self):
        #logger.debug('LoginView > login start')
        user = authenticate(username=self.username,password=self.password)
        if user:
            if user.is_active:
                login(self.request, user)
                logger.debug('LoginView > login end')
                return redirect('/projects/app')
        else:
            messages.error(self.request,'username or password not correct')
            
    def logout(self):
        logger.debug('LoginView > logout start')
        if self.request:
            logout(self.request)
            logger.debug('LoginView > logout end')
            return redirect('/projects/app')
        
    def cancel(self):
        pass
    
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
        