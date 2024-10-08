# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover, Comment
from django.contrib.auth.models import User
from projects.middleware import redirect as force_redirect
from guardian.shortcuts import get_perms, get_user_perms, get_users_with_perms, get_objects_for_user, get_perms_for_model
from django.http import Http404
from guardian.core import ObjectPermissionChecker

from django.core.files.base import ContentFile
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.urls import reverse
from project import settings
from django.db.models import Q
from django.db.models import Case, When
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
#from memory_profile import profile

class AppView(UnicornView):
    datasources: list = None
    datasource: Datasource = None
    vizs: QuerySetType[Viz] = None
    #report: Report = None
    
    list_items_paginated: list = None
    displayed_item_ids: list = None
    page_no: int = 1
    page_count: int = 10
    items_per_page: int = 12
    
    datastreams: QuerySetType[Datastream] = None
    services: list = None
    meta_object: BaseModel = None
    message: dict = None
    page: str = None
    siteuser: User = None
    notification: Notification = None
    ads: QuerySetType[Notification] = None
    settings: dict = None 
    context: dict = None
    covers: QuerySetType[Cover] = None
    cover: Cover = None
    
    related_datasources: QuerySetType[Datasource] = None
    related_items_paginated: list = None
    related_page_no: int = 1
    
    add_comment_text: str = None
    
    class Meta:
        javascript_exclude = ('datasources', 'datasource', 'vizs', 'list_items_paginated', 'datastreams', 'services', 'meta_object', 
                              'siteuser', 'notification', 'ads', 'settings', 'context', 'covers', 'cover', 'related_datasources', 'related_items_paginated') 
    
    #def __init__(self, *args, **kwargs):
    #    super().__init__(**kwargs)  # calling super is required
    #    self.mode = kwargs.get('mode')
    #    self.pk = kwargs.get('pk')
    
