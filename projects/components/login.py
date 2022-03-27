from django_unicorn.components import UnicornView
from django import forms

#from django.conf import settings

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.shortcuts import render,redirect
from django.urls import reverse


class LoginView(UnicornView):
    #form_class = HelloWorldForm
    #model = xxx
    
    #parent = None
    
    username = ""
    password = ""
    
    
    class Meta:
        javascript_exclude = ("username", "password", )   
    
    
    def login(self):
        print('login login')
        user = authenticate(username=self.username,password=self.password)
        if user:
            if user.is_active:
                login(self.request, user)
                return redirect('app')
        else:
            messages.error(self.request,'username or password not correct')
            
    def logout(self):
        print('login logout')
        if self.request:
            logout(self.request)
            return redirect('app')
        
    def cancel(self):
        pass
    
    def mount(self):
        print('login mount')
        #self.call('testFunction', 'dataframe mount')
    
    def hydrate(self):
        print('login hydrate')
        #self.call('testFunction', 'dataframe hydrate')
    
    def updating(self, name, value):
        print('login updating ' + name)
    
    def updated(self, name, value):
        print('login updated ' + name)
    
    def calling(self, name, args):
        print('login calling ' + name)
    
    def called(self, name, args):
        print('login called ' + name)
    
    def complete(self):
        print('login complete')
        #self.call('btr')

    def rendered(self, html):
        #self.call('btr')
        print('login rendered')
   
    def parent_rendered(self, html):
        print('login parent_rendered')
        #self.call('testFunction', 'dataframe parent_rendered') 