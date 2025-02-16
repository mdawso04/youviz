from django.db import models
from django.contrib.auth.models import User
from django.utils.functional import cached_property
from django.contrib.contenttypes.fields import GenericRelation
from django.utils.text import slugify
from django.apps import apps

from django.contrib.auth.models import User, Group
from guardian.shortcuts import assign_perm
from guardian.shortcuts import remove_perm
from guardian.shortcuts import get_perms, get_user_perms, get_users_with_perms, get_objects_for_user, get_perms_for_model
from guardian.utils import get_anonymous_user

from django.db.models.signals import post_save, pre_save
from django.db.models.signals import m2m_changed
from django.dispatch import receiver

from django.http import Http404

from project import settings

import urllib.request
import numpy as np
import requests
 

# pp
import pp
from pp.log import logger
from pp.util import *
from pp.data import *
from pp.io import *

#python standard libraries
import os
from io import StringIO
import hashlib
from copy import *
import json
import string  # for string constants
import random  # for generating random strings
from collections.abc import MutableMapping
import functools, inspect

#non-standard libraries
import pandas as pd
import plotly.io as pio
from datetime import datetime
from auditlog.registry import auditlog
from auditlog.models import AuditlogHistoryField

import plotly.express as px
import plotly.graph_objects as go



'''
Patch for pp.App.data
'''
def data(self, todo=None):
    #todo
    todo = -1 if todo is None else todo
    td = self.todos[todo]
    #available
    available_options = self.options(td['service'], index=todo)
    #saved
    saved_options = td['options']

    #all = {k: {'available': y, 'saved': saved_options.get(k)} for k, y in available_options.items()}
    #all = {'options': all}
    all = {
        'options': {
           'available': available_options,
           'saved': saved_options,
        }
    }
    all['name'] = td['name']
    all['service'] = {'available': self.services(), 'saved': td['service']}
    return all

pp.App.data = data

'''
Patch for pp.io.SimpleCsvExcelReader.read
'''

def read(self):
    '''Returns dataframe based on config'''
    s = self._src
    if hasattr(s, 'read'):
        s.seek(0)
        return pd.read_csv(s)
    return pd.read_csv(s)

pp.io.SimpleCsvExcelReader.read = read


'''
Patch for pp.App.call


def call(self, df=None, viz=None, last_index=None, return_df=True):
    #logger.debug('pp.App > call start')
    if not self._isvalid():
        #exception
        return "ERROR"
    service_list = self._service_helper(return_type='service_callable', filter_read=False)  
    result, results = None, []
    #logger.debug('Calling Todos: {}'.format(len(self.todos)))
    for item in self.todos[:last_index]:
        fn = service_list[item['service']].fn
        s = inspect.signature(fn)
        if 'df' in s.parameters:
            if 'options' in item.keys() and item['options'] is not None:
                result = fn(df=df, **item['options'])
            else:
                result = fn(df=df)
        elif 'viz' in s.parameters:
            if 'options' in item.keys() and item['options'] is not None:
                result = fn(viz=viz, **item['options'])
            else:
                result = fn(viz=viz)
        else:
            if 'options' in item.keys() and item['options'] is not None:
                result = fn(**item['options'])
            else:
                result = fn()
        if isinstance(result, pd.DataFrame):
            df = result.convert_dtypes() #apply conversion to ensure numbers are numbers
            print(df.dtypes)
        else:
            if isinstance(result, go.Figure):
                viz = result
            results.append(result)
        #logger.debug('Called Todo: {} ({})'.format(item['service'], item['name']))
    results.append(df)
    #logger.debug('Called Todos: {}'.format(len(self.todos)))
    #logger.debug('Generated results: {}'.format(len(results)))
    #logger.debug('pp.App > call end')
    if return_df:
        return results[-1]
    return results

pp.App.call = call
'''