#LOAD/UPDATE
    
    def mount(self):
        self.load_table()
        
    def hydrate(self):
        pass
    
    def load_table(self):
        
        #from pympler import tracker
        #tr = tracker.SummaryTracker()
        #tr.print_diff()
        
        if self.request:
            # collect various params
            if 'context' in self.component_kwargs:
                self.context = self.component_kwargs['context']
                
            self.settings = Settings.all()
            
            mode = self.context['mode']
            query = self.context['query'] if 'query' in self.context else None
            page = self.context['page'] if 'page' in self.context else None
            search = self.context['search'] if 'search' in self.context else None
            
            current_user = self.request.user
            
            is_get = True if self.request.method == 'GET' else False
            
            #checker = ObjectPermissionChecker(current_user)
            
            '''
            if hasattr(self.request, '_body'):
                b = json.loads(self.request._body)
                pk = b['data']['viz']['pk']
                #logger.debug('PK FROM BODY: ' + str(pk))
            
            elif hasattr(self, 'kwargs'):
                pk = self.kwargs['pk']
                #logger.debug('PK FROM KWARGS: ' + str(pk))
            
            '''
            if mode in ('list', 'user'):
                
                if self.page_no == 1:
                    self.list_items_paginated, self.displayed_item_ids = [], []
                    
                #owner_pk = None
                if mode == 'user':
                    self.siteuser = Profile.item(slug=self.context['slug']).owner
                    owner_pk = self.siteuser.pk
                    # objs by perms
                    published_ds = get_objects_for_user(current_user, ('view_published_datasource'), Datasource.list(query=query, owner=owner_pk, is_published=True))
                    unpublished_ds = get_objects_for_user(current_user, ('view_datasource'), Datasource.list(query=query, owner=owner_pk, is_published=False))
                    self.datasources = list((published_ds | unpublished_ds).distinct().exclude(id__in=self.displayed_item_ids).order_by('?')[:self.items_per_page + 1])
                    self.ads = Notification.objects.filter(position=Notification.USER_AD).order_by('?')[:4]
                    self.meta_object = self.siteuser.profile
                
                elif mode == 'list':
                    if search:
                        # objs by perms
                        published_ds = get_objects_for_user(current_user, ('view_published_datasource'), Datasource.list(query=query, is_published=True))
                        unpublished_ds = get_objects_for_user(current_user, ('view_datasource'), Datasource.list(query=query, is_published=False))
                        self.datasources = list((published_ds | unpublished_ds).distinct().exclude(id__in=self.displayed_item_ids)[:self.items_per_page + 1])
                    else:
                        if not self.covers:
                            self.covers = Cover.list().order_by(
                                Case(When(name__startswith='_', then=0), default=1),
                                'name',
                            )
                        if not self.cover:
                            self.cover = self.covers.filter(name__startswith='_').first()
                        
                        # objs by perms
                        cover_search_terms = self.cover.search_terms.split(',') if self.cover else []
                        
                        q = Q(name__icontains=cover_search_terms[0])
                        for v in cover_search_terms[1:]:
                            q = q | Q(name__icontains=v)
                        published_namematch_ds = get_objects_for_user(current_user, ('view_published_datasource'), Datasource.list(q, is_published=True))
                        
                        q1 = Q(description__icontains=cover_search_terms[0])
                        for v in cover_search_terms[1:]:
                            q1 = q1 | Q(description__icontains=v)
                        published_descmatch_ds = get_objects_for_user(current_user, ('view_published_datasource'), Datasource.list(q1, is_published=True))
                        
                        self.datasources = list((published_namematch_ds | published_descmatch_ds).distinct().exclude(id__in=self.displayed_item_ids).order_by('?')[:self.items_per_page + 1])
                        
                    self.ads = Notification.objects.filter(position=Notification.LIST_AD).order_by('?')[:4]
                    
                #if items on current page, add them to cache
                if len(self.datasources[:self.items_per_page]) > 0:
                    self.list_items_paginated = self.list_items_paginated[:self.page_no - 1] + [self.datasources[:self.items_per_page]]
                    
                self.displayed_item_ids = [i['pk'] if isinstance(i, dict) else i.pk for p in self.list_items_paginated[:self.page_no] for i in p] 
                    
                #if items on next page (spare), add them to cache
                if len(self.datasources[self.items_per_page:]) > 0:
                    self.list_items_paginated = self.list_items_paginated[:self.page_no ] + [self.datasources[self.items_per_page:]]
                
                #pad out remainder of list
                self.list_items_paginated = self.list_items_paginated + [None for i in range(self.page_count - len(self.list_items_paginated))]
                                    
                return #do nothing
            
            elif mode == 'view':
                
                if is_get:
                    self.related_datasources = None
                
                # site perms
                #if not current_user.has_perm('projects.view_published_datasource'):
                #    redirect('/')

                if self.context['pk']:
                    ds = Datasource.item(pk=self.context['pk'])
                elif self.context['slug']:
                    ds = Datasource.item(slug=self.context['slug'])
                    
                #obj perms
                if ds.is_published:
                    if not any({current_user.has_perm('projects.view_published_datasource', ds), current_user.has_perm('projects.view_datasource', ds)}):
                        redirect('/')
                else:
                    if not current_user.has_perm('projects.view_datasource', ds):
                        redirect('/')

                self.datasource = ds
                
                self.meta_object = self.datasource
                self.ads = Notification.objects.filter(position=Notification.VIEW_AD).order_by('?')[:4]

                if not self.related_datasources:
                    self.related_datasources = get_objects_for_user(current_user, ('view_published_datasource'), Datasource.list(is_published=True)).exclude(pk=self.datasource.pk).order_by('?')[:20]
                self.related_items_paginated = [self.related_datasources[i: i+5] for i in range(0, len(self.related_datasources), 5)]

                def get_client_ip(request):
                    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
                    if x_forwarded_for:
                        ip = x_forwarded_for.split(',')[0]
                    else:
                        ip = request.META.get('REMOTE_ADDR')
                    return ip
                ItemView.objects.get_or_create(IPAddress=get_client_ip(self.request), datasource=self.datasource, session=self.request.session._session_key)
                
                #if hasattr(self.datasource, 'reports'):
                #    self.report = self.datasource.reports.last()
                #if not self.report:
                #    self.addReport()
            
            elif mode == 'new':  
                if page in ('new.datamenu', 'new.datasource'):
                    if not current_user.has_perm('projects.add_datasource'):
                        redirect('/')
                    
                    if page == 'new.datamenu':
                        
                        if self.page_no == 1:
                            self.list_items_paginated, self.displayed_item_ids = [], []
                        
                        if not self.covers:
                            self.covers = Cover.list().order_by(
                                Case(When(name__startswith='_', then=0), default=1),
                                'name',
                            )
                        if not self.cover:
                            self.cover = self.covers.filter(name__startswith='_').first()
                        
                        # objs by perms
                        cover_search_terms = self.cover.search_terms.split(',') if self.cover else []
                        
                        q = Q(name__icontains=cover_search_terms[0])
                        for v in cover_search_terms[1:]:
                            q = q | Q(name__icontains=v)
                        
                        self.datastreams = Datastream.list(q)
                        
                        
                        #if items on current page, add them to cache
                        if len(self.datastreams[:self.items_per_page]) > 0:
                            self.list_items_paginated = self.list_items_paginated[:self.page_no - 1] + [self.datastreams[:self.items_per_page]]

                        self.displayed_item_ids = [i['pk'] if isinstance(i, dict) else i.pk for p in self.list_items_paginated[:self.page_no] for i in p] 

                        #if items on next page (spare), add them to cache
                        if len(self.datastreams[self.items_per_page:]) > 0:
                            self.list_items_paginated = self.list_items_paginated[:self.page_no ] + [self.datastreams[self.items_per_page:]]

                        #pad out remainder of list
                        self.list_items_paginated = self.list_items_paginated + [None for i in range(self.page_count - len(self.list_items_paginated))]
                        
                        
                        self.page = 'new.datamenu'
                        self.message = {
                            'class': 'alert-info',
                            'content': 'Select below to add a new item'
                        }
                    
                    elif page == 'new.datasource':
                        kwargs = {k : v for (k, v) in self.request.GET.items() if k in ('datastream',)}
                        if len(kwargs) == 1:
                            self.datasource = self.add(
                                cls=Datasource,
                                datastream=Datastream.item(slug=kwargs['datastream'])
                                #call_redirect='list'
                            )
                            self.add(
                                cls=Viz,
                                datasource=self.datasource,
                                #call_redirect='list'
                            )
                        self.context['mode'] = 'view'
                        self.context['pk'] = self.datasource.pk
                        self.call("alert", "hello")
                        self.load_table()
                
                elif page in ('new.vizmenu', 'new.viz'):
                    if page == 'new.vizmenu':
                        if not current_user.has_perm('projects.add_viz'):
                            redirect('/')

                        self.services = Viz.services()
                        self.datasource = Datasource.item(slug=self.request.GET['datasource'])
                        self.page = 'new.vizmenu'
                        self.message = {
                            'class': 'alert-info',
                            'content': 'Select below to add a new item'
                        }

                    elif page == 'new.viz':
                    #elif self.request.GET['o'] == 'viz':
                        kwargs = {k : v for (k, v) in self.request.GET.items() if k in ('datasource',)}
                        if len(kwargs) == 1:
                            self.datasource = Datasource.item(slug=kwargs['datasource'])
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
                
                elif page == 'new.datastream':
                    if not current_user.has_perm('projects.add_datastream'):
                        redirect('/')
                    kwargs = {k : v for (k, v) in self.request.GET.items() if k in ('url',)}
                    if len(kwargs) == 1:
                        self.datasource = self.add(
                            cls=Datastream,
                            **kwargs
                            #call_redirect='list'
                        )
                        #self.page = 'new.datastream.complete'
                        self.context['mode'] = 'view'
                        self.load_table()
                        
                    #self.message = {
                    #    'class': 'alert-info',
                    #    'content': 'Datastream added!'
                    #}
                
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

    def updating(self, name, value):
        #logger.debug('AppView > updating start')
        if 'user.profile' in name:
            if not self.request.user.has_perm('projects.change_profile'):
                raise Http404
        elif 'datastream.' in name:
            #TODO - update to datastream perms check
            if not self.request.user.has_perm('projects.change_datastream', self.datasource.datastream):
                raise Http404
        elif 'datasource.' in name:
            if not self.request.user.has_perm('projects.change_datasource', self.datasource):
                raise Http404
        #logger.debug('AppView > updating end')
    
    def updated(self, name, value):
        #logger.debug('AppView > updated start')
        if 'user.profile' in name:
            self.request.user.profile.save()
        elif 'datastream.' in name:
            self.datasource.datastream.save()
            print("saved datastream!")
        elif 'datasource.' in name:
            self.datasource.save()
            #print(self.datasource.name)
        #logger.debug('AppView > updated end')
        
