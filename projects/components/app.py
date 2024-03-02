# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification
from django.contrib.auth.models import User

from django.core.files.base import ContentFile
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.urls import reverse
from project import settings
#from django.contrib import messages

# pp
import pp
from pp.log import logger

#python standard libraries
import os
import copy
from io import BufferedIOBase
from datetime import datetime

#non-standard libraries
#none

class AppView(UnicornView):
    datasources: QuerySetType[Datasource] = None
    datasource: Datasource = None
    vizs: QuerySetType[Viz] = None
    #report: Report = None
    
    list_items: QuerySetType[Datasource] = None
    
    datastreams: QuerySetType[Datastream] = None
    
    services: list = None
    
    meta_object: BaseModel = None
    
    message: dict = None
    
    page: str = None
    
    siteuser: User = None
    
    notification: Notification = None
    
    ad: Notification = None
    
    class Meta:
        javascript_exclude = ('datastreams', 'datasources', 'datasource.data', 'vizs', 'list_items', 'siteuser', ) 
    
    #def __init__(self, *args, **kwargs):
    #    super().__init__(**kwargs)  # calling super is required
    #    self.mode = kwargs.get('mode')
    #    self.pk = kwargs.get('pk')
    
#LOAD/UPDATE
    
    def mount(self):
        self.load_table()
        
    def load_table(self):
        
        #not logged in
        #  appmode->landing
        #  listmode->show list
        #  viewmode->show viz
        #logged in
        #  appmode->app
        #  listmode->show list
        #  viewmode->show viz
        
        if self.request:
            # collect various params
            self.context = self.component_kwargs['context']
            
            '''
            if hasattr(self.request, '_body'):
                b = json.loads(self.request._body)
                pk = b['data']['viz']['pk']
                #logger.debug('PK FROM BODY: ' + str(pk))
            
            elif hasattr(self, 'kwargs'):
                pk = self.kwargs['pk']
                #logger.debug('PK FROM KWARGS: ' + str(pk))
            
            '''
            
            
            
            if self.context['mode'] == 'list':
                self.list_items = Datasource.list(query=self.context['query'])
                #self.notification = Notification.objects.filter(position=Notification.LIST).last()
                #self.ad = Notification.objects.filter(position=Notification.LIST_AD).last()
                return #do nothing
            
            elif self.context['mode'] == 'user':
                self.siteuser = User.objects.get(username=self.context['username'])
                self.list_items = Datasource.list(owner=self.siteuser.pk)
                #self.notification = Notification.objects.filter(position=Notification.USER).last()
                return #do nothing
            
            
            elif self.context['mode'] == 'view':
                
                if self.context['pk']:
                    self.datasource = Datasource.item(pk=self.context['pk'])
                    self.meta_object = self.datasource
                    self.ad = Notification.objects.filter(position=Notification.VIEW_AD).last()
                    
                elif self.context['slug']:
                    self.datasource = Datasource.item(slug=self.context['slug'])
                    self.meta_object = self.datasource
                    self.ad = Notification.objects.filter(position=Notification.VIEW_AD).last()
                
                def get_client_ip(request):
                    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
                    if x_forwarded_for:
                        ip = x_forwarded_for.split(',')[0]
                    else:
                        ip = request.META.get('REMOTE_ADDR')
                    return ip
                
                ItemView.objects.get_or_create(IPAddress=get_client_ip(self.request), datasource=self.datasource)
                
                
                #if hasattr(self.datasource, 'reports'):
                #    self.report = self.datasource.reports.last()
                #if not self.report:
                #    self.addReport()
            
            elif self.context['mode'] == 'new':
                
                if self.request.GET['o'] == 'datamenu':
                    self.services = Datastream.services()
                    self.datastreams = Datastream.list()
                    self.page = 'new.datamenu'
                    self.message = {
                        'class': 'alert-info',
                        'content': 'Select below to add a new item'
                    }
                    
                elif self.request.GET['o'] == 'vizmenu':
                    self.services = Viz.services()
                    self.datasource = Datasource.item(pk=self.request.GET['datasource'])
                    self.page = 'new.vizmenu'
                    self.message = {
                        'class': 'alert-info',
                        'content': 'Select below to add a new item'
                    }
                
                elif self.request.GET['o'] == 'datastream':
                    kwargs = {k : v for (k, v) in self.request.GET.items() if k in ('url',)}
                    if len(kwargs) == 1:
                        self.add(
                            cls=Datastream,
                            **kwargs
                            #call_redirect='list'
                        )
                    self.page = 'new.datastream.complete'
                    self.message = {
                        'class': 'alert-info',
                        'content': 'Datastream added!'
                    } 
                
                elif self.request.GET['o'] == 'datasource':
                    kwargs = {k : v for (k, v) in self.request.GET.items() if k in ('datastream',)}
                    if len(kwargs) == 1:
                        self.datasource = self.add(
                            cls=Datasource,
                            datastream=Datastream.item(pk=kwargs['datastream'])
                            #call_redirect='list'
                        )
                        self.add(
                            cls=Viz,
                            datasource=self.datasource,
                            #call_redirect='list'
                        )
                    self.page = 'new.datasource.complete'
                    self.message = {
                        'class': 'alert-info',
                        'content': 'Datasource added!'
                    }
                
                elif self.request.GET['o'] == 'viz':
                    kwargs = {k : v for (k, v) in self.request.GET.items() if k in ('datasource',)}
                    if len(kwargs) == 1:
                        self.datasource = Datasource.item(pk=kwargs['datasource'])
                        self.add(
                            cls=Viz,
                            datasource=self.datasource,
                            #call_redirect='list'
                        )
                    self.page = 'new.viz.complete'
                    self.message = {
                        'class': 'alert-info',
                        'content': 'Viz added!'
                    }
                
                else:
                    self.page = 'new.error'
                    self.message = {
                        'class': 'alert-danger',
                        'content': 'Oops! Something went wrong!'
                    }
                    
            else:
                self.datasources = Datasource.objects.none()
                self.datasource = None
                self.vizs = Viz.objects.none()
            '''
            elif self.context['mode'] == 'view':
            #    self.datasource = Datasource.objects.get(pk=self.context['pk'])
            #    self.vizs = self.datasource.vizs.all()
            #    if hasattr(self.datasource, 'reports'):
            #        self.report = self.datasource.reports.last()
                if not self.project:
                    self.project, created = Project.objects.get_or_create(user=self.request.user)
                self.datasources = Datasource.datasources(self.project)
                if self.context['pk']:
                    self.project.selected_datasource = self.context['pk']
                    self.project.save()
                elif not self.project.selected_datasource:
                    self.project.selected_datasource = self.datasources.first().pk
                    self.project.save()
                if not self.datasource:
                    try:
                        self.datasource = self.datasources.get(pk=self.project.selected_datasource)
                    except:
                        self.datasource = self.datasources.first()
                self.vizs = self.datasource.vizs.all()
                if not self.vizs:
                    self.addViz(call_redirect=False)
                    self.vizs = Viz.objects.filter(datasource=self.datasource).all().order_by('-id')
                if hasattr(self.datasource, 'reports'):
                    self.report = self.datasource.reports.last()
                if not self.report:
                    self.addReport()
            '''
            '''
            elif self.context['mode'] == 'new_viz':
                self.datasource = Datasource.from_datastream(self.context['pk'])
                self.addViz(call_redirect=False)
                self.vizs = Viz.objects.filter(datasource=self.datasource).all().order_by('-id')
                self.addReport()
            '''
            
            
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
        if 'user.profiles' in name:
            self.request.user.profiles.save()
        elif 'datasource.' in name:
            self.datasource.save()
        #logger.debug('AppView > updated end')
        
