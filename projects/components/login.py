# django/unicorn/project
from django_unicorn.components import UnicornView
from django import forms
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render,redirect
from django.urls import reverse

# pp
import pp
from pp.log import logger

class LoginView(UnicornView):
    #form_class = HelloWorldForm
    #model = xxx
    
    #parent = None
    
    username = ""
    password = ""
    
    
    class Meta:
        javascript_exclude = ("username", "password", )   
    
    
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
    
    def mount(self):
        pass
        #logger.debug('LoginView > mount start')
        #logger.debug('LoginView > mount end')
        #self.call('testFunction', 'dataframe mount')
    
    def hydrate(self):
        pass
        #logger.debug('LoginView > hydrate start')
        #logger.debug('LoginView > hydrate end')
        #self.call('testFunction', 'dataframe hydrate')
    
    def updating(self, name, value):
        pass
        #logger.debug('LoginView > updating start')
        #logger.debug('LoginView > updating end')
        
    def updated(self, name, value):
        pass
        #logger.debug('LoginView > updated start')
        #logger.debug('LoginView > updated end')
        
    def calling(self, name, args):
        pass
        #logger.debug('LoginView > calling start')
        #logger.debug('LoginView > calling end')
        
    def called(self, name, args):
        pass
        #logger.debug('LoginView > called start')
        #logger.debug('LoginView > called end')
        
    def complete(self):
        #logger.debug('LoginView > complete start')
        logger.debug('LoginView > complete end')
        #self.call('btr')

    def rendered(self, html):
        #self.call('btr')
        #logger.debug('LoginView > rendered start')
        logger.debug('LoginView > rendered end')
        
    def parent_rendered(self, html):
        #logger.debug('LoginView > parent_rendered start')
        logger.debug('LoginView > parent_rendered end')
        #self.call('testFunction', 'dataframe parent_rendered') 