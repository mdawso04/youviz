# django/unicorn/project
from django_unicorn.components import UnicornView

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
#from django.contrib import messages

#python standard libraries
import os

# pp
from pp.log import logger

class LandingView(UnicornView):
    
    get_started_main = True
    signin_main = False
    features_main = False
    register_user = False
    username = ""
    password = ""
    password_confirm = ""
    email = ""
    
    class Meta:
        javascript_exclude = ("username", "password", "password_confirm", "email")   
    
#LOAD/UPDATE
    
    def mount(self):
        #logger.debug('AppView > mount start')
        pass
        #logger.debug('AppView > mount end')
        
    def hydrate(self):
        #logger.debug('AppView > hydrate start')
        pass
        #logger.debug('AppView > hydrate end')
        
    def updating(self, name, value):
        #logger.debug('AppView > updating start')
        pass
        #logger.debug('AppView > updating end')
    
    def updated(self, name, value):
        #logger.debug('AppView > updated start')  
        if name == 'get_started_main':
            self.signin_main, self.features_main = False, False
        elif name == 'signin_main':
            self.get_started_main, self.features_main = False, False
        elif name == 'features_main':
            self.get_started_main, self.signin_main = False, False
            
        #logger.debug('AppView > updated end')
    
#ACTIONS

    def calling(self, name, args):
        #logger.debug('AppView > calling start')
        pass
        #logger.debug('AppView > calling end')

    def register(self):
        #logger.debug('AppView > addViz start')
        user = User.objects.create_user(self.email, self.email, self.password)
        user.save()
        self.username = self.email
        user = authenticate(username=self.username,password=self.password)
        if user:
            if user.is_active:
                login(self.request, user)
                return redirect('/')
        else:
            messages.error(self.request,'username or password not correct')
        #logger.debug('AppView > addViz end')
        
    def signin(self):
        user = authenticate(username=self.username,password=self.password)
        if user:
            if user.is_active:
                login(self.request, user)
                return redirect('/')
        else:
            messages.error(self.request,'username or password not correct')
            
    def called(self, name, args):
        #logger.debug('AppView > called start')
        pass
        #logger.debug('AppView > called end')
            
    def complete(self):
        #logger.debug('AppView > complete start')
        logger.debug('AppView > complete end')

#RENDER

    def rendered(self, html):
        #logger.debug('AppView > rendered start')
        pass
        #logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('AppView > parent_rendered start')
        pass
        #logger.debug('AppView > parent_rendered end')