#ACTIONS

    def add(self, *args, **kwargs):
        '''
        Adds a new object to the database and optionally redirects the browser after adding.

                Parameters:
                        cls (Class): Optional. The class to create an instance for
                        cls_name (str): Optional. The name of the class to create an instance for
                        call_redirect (str): Optional. The url name to redirect to, or False (default) to return the new instance
                        Other kwargs to pass when creating new instance. owner (User) is required for all objects.

                Returns:
                        object (object): The new instance if no redirect is requested
        '''
        params = {k: v for k, v in kwargs.items() if k not in ('cls', 'cls_name', 'call_redirect')}
        
        if 'cls' in kwargs:
            cls = kwargs['cls']
        else:
            cls = vars()[kwargs['cls_name']]
        
        o = cls.add(
            owner=self.request.user, 
            **params
        )
        
        if 'call_redirect' in kwargs:
            if kwargs['call_redirect']:
                return redirect(reverse(kwargs['call_redirect']))
        
        return o
    
    def copy(self, *args, **kwargs):
        '''
        Adds a new object to the database and optionally redirects the browser after adding.

                Parameters:
                        cls (Class): Optional. The class to create an instance for
                        cls_name (str): Optional. The name of the class to create an instance for
                        call_redirect (str): Optional. The url name to redirect to, or False (default) to return the new instance
                        Other kwargs to pass when creating new instance. owner (User) is required for all objects.

                Returns:
                        object (object): The new instance if no redirect is requested
        '''
        params = {k: v for k, v in kwargs.items() if k not in ('cls', 'cls_name', 'call_redirect')}
        
        if 'cls' in kwargs:
            cls = kwargs['cls']
        else:
            cls = vars()[kwargs['cls_name']]
        
        o = cls.copy(**params)
        
        if 'call_redirect' in kwargs:
            if kwargs['call_redirect'] is not False:
                return redirect(reverse(kwargs['call_redirect']))
        
        return o
    
    def delete(self, *args, **kwargs):
        '''
        Delete an object from the database and optionally redirects the browser after deleting.

                Parameters:
                        cls (Class): Optional. The class to create an instance for
                        cls_name (str): Optional. The name of the class to create an instance for
                        call_redirect (str): Optional. The url name to redirect to, or False (default) to return the new instance
                        Other kwargs to pass when creating new instance. instance (Class) or pk (int) is required.

                Returns:
                        None
        '''
        params = {k: v for k, v in kwargs.items() if k not in ('cls', 'cls_name', 'call_redirect')}
        
        if 'cls' in kwargs:
            cls = kwargs['cls']
        else:
            cls = vars()[kwargs['cls_name']]
        
        cls.delete(**params)
        
        if 'call_redirect' in kwargs:
            if kwargs['call_redirect'] is not False:
                return redirect(reverse(kwargs['call_redirect']))
            
        return redirect(reverse('list'))
    
    def delete_datasource(self, pk):
        return self.delete(cls=Datasource, pk=pk, call_redirect='list')
        

    def calling(self, name, args):
        #logger.debug('AppView > calling start')
        pass
        #logger.debug('AppView > calling end')
        
    '''
    def addDatasource(self, datastream_pk, call_redirect=False):
        d = Datasource.new(
                owner=self.request.user, 
                datastream=Datastream.item(pk=datastream_pk)
            )
    '''

    def setDatasource(self, f):
        self.datasource = self.datasources.get(pk=f)
        self.project.selected_datasource = f
        self.project.save()
        self.load_table()
        #return redirect('/projects/app')
                    
    '''
    def deleteDatasource(self, pk):
        # no files on disk so delete this
        #self.file.document.delete()
        self.datasource.delete()
        self.datasources = Datasource.objects.none()
        self.datasource = None
        self.vizs = Viz.objects.none()
        #Viz.objects.filter(file=self.file).all().delete()
        self.load_table()
        return redirect(reverse('app'))
    '''
    
    '''
    def addViz(self, call_redirect=True):
        Viz.add(self.datasource)
        if call_redirect:
            return redirect(reverse('app_all'))
        #logger.debug('AppView > addViz end')
    '''
        
    def copyViz(self, pk):
        Viz.copy(pk)
        self.load_table()
        return redirect(reverse('app_all'))
        
    def deleteViz(self, pk):
        Viz.delete(pk)
        self.load_table()
        return redirect(reverse('app_all'))
    
    '''
    def selectViz(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        self.file.selected_viz = pk
        self.file.save()
    '''    
    
    '''
    def switch_learner_mode(self):
        self.project.learner_mode = not self.project.learner_mode
        self.project.save()
        #self.project.refresh_from_db()
        self.load_table()
        return redirect('/projects/app')
    '''
    
    def addReport(self, name='NewReport'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        r = Report(name=name, datasource=self.datasource)
        self.report = r
        r.save()
        #self.load_table()
        #logger.debug('AppView > addViz end')
        
    def refreshDatasource(self, pk):
        #logger.debug('AppView > addViz start')
        d = Datasource.item(pk=pk)
        d.refresh()
        return redirect(reverse('view', args=[pk]))
        #logger.debug('AppView > addViz end')
        
    def getRemoteData(self, service='READ_DATA_ATTRITION', name='no_name'):
        #logger.debug('AppView > addRemoteFile start')
        Datasource.getRemoteData(self.project)
    '''    a = pp.App()
        a.add(service)
        df = a.call()
        content = df.to_csv(index=False)
        json = a.todos
        # no files on disk so delete
        #temp_file = ContentFile(content.encode('utf-8'))
        f = Datasource(name=name, description=service, project=self.project, 
                       json=json, document=content, learner_mode=self.project.learner_mode, last_cached = datetime.utcnow())
        #f.document.save(f'{service}.csv', temp_file)
        f.save()
        if self.project.learner_mode:
            i = Item(name='List up relevant fields', description='Analyze provided data, find fields that seem relevant to employee attrition', 
                     datasource=f)
            i.save()
        self.datasources = (
            Datasource.objects.filter(project=self.project, learner_mode=self.project.learner_mode)
            .all().order_by('-id')
            .prefetch_related('vizs', 'items__answers')
        )
        #logger.debug('AppView > addRemoteFile end')
    '''
        
    def logout(self):
        logout(self.request)
        return redirect(reverse('list'))
        
    def called(self, name, args):
        #logger.debug('AppView > called start')
        pass
        #logger.debug('AppView > called end')
            
    def complete(self):
        #logger.debug('AppView > complete start')
        logger.debug('AppView > complete end')

#RENDER

    '''
    def remote_data(self):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    '''
       
    def selected_datasource_for_editing(self):
        '''Return shallow copy to prevent checksum error 
        when editing from different component '''
        return copy.copy(self.datasource)
    
    def rendered(self, html):
        #logger.debug('AppView > rendered start')
        pass
        #logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('AppView > parent_rendered start')
        pass
        #logger.debug('AppView > parent_rendered end')