#ACTIONS

    def calling(self, name, args):
        #logger.debug('AppView > calling start')
        pass
        #logger.debug('AppView > calling end')
    
    '''
    def addDatasource(self, datastream_pk, call_redirect=False):
        if not self.request.user.has_perm('projects.add_datasource'):
            return redirect('/')
        
        d = Datasource.new(
                owner=self.request.user, 
                datastream=Datastream.item(pk=datastream_pk)
            )
    '''
    
    def copy_datasource(self, pk):
        if not self.request.user.has_perm('projects.add_datasource'):
            return redirect('/')
        
        print('copy '+ str(pk))
        new_datasource = Datasource.copy(pk=pk)['copy']
        return redirect(reverse('view', kwargs={'slug': new_datasource.slug}))
    
    def delete_datasource(self, pk):
        d = Datasource.item(pk=pk)
        if not self.request.user.has_perm('projects.delete_datasource', d):
            return redirect('/')
        
        d.delete()
        return redirect(reverse('list'))
    
    def refreshDatasource(self, pk):
        #logger.debug('AppView > addViz start')
        d = Datasource.item(pk=pk)
        d.refresh()
        return redirect(reverse('view', args=[pk]))
        #logger.debug('AppView > addViz end')
        
    def copyViz(self, pk):
        Viz.copy(pk)
        self.load_table()
        return redirect(reverse('app_all'))
        
    def deleteViz(self, pk):
        v = Viz.item(pk=pk)
        if not self.request.user.has_perm('projects.change_datasource', v.datasource):
            return redirect('/')
        
        v.delete()
        self.load_table()
        
    def add_comment(self):
        if not self.request.user.has_perm('projects.add_comment'):
            return redirect('/')
        if self.add_comment_text:
            self.add(
                cls=Comment,
                datasource=self.datasource,
                description=self.add_comment_text,
            )
            self.datasource.last_updated = datetime.now()
            self.add_comment_text = None
        self.load_table()
        
    def delete_comment(self, pk):
        c = Comment.item(pk=pk)
        if not self.request.user.has_perm('projects.delete_comment', c):
            return redirect('/')
        c.delete()
        #self.add_comment_text =''
        self.load_table()
        
    def toggleCover(self, pk, mode):
        if self.cover and self.cover.pk == pk:
            self.cover = None
        else:
            self.cover = Cover.item(pk=pk)
        #self.call("clear_cover_focus")
        self.page_no = 1
        #set mode param to handle odd cases of call after browser back button
        self.context['mode'] = mode
        self.load_table()
    
    def toggle_activity(self, ds):
        if not self.request.user.has_perm('projects.change_activity'):
            return redirect('/')
        
        p=None
        Activity.toggle(owner=self.request.user, datasource_pk=ds, profile_pk=p) 
        self.load_table()
    
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
                        q_set (obj): Optional. QuerySet object for the instance
                        call_redirect (str): Optional. The url name to redirect to, or False (default) to return the new instance
                        Other kwargs to pass when creating new instance. instance (Class) or pk (int) is required.

                Returns:
                        None
        '''
        params = {k: v for k, v in kwargs.items() if k not in ('cls', 'cls_name', 'call_redirect', 'q_set')}
        
        if 'cls' in kwargs:
            cls = kwargs['cls']
        else:
            cls = vars()[kwargs['cls_name']]
        
        cls.delete(**params)
        
        if 'call_redirect' in kwargs:
            if kwargs['call_redirect'] is not False:
                return redirect(reverse(kwargs['call_redirect']))
            
        return redirect(reverse('list'))
        
    def more(self):
        if self.list_items_paginated:
            if self.page_no < len([i for i in self.list_items_paginated]):
                self.page_no += 1
                self.load_table()
            
    def more_related(self):
        if self.related_items_paginated:
            if self.related_page_no < len(self.related_items_paginated):
                self.related_page_no += 1
                self.load_table()
    
    '''
    def addReport(self, name='NewReport'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        r = Report(name=name, datasource=self.datasource)
        self.report = r
        r.save()
        #self.load_table()
        #logger.debug('AppView > addViz end')
    
    '''
    '''
    def getRemoteData(self, service='READ_DATA_ATTRITION', name='no_name'):
        #logger.debug('AppView > addRemoteFile start')
        Datasource.getRemoteData(self.project)
        a = pp.App()
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
        if self.datasource:
            self.datasource.delete_cached_properties()
            
            
        if self.datasources:
            for o in self.datasources:
                o.delete_cached_properties()
            del self.datasources
        
        if self.vizs:
            del self.vizs
        #report: Report = None

        if self.list_items_paginated:
            del self.list_items_paginated
        
        if self.datastreams:
            del self.datastreams
        if self.services:
            del self.services
        if self.meta_object:
            del self.meta_object
        if self.context:
            del self.context
        if self.covers:
            del self.covers
        
        if self.related_datasources:
            for o in self.related_datasources:
                o.delete_cached_properties()
            del self.related_datasources
        
        
        if self.related_items_paginated:
            del self.related_items_paginated
            
        if self.datasource:
            del self.datasource
        
        if self.meta_object:
            del self.meta_object
        
        
        if self.message:
            del self.message
        if self.siteuser:
            del self.siteuser
        if self.notification:
            del self.notification
        if self.ads:
            del self.ads
        if self.settings:
            del self.settings
        if self.cover:
            del self.cover
        
        #logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('AppView > parent_rendered start')
        pass
        #logger.debug('AppView > parent_rendered end')