'''
Patch for data
'''

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTEQUAL(df, column=None, matches=None):
    '''Hides rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}` != "{}"'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_EQUAL(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}` == "{}"'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_STARTSWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}`.str.startswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_ENDSWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}`.str.endswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_CONTAINS(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}`.str.contains("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTSTARTWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = 'not `{}`.str.startswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTENDWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = 'not `{}`.str.endswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTCONTAIN(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = 'not `{}`.str.contains("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_NOTEQUAL(df, column=None, matches=None):
    '''Hides rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` != {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_EQUAL(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` == {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_LT(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` < {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_GT(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` > {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

def DATA_COL_FORMAT_TYPE(df, columns=None, typ='str'):
    '''Format specified columns as specfied type'''
    max = 1 if columns is None else None
    columns = colHelper(df, columns, max=max)
    if isinstance(typ, str):
        converter = {c:t for c,t in zip(columns, [typ for i in range(0, len(columns))])}
    else: #array
        converter = {c:t for c,t in zip(columns, typ)}
    df = df.astype(converter)
    logger.debug('pp.data > Changed column type to {} for these columns: {}'.format(typ, columns))
    return df

pp.data.DATA_COL_FORMAT_TYPE = DATA_COL_FORMAT_TYPE


@registerService(
    #columns=OPTION_FIELD_SINGLE_COL_STRING,
    before=FIELD_STRING,
    after=FIELD_STRING,
)
def DATA_COL_FORMAT_REPLACE_TEXT(df, columns=None, before='', after=''):
    '''Round numerical column values to specified decimal'''
    #eval_string = 'cell.replace("{}","{}", regex=True)'.format(str(before), str(after))
    #df = pp.data._DATA_COL_FORMAT_CUSTOM(df=df, columns=columns, eval_string=eval_string)
    df = df.replace(before, after, regex=True)
    return df

@registerService(
    columns=OPTION_FIELD_SINGLE_COL_STRING,
)
def DATA_UNPIVOT(df, columns=None):
    columns = colHelper(df, columns)
    df = pd.melt(df, id_vars=columns)
    logger.debug('pp.data > Unpivot dataframe')
    return df

pp.data.DATA_UNPIVOT = DATA_UNPIVOT


'''
End patch
'''


class BaseModel(models.Model):
    name = models.CharField(max_length=100, blank=True, default='New item')
    description = models.CharField(max_length=255, blank=True, default='New item')
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    hash_key = models.CharField(max_length=10, blank=True)
    history = AuditlogHistoryField()
    properties = models.JSONField(blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True)
    is_published = models.BooleanField(default=False)
   
    #foreign keys
    owner = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    
    class Meta:
        abstract = True
        get_latest_by = 'created_at'
        
    prefetch = None
    
    use_object_permissions = False
    
    def __str__(self):
        return self.name
    
    @cached_property
    def seo(self):
        return {
            'title': self.name,
            'description': self.description, 
            #'keywords': None, 
            'author': self.owner.username, 
            #'h1': self.name,
        }
    
    #@cached_property
    def field_data(self):
        return {
            'name': self.name,
            'description': self.description,
        }
    
    def set_field_data(self, data):
        if 'name' in data:
            self.name = data['name']
        if 'description' in data:
            self.description = data['description']
    
    @cached_property
    def perms_req_by_owners(self):
         return None
    
    @cached_property
    def perms_req_by_managers(self):
         return None
        
    @cached_property
    def perms_req_by_collaborators(self):
         return None
        
    @cached_property
    def perms_req_by_anonymous(self):
        return None
    
    #def get_meta_image(self):
    #    if self.image:
    #        return self.image.url
    
    cached_properties = []
    
    def delete_cached_properties(self):
        #print(self.__dict__)
        for property in self.cached_properties:
            try:
                del self.__dict__[property]
                #print('**************deleted cache '+property)
            except KeyError:
                pass
    
    def get_absolute_url(self):
        #return '/report/%i/' % self.id
        return '/{cls_name}/{ob_id}/{hash_k}'.format(
            cls_name = self.__class__.__name__.lower(), 
            ob_id = self.id,
            hash_k = self.hash_key
        )
    
    def get_absolute_url_viewmode(self):
        #return '/report/%i/' % self.id
        return '{absolute_url}/viewmode/'.format(
            absolute_url = self.get_absolute_url()
        )
    
    def _getHashPayload(self):
        return [self.__class__, self.name, self.created_at, self.last_updated]
    
    def _createHash(self):
        """This function generate 10 character long hash"""
        payload = self._getHashPayload()
        if not isinstance(payload, list):
            payload = [payload]
        list_of_strings = [str(obj) for obj in payload]
        combined_string = ''.join(list_of_strings)
        encoded_string = combined_string.encode(encoding = 'UTF-8')
        hash = hashlib.sha1()
        #hash.update(str(time.time()))
        hash.update(encoded_string)
        return hash.hexdigest()[-10:]
        #return 'dummy'
        
    def _generate_slug(self, use_name=False, save_to_obj=False, add_random_suffix=True):
        """
        Generates and returns slug for this obj.
        If `save_to_obj` is True, then saves to current obj.
        Warning: setting `save_to_obj` to True
              when called from `.save()` method
              can lead to recursion error!

        `add_random_suffix ` is to make sure that slug field has unique value.
        """

        # We rely on django's slugify function here. But if
        # it is not sufficient for you needs, you can implement
        # you own way of generating slugs.
        generated_slug = ''
        
        if use_name:
            generated_slug += '-%s' % slugify(self.name)

        # Generate random suffix here.
        random_suffix = ""
        if add_random_suffix:
            random_suffix = ''.join([
                random.choice(string.ascii_letters + string.digits)
                for i in range(8)
            ])
            generated_slug += '%s' % random_suffix
            
        if save_to_obj:
            self.slug = generated_slug
            self.save(update_fields=['slug'])
        
        return generated_slug
    
    def save(self, *args, **kwargs):
        self.hash_key = self._createHash()
        
        s = self.slug
        if not s:
            #overwrite existing only if not already an 8 char random hex string
            self.slug = self._generate_slug()
            
        if not self.properties:
            if not 'properties' in kwargs:
                self.properties = {}
        
        super(BaseModel, self).save(*args, **kwargs)
        
        if self.use_object_permissions:
            baseobject_perms_helper(get_users_with_perms(self), self)
        
    def delete(self, *args, **kwargs):
        super(BaseModel, self).delete()
        
    @classmethod
    def get_prefetch(cls):
        return cls.prefetch
    
    @classmethod
    def list(cls, *args, **kwargs):
        p = cls.get_prefetch()
        query = kwargs['query'] if 'query' in kwargs else ''
        kwargs = {k: v for k, v in kwargs.items() if k not in ('query', )}
        
        if args:
            if p:
                return cls.objects.filter(*args, **kwargs).order_by('-id').prefetch_related(*p)
            else:
                return cls.objects.filter(*args, **kwargs).order_by('-id')
        else:
            if p:
                return cls.objects.filter(name__icontains=query, **kwargs).order_by('-id').prefetch_related(*p)
            else:
                return cls.objects.filter(name__icontains=query, **kwargs).order_by('-id')
    
    @classmethod
    def item(cls, *args, **kwargs):
        '''
        Takes pk=pk or slug=slug
        '''
        p = cls.get_prefetch()
        if p:
            return cls.objects.filter(**kwargs).prefetch_related(*p).last()
        else:
            return cls.objects.filter(**kwargs).last()
        
    @classmethod
    def extra_kwargs(cls, *args, **kwargs):
        return {'properties': '[]'}
    
    @classmethod
    def add(cls, *args, **kwargs):
        k = cls.extra_kwargs(*args, **kwargs)
        k.update(**kwargs)
        o = cls(**k)
        o.save()
        return o
    
    @classmethod
    def copy(cls, *args, **kwargs):
        kwargs['instance'] = cls.item(pk=int(kwargs['pk']))
        copy = cls.item(pk=int(kwargs['pk']))
        params = {k: v for k, v in kwargs.items() if k not in ('pk', 'id', 'instance', 'copy', 'slug') }
        copy.__dict__.update(params)
        copy.pk = None
        copy.id = None
        copy._state.adding = True
        copy.slug = None
        copy.name += ' copy'
        copy.save()
        kwargs['copy'] = copy
        return kwargs
    
    '''
    @classmethod
    def delete(cls, *args, **kwargs):
        if 'instance' in kwargs:
            instance = kwargs['instance']
        else:
            instance = cls.item(int(kwargs['pk']))
        
        super(BaseModel, instance).delete()
    '''
    '''    
    def can_view(self, user):
        #owner always true
        if user is self.owner:
            return True
        elif user in self.managers:
            return True
        elif user in self.collaborators:
            return True
        return False
    
    def can_view_or_404(self, user):
        #owner always true
        if self.can_view:
            return True
        raise Http404('No such object available for this user.')
    
    def can_change(self, user):
        #owner always true
        if user is self.owner:
            return True
        elif user in self.managers:
            return True
        elif user in self.collaborators:
            return True
        return False
    
    def can_change_or_404(self, user):
        #owner always true
        if self.can_change:
            return True
        raise Http404('No such object available for this user.')
    
    def can_delete(self, user):
        if user is self.owner:
            return True
        elif user in self.managers:
            return True
        elif user in self.collaborators:
            return False
        return False
        
    def can_delete_or_404(self, user):
        #owner always true
        if self.can_delete:
            return True
        raise Http404('No such object available for this user.')
    '''
    
    def is_owner(self, *args, **kwargs):
        if 'user' in kwargs:
            user = kwargs['user']
        else:
            user = User.objects.get(pk=int(kwargs['user_id']))
        return self.owner.pk == user.pk
    
    
    '''
    def refresh_from_db(self, *args, **kwargs):
        super(Foo, self).refresh_from_db(*args, **kwargs)
        cached_properties[
            'datatable',
            'databuffer',
            'columns',
            'records',
        ]
        for property in cached_properties:
            try:
                del self.__dict___[property]
            except KeyError:
                pass
            
    def __getstate__(self):
        """ Override to customize pickling """
        state = self.__dict__.copy()
        # Don't pickle baz
        if 'databuffer' in state.keys():  
            del state['databuffer']
        return state

    def __setstate__(self, state):
        """ Override to customize unpickling """
        self.__dict__.update(state)
        # Add baz back since it doesn't exist in the pickle
        #self.baz = 0
    '''
'''    
class Project(BaseModel):
    #parent_class
    #basemodel = models.OneToOneField(BaseModel, parent_link=True, related_name='child_project', on_delete=models.CASCADE)
    
    #relations
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    #attrs
    selected_datasource = models.IntegerField(null=True, blank=True)
    learner_mode = models.BooleanField(default=False)
    
    #selected_file = models.OneToOneField(File, on_delete=models.SET_NULL, null=True)
    #description = models.CharField(max_length=255, blank=True)
'''

class Profile(BaseModel):
    #user = models.OneToOneField(User, related_name='profiles', on_delete=models.CASCADE, blank=True, null=True)
    #image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.owner.username} Profile'
    
    default_profile_properties = {'profile_color': '#93e3fd',}
    
    owner = models.OneToOneField(User,on_delete=models.CASCADE, primary_key=True,)
    
    @cached_property
    def seo(self):
        return {
            'title': '{}'.format(self.name),
            'description': "List of {} public viz(s) shared by '{}'. Most recent viz is '{}'.".format(
                self.owner.datasources.filter(is_published=True).count(), 
                self.name,
                self.owner.datasources.filter(is_published=True).last().name,
            ), 
            #'keywords': None, 
            'author': self.name, 
            #'h1': self.name,
        }
    
    @classmethod
    def extra_kwargs(cls, *args, **kwargs):
        k = super(Profile, cls).extra_kwargs(*args, **kwargs)
        k.update({'properties': '["profile_color": "#ffffff"]'})
        return k
    
    def save(self, *args, **kwargs):
        if 'user' in kwargs:
            kwargs['owner'] = kwargs['user']
        if 'user_id' in kwargs:
            kwargs['owner_id'] = kwargs['user_id']
        if not self.properties:
            self.properties = self.default_profile_properties
        super(Profile, self).save(*args, **kwargs)
        
    '''
    Signals wiring to create Profile and add user to permission groups when new user created
    '''
    def create_profile(sender, instance, created, **kwargs):
        user = instance
        if created and user.username != settings.ANONYMOUS_USER_NAME:
            Profile.objects.create(owner=instance, name=user.username.capitalize(), description="")
            
            allusers_group = Group.objects.get(name='site_allusers')
            registeredusers_group = Group.objects.get(name='site_registeredusers')
            user.groups.add(allusers_group)
            user.groups.add(registeredusers_group)

    post_save.connect(create_profile, sender=User)

    '''
    def update_profile(sender, instance, created, **kwargs):
        if created is False:
            # NOTE profile"s" used here
            if hasattr(instance, 'profile'):
                instance.profile.save()

    post_save.connect(update_profile, sender=User)
    '''

class Datastream(BaseModel):
    #attrs
    url = models.URLField()
    json = models.JSONField(blank=True, null=True)
    last_cached = models.DateTimeField(auto_now_add=False, auto_now=False, null=True, blank=True)
    
    CSV = 'C'
    EXCEL = 'E'
    CKAN = 'K'
    DATASTREAM_TYPES = (
        (CSV, 'CSV'),
        (EXCEL, 'Excel'),
        (CKAN, 'CKAN'),
    )
    
    datastream_type = models.CharField(max_length=1, choices=DATASTREAM_TYPES, default=CSV)
    
    #prefetch = ('datapods', )
    
    managers = models.ManyToManyField(User, blank=True, related_name='datastream_managers')
    collaborators = models.ManyToManyField(User, blank=True, related_name='datastream_collaborators')
    
    use_object_permissions = True
    
    class Meta:
        default_related_name = 'datastreams'
        permissions = [('view_published_datastream', 'Can view published datastream')]
        
    #@cached_property
    def field_data(self):
        return super().field_data() | {
            'url': self.url,
            'json': self.json,
            'datastream_type': self.datastream_type,
            'source': self.properties.get('source', None) if self.properties else None,
        }
    
        
    def set_field_data(self, data):
        super().set_field_data(data)
        if 'url' in data:
            self.url = data['url']
        if 'json' in data:
            self.json = data['json']
        if 'datastream_type' in data:
            self.datastream_type = data['datastream_type']
        if 'source' in data:
            if self.properties and 'source' in self.properties: 
                self.properties['source'] = data['source']
    
    @cached_property
    def perms_req_by_owners(self):
         return [p.codename for p in Group.objects.get(name='datastream_owners').permissions.all()] 
    
    @cached_property
    def perms_req_by_managers(self):
         return [p.codename for p in Group.objects.get(name='datastream_managers').permissions.all()] 
        
    @cached_property
    def perms_req_by_collaborators(self):
         return [p.codename for p in Group.objects.get(name='datastream_collaborators').permissions.all()] 
        
    @cached_property
    def perms_req_by_anonymous(self):
        return [p.codename for p in Group.objects.get(name='datastream_anonymous').permissions.all()] 
    
    cached_properties = [
        'perms_req_by_owners',
        'perms_req_by_managers',
        'perms_req_by_collaborators',
        'perms_req_by_anonymous',
    ]
        
    def save(self, *args, **kwargs):
        a = pp.App()
        if self.datastream_type == self.CKAN:
            a.add('READ_CKAN', {'src': self.url})
        elif self.datastream_type == self.CSV:
            a.add('READ_CSV', {'src': self.url})
        elif self.datastream_type == self.EXCEL:
            a.add('READ_CSV', {'src': self.url})
        self.json = a.todos
        super(Datastream, self).save(*args, **kwargs)
        if not self.last_cached:
            self.refresh()
    
    @classmethod
    def services(cls):
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_CSV')]
    
    @classmethod
    def fetch(cls, *args, **kwargs):
        ds = kwargs['datastream']
        if ds.datastream_type == Datastream.CKAN:
            url = ds.url  
            fileobj = urllib.request.urlopen(url)
            
            JSONContent = requests.get(ds.url).json()
            content = json.dumps(JSONContent, indent = 4, sort_keys=True)
            df = pd.read_json(content, thousands=',')
            df = pd.json_normalize(df['result']['records'])
        else:
            a = pp.App(ds.json)
            df = a.call()
        return df.to_csv(index=False)
        
    def refresh(self, *args, **kwargs):
        #self.data = self._fetch(datastream=self.datastream)
        dp = Datapod.add(datastream = self)
        dp.data = Datastream.fetch(datastream=self)
        dp.save()
        self.last_cached = dp.last_updated
        self.save()
        
    def current_version(self, *args, **kwargs):
        return Datapod.list(datastream=self.pk).last().data
    
class Datapod(BaseModel):
    #attrs
    data = models.TextField(null=True, blank=True)
    
    #foreign keys
    datastream = models.ForeignKey(Datastream, on_delete=models.CASCADE)
    
    class Meta:
        default_related_name = 'datapods'
        
    managers = models.ManyToManyField(User, blank=True, related_name='datapod_managers')
    collaborators = models.ManyToManyField(User, blank=True, related_name='datapod_collaborators')
    
class Datasource(BaseModel):
    #attrs
    #data = models.TextField()
    last_cached = models.DateTimeField(auto_now_add=True, auto_now=False, null=True, blank=True)
    selected_viz = models.IntegerField(null=True, blank=True)
    #document = models.FileField(upload_to='files/')
    
    #relations
    datastream = models.ForeignKey(Datastream, on_delete=models.CASCADE, null=True)
    
    class Meta:
        default_related_name = 'datasources'
        permissions = [('view_published_datasource', 'Can view published datasource')]
        
    @cached_property
    def seo(self):
        return {
            'title': self.name,
            'description': "{} viz(s) based on the datasource '{}'. Last updated on {}. {}".format(
                self.vizs.count(), 
                self.datastream.name, 
                self.last_updated.strftime("%d %b %Y"),
                self.vizs.first().description,
            ), 
            #'keywords': None, 
            'author': self.owner.username, 
            #'h1': self.name,
        }
        
    use_object_permissions = True
       
    managers = models.ManyToManyField(User, blank=True, related_name='datasource_managers')
    collaborators = models.ManyToManyField(User, blank=True, related_name='datasource_collaborators')
    
    @cached_property
    def perms_req_by_owners(self):
         return [p.codename for p in Group.objects.get(name='datasource_owners').permissions.all()] 
    
    @cached_property
    def perms_req_by_managers(self):
         return [p.codename for p in Group.objects.get(name='datasource_managers').permissions.all()] 
        
    @cached_property
    def perms_req_by_collaborators(self):
         return [p.codename for p in Group.objects.get(name='datasource_collaborators').permissions.all()] 
        
    @cached_property
    def perms_req_by_anonymous(self):
        return [p.codename for p in Group.objects.get(name='datasource_anonymous').permissions.all()] 
    
    prefetch = ('vizs', 'comments', 'activities', 'itemviews', 'comments', )
    
    cached_properties = [
        'perms_req_by_owners',
        'perms_req_by_managers',
        'perms_req_by_collaborators',
        'perms_req_by_anonymous',
        'datatable',
        'datatable_preview',
        'columns',
        'records',
    ]
    
    '''
    @classmethod
    def _fetch(cls, *args, **kwargs):
        a = pp.App(kwargs['datastream'].json)
        df = a.call()
        return df.to_csv(index=False)
    '''
    
    '''
    @classmethod
    def extra_kwargs(cls, *args, **kwargs):
        return {'data': cls._fetch(*args, **kwargs)}
    '''
    
    def refresh(self, *args, **kwargs):
        #self.data = self._fetch(datastream=self.datastream)
        self.datastream.refresh()
        self.last_cached = datetime.utcnow()
        self.save()    
        
    @cached_property
    def datatable(self):
        io = StringIO(self.datastream.current_version())
        df = pd.read_csv(io)
        #replace missing to easy jsonification
        df = df.astype(object).where(df.notnull(), other=None)
        df = df.convert_dtypes()
        result = df.to_dict(orient='tight')
        result['dtypes'] = df.dtypes.astype(str).to_list()
        io.close()
        del io
        del df
        return result
    
    @cached_property
    def datatable_preview(self):
        io = StringIO(self.datastream.current_version())
        df = pd.read_csv(io)
        #replace missing to easy jsonification
        df = df.astype(object).where(df.notnull(), other=None)
        df = df.convert_dtypes()
        result = df.to_dict(orient='tight')
        result['dtypes'] =  df.dtypes.astype(str).to_list()
        io.close()
        del io
        del df
        return result
    
    #@cached_property
    #def databuffer(self):
    #    #print('xxxxxxxxxxdatabuffer')
    #    #return StringIO(self.datastream.current_version())
    #    return self.datastream.current_version()
    
    '''
    def delete_cached_properties(self):
        if hasattr(self, 'databuffer'):
            self.databuffer.close()
        super(Datasource, self).delete_cached_properties()
    '''
    
    '''
    @cached_property
    def columns(self):
        #print('xxxxxxxxxxcolumns')
        return self.datatable()['columns']
    
    @cached_property
    def records(self):
        #print('xxxxxxxxxrecords')
        return self.datatable()['data']
    '''
    
    @classmethod
    def copy(cls, *args, **kwargs):
        kwargs['is_published'] = False
        kwargs = super(Datasource, cls).copy(*args, **kwargs)
        original_datasource = kwargs['instance']
        copied_datasource = kwargs['copy']
        
        for v in original_datasource.vizs.all():
            copied_json = deepcopy(v.json)
            json_patch = {'options': {'src': copied_datasource.pk}}
            copied_json[0].update(json_patch) 
            #use _id for foreign keys!
            newViz = Viz.copy(pk=v.pk, 
                              datasource_id=copied_datasource.pk,
                             json=copied_json)['copy']
            
        return kwargs
        #copy vizs, replace ols
    
    '''

    @classmethod
    def from_datastream(cls, owner, pk):
        d=Datastream.objects.filter(pk=pk).last()
        a = pp.App(d.json)
        df = a.call()
        content = df.to_csv(index=False)
        #json = a.todos
        # no files on disk so delete
        #temp_file = ContentFile(content.encode('utf-8'))
        ds = cls(name=d.name, owner=user, description=d.description, datastream=d, data=content, last_cached = datetime.utcnow())
        #f.document.save(f'{service}.csv', temp_file)
        ds.save()
        return ds
    '''
    
    
    #@classmethod
    #def datasources(cls, project):
    #    ds = cls.objects.filter(project=project).all().order_by('-id').prefetch_related('vizs', 'reports', 'items__answers')
    #    if not ds:
    #        cls.getRemoteData(project)
    #        ds = cls.objects.filter(project=project).all().order_by('-id').prefetch_related('vizs', 'reports', 'items__answers')
    #    return ds
    
    
    #@classmethod
    #def list_datasources(cls, query=None, user=None, order='-id'):
    #    return cls.objects.filter(name__icontains=query).all().order_by(order).prefetch_related('vizs', 'reports', 'items__answers')
    
    #@classmethod
    #def datasource(cls, pk):
    #    return cls.objects.filter(pk=pk).all().order_by('-id').prefetch_related('vizs', 'reports', 'items__answers').last()
    
    
    '''
    @classmethod
    def getRemoteData(cls, project, service='READ_DATA_ATTRITION', name='no_name'):
        #logger.debug('AppView > addRemoteFile start')
        a = pp.App()
        a.add(service)
        df = a.call()
        content = df.to_csv(index=False)
        json = a.todos
        # no files on disk so delete
        #temp_file = ContentFile(content.encode('utf-8'))
        f = cls(name=name, description=service, project=project, 
                       json=json, document=content, last_cached = datetime.utcnow())
        #f.document.save(f'{service}.csv', temp_file)
        f.save()
    '''
    
    
    '''
    @classmethod
    def remote_data(cls):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    '''
    
    def refresh_from_db(self, *args, **kwargs):
        super(Foo, self).refresh_from_db(*args, **kwargs)
        cached_properties[
            'datatable',
            'databuffer',
            'columns',
            'records',
        ]
        for property in cached_properties:
            try:
                del self.__dict___[property]
            except KeyError:
                pass
            
    def __getstate__(self):
        """ Override to customize pickling """
        state = self.__dict__.copy()
        # Don't pickle baz
        if 'databuffer' in state.keys():  
            del state['databuffer']
        return state

    def __setstate__(self, state):
        """ Override to customize unpickling """
        self.__dict__.update(state)
        # Add baz back since it doesn't exist in the pickle
        #self.baz = 0

'''
Datasource auth signal hooks
'''

def baseobject_perms_helper(users_with_perms, bobj, **kwargs):
    
    has_managers_and_collaborators = hasattr(bobj, 'managers')
    
    owner = bobj.owner
    
    if has_managers_and_collaborators:
        managers = bobj.managers.all()
        collaborators = bobj.collaborators.all()
        users_needing_perms = list(set([owner]) | set(managers) | set(collaborators))
    else:
        users_needing_perms = list(set([owner]))

    users_needing_no_perms = [user for user in users_with_perms if user not in users_needing_perms]
    
    perms_req_by_owners = bobj.perms_req_by_owners
    
    if has_managers_and_collaborators:
        perms_req_by_managers = bobj.perms_req_by_managers
        perms_req_by_collaborators = bobj.perms_req_by_collaborators
    
    #remove all perms from users_needing_no_perms
    for u in users_needing_no_perms:
        for p in get_user_perms(u, bobj):
            remove_perm(p, u, bobj)
            
    for u in users_needing_perms:
        needed_perms = []
        if u == owner:
            needed_perms = list(set(needed_perms) | set(perms_req_by_owners))
        if has_managers_and_collaborators and u in managers:
            needed_perms = list(set(needed_perms) | set(perms_req_by_managers))
        if has_managers_and_collaborators and u in collaborators:
            needed_perms = list(set(needed_perms) | set(perms_req_by_collaborators))
            
        user_perms = get_user_perms(u, bobj)
        
        perms_to_assign = list(set(needed_perms) - set(user_perms))
        perms_to_remove = list(set(user_perms) - set(needed_perms))
    
        for p in perms_to_assign:
            #print(p)
            assign_perm(p, u, bobj)
        for p in perms_to_remove:
            remove_perm(p, u, bobj)
    
def managers_changed(sender, **kwargs):
    bobj, pk_set, action = kwargs['instance'], kwargs['pk_set'], kwargs['action']
    if 'post' in action and bobj.use_object_permissions:
        baseobject_perms_helper(get_users_with_perms(bobj), bobj)

m2m_changed.connect(managers_changed, sender=Datasource.managers.through)
m2m_changed.connect(managers_changed, sender=Datastream.managers.through)

def collaborators_changed(sender, **kwargs):
    bobj, pk_set, action = kwargs['instance'], kwargs['pk_set'], kwargs['action']
    if 'post' in action and bobj.use_object_permissions:
        baseobject_perms_helper(get_users_with_perms(bobj), bobj)

m2m_changed.connect(collaborators_changed, sender=Datasource.collaborators.through)
m2m_changed.connect(collaborators_changed, sender=Datastream.collaborators.through)

def group_permissions_changed(sender, **kwargs):
    group, action = kwargs['instance'], kwargs['action']
    if 'post' in action:
        model_name, role = group.name.split('_')
        
        if role == 'owners':
            role = 'owner'
        
        #skip object-level update for site-level permission changes
        if model_name == 'site':
            return 
        
        model_to_refresh_perms = apps.get_model('projects', model_name)
        
        if not model_to_refresh_perms.use_object_permissions:
            return #abort
        
        if role == 'anonymous':
            filter_query = {
                'pk__isnull': False,
            }
        else:
            filter_query = {
                '{0}__isnull'.format(role): False,
            }
        
        bobjs_to_refresh_perms = model_to_refresh_perms.objects.filter(**filter_query)
        for bobj in bobjs_to_refresh_perms:
            baseobject_perms_helper(get_users_with_perms(bobj), bobj)

m2m_changed.connect(group_permissions_changed, sender=Group.permissions.through)

    
class Viz(BaseModel):
    #relations
    datasource = models.ForeignKey(Datasource, on_delete=models.CASCADE)
    
    managers = models.ManyToManyField(User, blank=True, related_name='viz_managers')
    collaborators = models.ManyToManyField(User, blank=True, related_name='viz_collaborators')
    
    #attrs
    json = models.JSONField(blank=True, null=True)
    
    layout_options: dict = {
        #'showlegend': [
        #    True,
        #    False,
        #],
        'xaxis_categoryorder': [
            'trace',
            'category ascending',
            'category descending',
            'total ascending',
            'total descending',
        ],
        'xaxis_title_text': [
            None,
            ' ',
        ],
        'xaxis_showticklabels': [
            True,
            False,
        ],
        'xaxis_ticks': [
            'outside',
            'inside',
        ],
        'xaxis_rangemode': [
            'normal',
            'tozero',
            'nonnegative',
        ],
        'xaxis_autorange': [
            True,
            False,
            'reversed',
        ],
        'xaxis_showgrid': [
            True,
            False,
        ],
        'yaxis_categoryorder': [
            'trace',
            'category ascending',
            'category descending',
            'total ascending',
            'total descending',
        ],
        'yaxis_title_text': [
            None,
            ' ',
        ],
        'yaxis_showticklabels': [
            True,
            False,
        ],
        'yaxis_ticks': [
            'outside',
            'inside',
        ],
        'yaxis_rangemode': [
            'normal',
            'tozero',
            'nonnegative',
        ],
        'yaxis_autorange': [
            True,
            False,
            'reversed',
        ],
        'yaxis_showgrid': [
            True,
            False,
        ],
        'yaxis_categoryorder': [
            'trace',
            'category ascending',
            'category descending',
            'total ascending',
            'total descending',
        ],
    }
    
    class Meta:
        default_related_name = 'vizs'
        
    cached_properties = [
        '_copied_json',
        'viz_html',
        'perms_req_by_anonymous',
        'datatable',
        'datatable_preview',
    ]
        
    #@cached_property
    #def _copied_json(self):
    #    #load csv from db
    #    copied_json = deepcopy(self.json)
    #    a = pp.App(copied_json)
    #    #copied_json[0]['options']['src'] = self.parent.datasource.databuffer
    #    a.todos[0]['options']['src'] = self.datasource.databuffer
    #    return a
    
    @cached_property
    def viz_html(self):
        copied_json = deepcopy(self.json)
        a = pp.App(copied_json)
        io = StringIO(self.datasource.datastream.current_version()) 
        a.todos[0]['options']['src'] = io
        #a = self._copied_json
        
        #handle missing layout
        if not 'layout' in a.todos[-1]:
            a.todos[-1]['layout'] = {}
        
        fig = a.call(return_df=False)[0]
        
        fig.update_layout(
            width=350, 
            height=250,
            autosize=True, 
            margin={
                'l': 0,
                't': 15,
                'b': 68,
                'r': 10,
            },
            #showlegend=True,
            #legend = {
            #    'x': 1,
            #    'xanchor': 'right',
            #    'y': 1,
            #    'bgcolor': '#000000',
            #},
        )
        #print(a.todos[-1]['layout'])
        
        fig.update_layout(**a.todos[-1]['layout'])
        j = json.loads(pio.to_json(fig=fig, engine='json'))
        result = {
            'plot_data': json.dumps(j['data']),
            'plot_layout': json.dumps(j['layout']),
        }
        io.close()
        del a
        del fig
        del j
        return result
    
    @cached_property
    def viz_cache(self):
        copied_json = deepcopy(self.json)
        a = pp.App(copied_json)
        io = StringIO(self.datasource.datastream.current_version()) 
        a.todos[0]['options']['src'] = io
        #a = self._copied_json
        
        #viz, data options, saved and available
        cache = {'data': [], 'viz': None}
        for count, td in enumerate(a.todos):
            if count > 0:
                if count < len(a.todos) - 1:
                    cache['data'].append(a.data(todo=count))
                else:
                    #careful - layout loaded as is at first
                    cache['viz'] = a.todos[-1] | a.data(todo=count)
                    
        def flatten(d: MutableMapping, sep: str= '-') -> MutableMapping:
            if not isinstance(d, dict) or len(d.keys()) == 0:
                return {}
            [flat_dict] = pd.json_normalize(d, sep=sep).to_dict(orient='records')
            return flat_dict
        
        #viz layout, saved and available 
        avail = {'available': flatten(self.layout_options)}
        if 'layout' in cache['viz']:
            saved = {'saved': flatten(cache['viz']['layout'])}
        else:
            saved = {'saved': flatten({})}
        cache['viz']['layout'] = {**saved, **avail}
        
        #stringify None, bool types in viz
        if not 'saved' in cache['viz']['options']:
            cache['viz']['options'] = {'saved': {}}
        else:
            for k, v in cache['viz']['options']['saved'].items():
                if v is None:
                    cache['viz']['options']['saved'][k] = 'None'
                elif v == False:
                    cache['viz']['options']['saved'][k] = 'False'
                elif v == True:
                    cache['viz']['options']['saved'][k] = 'True'
                    
        for k, v in cache['viz']['layout']['saved'].items():
            if v is None:
                cache['viz']['layout']['saved'][k] = 'None'
            elif v == False:
                cache['viz']['layout']['saved'][k] = 'False'
            elif v == True:
                cache['viz']['layout']['saved'][k] = 'True'
        
        #and data
        for count, td in enumerate(cache['data']):
            if not 'saved' in td['options']:
                td['options'] = {'saved': {}}
            else:
                for k, v in td['options']['saved'].items():
                    if v is None:
                        k[v] = 'None'
                    elif v == False:
                        k[v] = 'False'
                    elif v == True:
                        k[v] = 'True'
        
        io.close()
        del a
        
        return cache
    
    '''
    @cached_property
    def datatable(self):
        copied_json = deepcopy(self.json)
        a = pp.App(copied_json)
        #copied_json[0]['options']['src'] = self.parent.datasource.databuffer
        a.todos[0]['options']['src'] = self.datasource.databuffer
        result = a.call()[:200].to_dict(orient='tight')
        
        del copied_json
        a.todos[0]['options']['src'].close()
        del a
        
        return result
    
    @cached_property
    def columns(self):
        return self.datatable['columns']
    
    @cached_property
    def records(self):
        return self.datatable['data']
    '''
    @cached_property
    def datatable(self):
        copied_json = deepcopy(self.json)
        a = pp.App(copied_json)
        io = StringIO(self.datasource.datastream.current_version())
        a.todos[0]['options']['src'] = io
        df = a.call(return_df=True)
        #replace missing to easy jsonification
        df = df.astype(object).where(df.notnull(), other=None)
        df = df.convert_dtypes()
        result = df.to_dict(orient='tight')
        result['dtypes'] = df.dtypes.astype(str).to_list()
        io.close()
        del io
        del df
        return result
    
    @cached_property
    def datatable_preview(self):
        copied_json = deepcopy(self.json)
        a = pp.App(copied_json)
        io = StringIO(self.datasource.datastream.current_version())
        a.todos[0]['options']['src'] = io
        df = a.call(return_df=True)
        #replace missing to easy jsonification
        df = df.astype(object).where(df.notnull(), other=None)
        df = df.convert_dtypes()
        result = df[:1000].to_dict(orient='tight')
        result['dtypes'] =  df.dtypes.astype(str).to_list()
        io.close()
        del io
        del df
        return result
    
    @classmethod
    def extra_kwargs(cls, **kwargs):
        a = pp.App()
        a.add('READ_CSV', {'src': kwargs['datasource'].pk})
        a.add('VIZ_HIST', {})
        json = a.todos
        return {'json': json}
    
    @classmethod
    def services(cls):
        return ['VIZ_HIST', 'VIZ_BOX']
        
    '''
    @classmethod
    def add(self, owner, datasource):
        a = pp.App()
        a.add('READ_CSV', {'src': datasource.pk})
        a.add('VIZ_HIST', {'x': 'Age'})
        json = a.todos
        v = Viz(owner=owner, datasource=datasource, json=json)
        v.save()
    '''
    '''
    @classmethod
    def copy(self, pk):
        v = Viz.objects.get(pk=pk)
        v.pk = None
        v.save()
        
    @classmethod
    def delete(self, pk):
        v = Viz.objects.get(pk=pk)
        v.delete()
    '''
    
    #same hash for same viz settings (json)
    def _getHashPayload(self):
        return [self.__class__.__name__, self.id, self.json]
    
    '''
    
class Report(BaseModel):
    #relations
    datasource = models.ForeignKey(Datasource, on_delete=models.CASCADE)
    
    #attrs
    report = models.TextField()
    share = models.BooleanField(default=False)
    
    class Meta:
        default_related_name = 'reports'
    '''

class Comment(BaseModel):
    parent = models.ForeignKey('self', null=True, on_delete=models.CASCADE)
    datasource = models.ForeignKey(Datasource, null=True, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, null=True, on_delete=models.CASCADE)
    
    class Meta:
        default_related_name = 'comments'
                                   
    use_object_permissions = True
    
    @cached_property
    def perms_req_by_owners(self):
         return [p.codename for p in Group.objects.get(name='comment_owners').permissions.all()] 
    
class Activity(BaseModel):
    FAVORITE = 'F'
    LIKE = 'L'
    UP_VOTE = 'U'
    DOWN_VOTE = 'D'
    ACTIVITY_TYPES = (
        (FAVORITE, 'Favorite'),
        (LIKE, 'Like'),
        (UP_VOTE, 'Up Vote'),
        (DOWN_VOTE, 'Down Vote'),
    )
    
    activity_type = models.CharField(max_length=1, choices=ACTIVITY_TYPES)
    datasource = models.ForeignKey(Datasource, null=True, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, null=True, on_delete=models.CASCADE)
    
    class Meta:
        default_related_name = 'activities'
        
    @classmethod
    def toggle(cls, *args, **kwargs):
        try:
            o = kwargs['owner']
            if 'datasource_pk' in kwargs:
                ds = Datasource.item(pk=kwargs['datasource_pk'])
            else:
                p = Profile.item(pk=kwargs['profile_pk'])
        except:
            return None
        else:
            if ds:
                a = Activity.objects.filter(owner=o, datasource=ds).last()
                if a:
                    super(Activity, a).delete()
                else:
                    a = Activity(owner=o, activity_type=Activity.FAVORITE, datasource=ds)
                    a.save()
            else:
                a = Activity.objects.filter(owner=u, profile=p).last()
                if a:
                    super(Activity, a).delete()
                else:
                    a = Activity(owner=o, activity_type=Activity.FAVORITE, profile=p)
                    a.save()
    
    #prefetch = ('user',)
    
class Cover(BaseModel):
    #attrs
    search_terms = models.CharField(max_length=255, blank=True)
    
class ItemView(models.Model):
    IPAddress = models.GenericIPAddressField(default='45.243.82.169')
    session = models.CharField(null=True, max_length=40)
    datasource = models.ForeignKey(Datasource, null=True, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, null=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
    class Meta:
        default_related_name = 'itemviews'
    
    #prefetch = ('profile',)
    

    
class Notification(models.Model):
    start_date = models.DateTimeField(null=True, )
    end_date = models.DateTimeField(null=True, )
    title = models.CharField(max_length=100, blank=True, default='New notification title')
    message = models.CharField(max_length=200, blank=True, default='New notification message')
    instructions = models.CharField(max_length=100, blank=True, default='New notification instructions')
    html = models.CharField(max_length=1000, blank=True)
    dismissable = models.BooleanField(default=True)
    INFO = "INF"
    DANGER = "DAN"
    NONE = "NON"
    CATEGORY_CHOICES = (
        (INFO, "Info"),
        (DANGER, "Danger"),
        (NONE, "None"),
    )
    category = models.CharField(
        max_length=3,
        choices=CATEGORY_CHOICES,
        default=INFO)
    LIST = "LIST"
    LIST_AD = "LAD"
    VIEW = "VIEW"
    VIEW_AD = "VAD"
    USER = "USER"
    USER_AD = "UAD"
    POSITION_CHOICES = (
        (LIST, "List"),
        (LIST_AD, "List Ad"),
        (VIEW, "View"),
        (VIEW_AD, "View ad"),
        (USER, "User"),
        (USER_AD, "User ad"),
    )
    position = models.CharField(
        max_length=4,
        choices=POSITION_CHOICES,
        default=LIST)
    
class Settings(models.Model):
    json = models.JSONField(blank=True, null=True)
    
    @classmethod
    def all(cls):
        s = cls.objects.all().last()
        if s:
            return s.json
        return None
    
    @classmethod
    def get(cls, k):
        s = cls.objects.all().last()
        if s:
            if s.json:
                if k in s.json:
                    return s.json[k]
        return None
        
    @classmethod
    def set(cls, k, v):
        s = cls.objects.all().last()
        if not s:
            s = cls(json={})
        elif not s.json:
            s.json = {}
        s.json[k] = v
        s.save()
    
    #prefetch = ('user',)
       
auditlog.register(Datastream)
auditlog.register(Datasource, exclude_fields=['data'])
auditlog.register(Viz)
#auditlog.register(Report)
#auditlog.register(MyModel, exclude_fields=['last_updated'])
#auditlog.register(MyModel, mask_fields=['address'])
#auditlog.register(MyModel, m2m_fields={"tags", "contacts"})
#auditlog.register(
#    MyModel,
#    serialize_data=True,
#    serialize_kwargs={"fields": ["foo", "bar", "biz", "baz"]}
#)

