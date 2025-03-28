# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover, Comment
from projects.forms import DatastreamForm, BaseDatastreamFormSet
from projects.util import get_perms_and_settings
from django.contrib.auth.models import User
from projects.middleware import redirect as force_redirect
from guardian.shortcuts import get_perms, get_user_perms, get_users_with_perms, get_objects_for_user, get_perms_for_model
from django.http import Http404
from guardian.core import ObjectPermissionChecker
from guardian.backends import ObjectPermissionBackend
from guardian.shortcuts import get_perms

from django.core.files.base import ContentFile
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.urls import reverse
from project import settings
from django.db.models import Q
from django.db.models import Case, When
from django.core.exceptions import ValidationError
from django.core.cache import cache
from django.forms import modelformset_factory
from django.forms import BaseModelFormSet
#from django.contrib import messages

from django_unicorn.components.unicorn_view import constructed_views_cache
from django_unicorn.cacher import cache_full_tree, restore_from_cache

# pp
import pp
from pp.log import logger

#python standard libraries
import os
import copy
import json
import traceback
from io import BufferedIOBase
from datetime import datetime



#non-standard libraries
#from memory_profile import profile

class AppView(UnicornView):
    #datasources: list = None
    datasources: QuerySetType[Datasource] = None
    datasource: Datasource = None
    vizs: QuerySetType[Viz] = None
    #report: Report = None
    
    list_items_paginated: list = None
    displayed_item_ids: list = None
    page_no: int = 1
    page_count: int = 10
    items_per_page: int = 12
    
    datastreams: QuerySetType[Datastream] = None
    formset_datastreams: QuerySetType[Datastream] = None
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
    
    datastream_form: DatastreamForm = None
    new_datastream: Datastream = None
    new_datastream_form: DatastreamForm = None
    selected_datastream: Datastream = None
    selected_datastream_form: DatastreamForm = None
    datastream_formset: BaseDatastreamFormSet = None
    
    add_comment_text: str = None
    
    app_perms: list = None
    #datasource_perms: list = None
    #datastream_perms: list = None
    
    class Meta:
        javascript_exclude = ('datasources', 'datasource', 'datastream_form','new_datastream', 'new_datastream_form', 'selected_datastream', 'selected_datastream_form', 
                              'datastream_formset', 
                              'vizs', 'list_items_paginated', 'formset_datastreams', 'datastreams', 'services', 'meta_object', 
                              'siteuser', 'notification', 'ads', 'settings', 'context', 'covers', 'cover', 'related_datasources', 'related_items_paginated', 'app_perms',) 
    
    #def __init__(self, *args, **kwargs):
    #    super().__init__(**kwargs)  # calling super is required
    #    self.mode = kwargs.get('mode')
    #    self.pk = kwargs.get('pk')
    


    
    
    #LOAD/UPDATE
    
    def mount(self):
        #print('mounted!')
        self.load_table()
        
    def hydrate(self):
        #print('hydrating')
        #print(self.__dict__)
        if self.datasource:
            print(self.datasource.datastream.name)
            print(self.datasource.datastream.description)
        else:
            print('no datasource to print!')
    
    def initialise_list(
        self, 
        current_user,
        list_object_owner_user,
        list_object_class,
        list_object_container_names,
        list_object_pub_perms,
        list_object_unpub_perms,
        list_object_name_query,
        list_order,
        list_use_cover,
        ad_position,
        meta_object,
    ):
        
        if list_object_owner_user:
            self.siteuser = list_object_owner_user
        
        #pagination
        if self.page_no == 1:
            self.list_items_paginated, self.displayed_item_ids = [], []
            
        #build query params
        pub_args, pub_kwargs, unpub_args, unpub_kwargs = [], {}, [], {}
        
        pub_kwargs.update(dict(is_published=True))
        unpub_kwargs.update(dict(is_published=False))
        
        if list_use_cover:
            if not self.covers:
                self.covers = Cover.list().order_by(
                    Case(When(name__startswith='_', then=0), default=1),
                    'name',
                )
            if not self.cover:
                self.cover = self.covers.filter(name__startswith='_').first()
                
            cover_search_terms = self.cover.search_terms.split(',')
            '''
            q = Q(name__icontains=cover_search_terms[0])
            for v in cover_search_terms[1:]:
                q = q | Q(name__icontains=v)
            '''
            q1 = Q(description__icontains=cover_search_terms[0])
            for v in cover_search_terms[1:]:
                q1 = q1 | Q(description__icontains=v)
                
            pub_args.append(q1)
            unpub_args.append(q1)
        else:
            pub_kwargs.update(query=list_object_name_query)
            unpub_kwargs.update(query=list_object_name_query)
                
        if list_object_owner_user:
            pub_kwargs.update(owner=list_object_owner_user.pk)
            unpub_kwargs.update(owner=list_object_owner_user.pk)
            
        #list_objects
        published_obs = get_objects_for_user(current_user, list_object_pub_perms, list_object_class.list(*pub_args, **pub_kwargs))
        #print(list_object_class.list(*pub_args, **pub_kwargs))
        unpublished_obs = get_objects_for_user(current_user, list_object_unpub_perms, list_object_class.list(*unpub_args, **unpub_kwargs))
        #setattr(self, list_object_container, list((published_objs | unpublished_objs).distinct().exclude(id__in=self.displayed_item_ids).order_by('?')[:self.items_per_page + 1]))
        setattr(self, list_object_container_names[0], (published_obs | unpublished_obs).distinct().exclude(id__in=self.displayed_item_ids).order_by(list_order)[:self.items_per_page + 1])
        list_object_container = getattr(self, list_object_container_names[0])
        #print(list_object_container)
        
        #build perms, settings
        self.app_perms, self.settings = get_perms_and_settings(request=self.request, context=self.context, obs=list_object_container)
        
        #build ads
        self.ads = Notification.objects.filter(position=ad_position).order_by('?')[:4]
        
        #build meta
        self.meta_object = meta_object
        
        #if items on current page, add them to cache
        if len(list_object_container[:self.items_per_page]) > 0:
            self.list_items_paginated = self.list_items_paginated[:self.page_no - 1] + [list_object_container[:self.items_per_page]]

        self.displayed_item_ids = [i['pk'] if isinstance(i, dict) else i.pk for p in self.list_items_paginated[:self.page_no] for i in p] 

        #if items on next page (spare), add them to cache
        if len(list_object_container[self.items_per_page:]) > 0:
            self.list_items_paginated = self.list_items_paginated[:self.page_no ] + [list_object_container[self.items_per_page:]]

        #pad out remainder of list
        self.list_items_paginated = self.list_items_paginated + [None for i in range(self.page_count - len(self.list_items_paginated))]
        
        #replicate list_object_container for remainder of names
        for n in list_object_container_names[1:]:
            setattr(self, n, copy.deepcopy(list_object_container))

        return
    
    
    def load_table(self):
        
        #from pympler import tracker
        #tr = tracker.SummaryTracker()
        #tr.print_diff()
        
        if self.request:
            # collect various params
            #print('starting load table')
            if 'context' in self.component_kwargs:
                self.context = self.component_kwargs['context']
                
            mode = self.context['mode']
            query = self.context['query'] if 'query' in self.context else None
            page = self.context['page'] if 'page' in self.context else None
            search = self.context['search'] if 'search' in self.context else None
            current_user = self.request.user
            
            #call refresh_settings_and_perms inside each modality
            is_get = True if self.request.method == 'GET' else False
            
            '''
            if hasattr(self.request, '_body'):
                b = json.loads(self.request._body)
                pk = b['data']['viz']['pk']
                #logger.debug('PK FROM BODY: ' + str(pk))
            
            elif hasattr(self, 'kwargs'):
                pk = self.kwargs['pk']
                #logger.debug('PK FROM KWARGS: ' + str(pk))
            
            '''
            if mode in ('list', 'user'): # use app perms
                if mode == 'user':
                    list_object_owner_user = Profile.item(slug=self.context['slug']).owner
                    self.initialise_list(
                            current_user = self.request.user,
                            list_object_owner_user = list_object_owner_user,
                            list_object_class = Datasource,
                            list_object_container_names = ('datasources',),
                            list_object_pub_perms = ('view_published_datasource',),
                            list_object_unpub_perms = ('view_datasource',),
                            list_object_name_query = '',
                            list_order = '?',
                            list_use_cover = False,
                            ad_position = Notification.USER_AD,
                            meta_object = list_object_owner_user.profile, 
                        )
                    #print(self.datasources)
                elif mode == 'list':
                    '''
                    if search:
                        # objs by perms
                        published_ds = get_objects_for_user(current_user, ('view_published_datasource'), Datasource.list(query=query, is_published=True))
                        unpublished_ds = get_objects_for_user(current_user, ('view_datasource'), Datasource.list(query=query, is_published=False))
                        self.datasources = list((published_ds | unpublished_ds).distinct().exclude(id__in=self.displayed_item_ids)[:self.items_per_page + 1])
                    else:
                    '''
                    '''
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
                    '''
                        
                    self.initialise_list(
                        current_user = self.request.user,
                        list_object_owner_user = None,
                        list_object_class = Datasource,
                        list_object_container_names = ('datasources',),
                        list_object_pub_perms = ('view_published_datasource',),
                        list_object_unpub_perms = ('view_datasource',),
                        list_object_name_query = query,
                        list_order = '?',
                        list_use_cover = True,
                        ad_position = Notification.USER_AD,
                        meta_object = None, 
                    )
                    
                    #self.app_perms, self.settings = get_perms_and_settings(request=self.request, context=self.context)
                    #self.ads = Notification.objects.filter(position=Notification.LIST_AD).order_by('?')[:4]
                    
                '''
                #if items on current page, add them to cache
                if len(self.datasources[:self.items_per_page]) > 0:
                    self.list_items_paginated = self.list_items_paginated[:self.page_no - 1] + [self.datasources[:self.items_per_page]]
                    
                print(self.list_items_paginated)
                self.displayed_item_ids = [i['pk'] if isinstance(i, dict) else i.pk for p in self.list_items_paginated[:self.page_no] for i in p] 
                    
                #if items on next page (spare), add them to cache
                if len(self.datasources[self.items_per_page:]) > 0:
                    self.list_items_paginated = self.list_items_paginated[:self.page_no ] + [self.datasources[self.items_per_page:]]
                
                #pad out remainder of list
                self.list_items_paginated = self.list_items_paginated + [None for i in range(self.page_count - len(self.list_items_paginated))]
                '''

                
                #if self.settings.get('test_pref'):
                #    self.call('handlerAlias', 'toggleEdit')
                                    
                return #do nothing
            
            elif mode == 'view': # use obj perms
                
                if is_get:
                    self.related_datasources = None
                
                # site perms
                #if not current_user.has_perm('projects.view_published_datasource'):
                #    redirect('/')

                if self.context['pk']:
                    ds = Datasource.item(pk=self.context['pk'])
                elif self.context['slug']:
                    ds = Datasource.item(slug=self.context['slug'])
                
                self.app_perms, self.settings = get_perms_and_settings(request=self.request, context=self.context, obs=(ds, ds.datastream,))
                
                #self.app_perms.extend(get_perms(current_user, ds))
                #self.app_perms.extend(get_perms(current_user, ds.datastream))
                #self.refresh_settings_and_perms()
                
                #obj perms
                '''
                if ds.is_published:
                    if not any({current_user.has_perm('projects.view_published_datasource', ds), current_user.has_perm('projects.view_datasource', ds)}):
                        redirect('/')
                else:
                    if not current_user.has_perm('projects.view_datasource', ds):
                        redirect('/')
                '''
                if ds.is_published:
                    if not any({('view_published_datasource' in self.app_perms), ('view_datasource' in self.app_perms)}):
                        redirect('/')
                else:
                    if not 'view_datasource' in self.app_perms:
                        redirect('/')
                
                self.datasource = ds
                instance_data = {k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in self.datasource.datastream.field_data().items()}
                self.datastream_form = DatastreamForm(
                    instance=self.datasource.datastream, 
                    form_id='datastream_form',
                    unicorn_model='datasource.datastream',
                    data=instance_data, 
                    mode=True)
                
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
                #print(self.app_perms)
            
            elif mode == 'new':  # use app perms
                if page in ('new.datamenu', 'new.datasource'):
                    '''
                    if not current_user.has_perm('projects.add_datasource'):
                        redirect('/')
                    '''
                    if page == 'new.datamenu':
                        
                        if not self.covers:
                            self.covers = Cover.list().order_by(
                                Case(When(name__startswith='_', then=0), default=1),
                                'name',
                            )
                        if not self.cover:
                            self.cover = self.covers.filter(name__startswith='_').first()
                            
                        self.initialise_list(
                            current_user = self.request.user,
                            list_object_owner_user = None,
                            list_object_class = Datastream,
                            list_object_container_names = ('formset_datastreams', 'datastreams', ),
                            list_object_pub_perms = ('view_published_datastream',),
                            list_object_unpub_perms = ('view_datastream',),
                            list_object_name_query = '',
                            list_order = 'name',
                            list_use_cover = True,
                            ad_position = Notification.USER_AD,
                            meta_object = None, 
                        )
                        
                        '''
                        # objs by perms
                        cover_search_terms = self.cover.search_terms.split(',') if self.cover else []
                        
                        q = Q(name__icontains=cover_search_terms[0])
                        for v in cover_search_terms[1:]:
                            q = q | Q(name__icontains=v)
                        
                        self.app_perms, self.settings = get_perms_and_settings(request=self.request, context=self.context)
                        
                        if not 'add_datasource' in self.app_perms:
                            raise Http404
                        
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
                        
                        '''
                        
                        self.new_datastream = Datastream()
                        instance_data = {k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in self.new_datastream.field_data().items()}
                        self.new_datastream_form = DatastreamForm(
                            instance=self.new_datastream, 
                            form_id='new_datastream_form',
                            use_ok=True,
                            unicorn_model='new_datastream',
                            data=instance_data, 
                            mode=True)
                        
                        self.page = 'new.datamenu'
                        self.message = {
                            'class': 'alert-info',
                            'content': 'Select below to add a new item'
                        }
                        
                        #formset
                        DatastreamFormSet = modelformset_factory(Datastream, form=DatastreamForm, formset=BaseDatastreamFormSet, extra=0)
                        self.datastream_formset = DatastreamFormSet(queryset=self.formset_datastreams or None, auto_id='id_for_%s')
                        #print(self.datastream_formset)

                    
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
                    if not 'add_datastream' in self.app_perms:
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
        #print(self.app_perms)
        if 'user.profile' in name:
            if not 'change_profile' in self.app_perms:
                raise Http404
        elif 'new_datastream' in name:
            #if not self.request.user.has_perm('projects.change_datastream', self.datasource.datastream):
            if not 'add_datastream' in self.app_perms:
                raise Http404
            c = cache.get('new_datastream')
            if c:
                self.new_datastream.set_field_data(c)
        elif 'datastream.' in name:
            #if not self.request.user.has_perm('projects.change_datastream', self.datasource.datastream):
            if not 'change_datastream' in self.app_perms:
                raise Http404
            c = cache.get('datasource.datastream')
            if c:
                self.datasource.datastream.set_field_data(c)
        elif 'datastreams.' in name:
            #if not self.request.user.has_perm('projects.change_datastream', self.datasource.datastream):
            #print(name)
            updated_instance_index = int(name.split('.')[1])
            updated_instance = self.formset_datastreams[updated_instance_index]
            #print(self.datastreams)
            #print(updated_instance_index)
            #print(updated_instance)
            #print(self.datastreams)
            if not 'change_datastream_{}'.format(updated_instance.slug) in self.app_perms:
                raise Http404
            c = cache.get('datastream{}'.format(updated_instance.slug))
            if c:
                updated_instance.set_field_data(c)
                
        elif 'datasource.' in name:
            if not self.request.user.has_perm('projects.change_datasource', self.datasource):
                raise Http404
        #logger.debug('AppView > updating end')
    
    def updated(self, name, value):
        #logger.debug('AppView > updated start')
        #print('Updated!')
        if 'user.profile' in name:
            if 'profile.properties' in name:
                if value == 'true':
                    value = True
                elif value == 'false':
                    value = False
                n = name.split('properties.')[-1]
                self.request.user.profile.properties[n] = value
            self.request.user.profile.save()
        elif 'new_datastream' in name:
            # Validate form and leave db save for add_datastream action
            instance_data = {k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in self.new_datastream.field_data().items()}
            self.new_datastream_form = DatastreamForm(
                    instance=self.new_datastream, 
                    form_id='new_datastream_form',
                    use_ok=True,
                    unicorn_model='new_datastream',
                    data=instance_data, 
                    mode=True)
            self.new_datastream_form.is_valid()
            cache.set('new_datastream', self.new_datastream.field_data())
            return
        elif 'datastream.' in name:
            instance_data = {k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in self.datasource.datastream.field_data().items()}
            self.datastream_form = DatastreamForm(
                    instance=self.datasource.datastream, 
                    form_id='datastream_form',
                    unicorn_model='datasource.datastream',
                    data=instance_data, 
                    mode=True)
            if self.datastream_form.is_valid():
                self.datasource.datastream.save()
                cache.delete('datasource.datastream')
                return
            else:
                cache.set('datasource.datastream', self.datasource.datastream.field_data())
                return
        elif 'datastreams.' in name:                       
            #instance data
            updated_instance = self.formset_datastreams[int(name.split('.')[1])]
            #print('name update is {}'.format(value))
            #print('name is {}'.format(updated_instance.name))
            #instance_data = [{k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in instance.field_data().items()} for instance in self.datastreams]
            
            management_form_config =  {
                'form-TOTAL_FORMS': '{}'.format(len(self.formset_datastreams)), 
                'form-INITIAL_FORMS': '{}'.format(len(self.formset_datastreams)), 
            }
            
            instance_data = management_form_config | {
                'form-{}-{}'.format(idx, k): v if k not in ('json', 'properties',) else json.dumps(v) 
                for idx, instance in enumerate(self.formset_datastreams)
                for k, v in instance.field_data().items() 
            }
            
            #print(updated_instance.field_data())
            
            #print(instance_data)

            #formset
            DatastreamFormSet = modelformset_factory(Datastream, form=DatastreamForm, formset=BaseDatastreamFormSet, extra=0)
            self.datastream_formset = DatastreamFormSet(queryset=self.formset_datastreams, data=instance_data or None, auto_id='id_for_%s')
            
            #check
            if self.datastream_formset.is_valid():
                #print('saving valid ds')
                #print(updated_instance._state.__dict__)
                updated_instance.save()
                cache.delete('datastream{}'.format(updated_instance.slug))
                self.load_table()
            else:
                #print('not valid so cant save')
                #print(self.datastream_formset.errors)
                #print(self.datastream_formset.non_form_errors())
                cache.set('datastream{}'.format(updated_instance.slug), updated_instance.field_data())
                return
        elif 'datasource.' in name:
            self.datasource.save()
            
        #logger.debug('AppView > updated end')
        #print('reloading')
        self.load_table()
        
        
    
        
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
        
        #print('copy '+ str(pk))
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
        
    def add_datastream(self):
        if not 'add_datastream' in self.app_perms:
            raise Http404
        c = cache.get('self.new_datastream')
        if c:
            self.new_datastream.set_field_data(c)
        
        instance_data = {k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in self.new_datastream.field_data().items()}
        self.new_datastream_form = DatastreamForm(
                instance=self.new_datastream, 
                form_id='new_datastream_form',
                use_ok=True,
                unicorn_model='new_datastream',
                data=instance_data, 
                mode=True)
        if self.new_datastream_form.is_valid():
            o = self.new_datastream_form.save(commit=False)
            o.owner = self.request.user
            o.save()
            cache.delete('self.new_datastream')
            return redirect(reverse('new') + '?o=datamenu')
        else:
            return False
        
    def select_datastream(self, pk):
        if not 'add_viz' in self.app_perms:
            raise Http404
        self.selected_datastream = Datastream.item(pk=pk)
        cache.set('self.selected_datastream', ds)
        
        instance_data = {k:v if k not in ('json', 'properties',) else json.dumps(v) for k, v in self.selected_datastream.field_data().items()}
        self.selected_datastream_form = DatastreamForm(
                instance=self.seleected_datastream, 
                form_id='selected_datastream_form',
                use_ok=True,
                unicorn_model='selected_datastream',
                data=instance_data, 
                mode=True)
        self.selected_datastream_form.is_valid()
        
        
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
        '''
        if not self.request.user.has_perm('projects.change_activity'):
            return redirect('/')
        '''
        
        if not 'change_activity' in self.app_perms:
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
                
    def set_user_properties(self, item):
        if hasattr(self.request.user, 'profile'):
            import ast
            item = ast.literal_eval(item)
            #print(item)
            for k, v in item.items():
                self.request.user.profile.properties[k] = v
            self.request.user.profile.save()    
            #self.load_table()
    
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
        pass
        #print('complete!')

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
        if self.formset_datastreams:
            del self.formset_datastreams
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
            
        if self.new_datastream:
            del self.new_datastream
        if self.new_datastream_form:
            del self.new_datastream_form
        
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
        
        #print('rendered!')
            
        #check = constructed_views_cache[self.component_id]
        #constructed_views_cache['unicorn:component:app01'] = self
        #cache_full_tree(self)
        #check = restore_from_cache('unicorn:component:app01')
        #if check and check.datasource and check.datasource.datastream:
        #    print(check.datasource.datastream.__dict__)
        #else:
        #    print('no cached component')
        
        #logger.debug('AppView > rendered end')
        
    def _cache_component(self, *, parent=None, component_args=None, **kwargs):
        #print('caching component')
        #traceback.print_stack()
        super()._cache_component(parent=parent, component_args=component_args, kwargs=kwargs)
    
    def parent_rendered(self, html):
        #logger.debug('AppView > parent_rendered start')
        pass
        #logger.debug('AppView > parent_rendered end')
        
    def __getstate__(self):
        '''Patch to workaround pickle error on formset'''
        state = self.__dict__.copy()
        state.pop('datastream_formset', None)
        return state

    def __setstate__(self, state):
        self.__dict__.update(state)