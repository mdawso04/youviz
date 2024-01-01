from django.db import models
from django.contrib.auth.models import User
from django.utils.functional import cached_property
from django.contrib.contenttypes.fields import GenericRelation
from django.utils.text import slugify

from project import settings

# pp
import pp
from pp.log import logger

#python standard libraries
import os
from io import StringIO
import hashlib
from copy import *
import json

#non-standard libraries
import pandas as pd
import plotly.io as pio
from datetime import datetime
from auditlog.registry import auditlog
from auditlog.models import AuditlogHistoryField


class BaseModel(models.Model):
    name = models.CharField(max_length=100, blank=True, default='New item')
    description = models.CharField(max_length=255, blank=True, default='New item')
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    hash_key = models.CharField(max_length=10, blank=True)
    history = AuditlogHistoryField()
    properties = models.JSONField(blank=True, null=True)
    slug = models.SlugField(max_length=255)
   
    #foreign keys
    owner = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    
    class Meta:
        abstract = True
        
    prefetch = None
    
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
    
    #def get_meta_image(self):
    #    if self.image:
    #        return self.image.url
    
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
        return [self.__class__.__name__, self.id, self.last_updated]
    
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
    
    def save(self, *args, **kwargs):
        self.hash_key = self._createHash()
        self.slug = slugify(self.name)
        super(BaseModel, self).save(*args, **kwargs)
        
    @classmethod
    def get_prefetch(cls):
        return cls.prefetch
    
    @classmethod
    def list(cls, *args, **kwargs):
        p = cls.get_prefetch()
        query = kwargs['query'] if 'query' in kwargs else ''
        kwargs = {k: v for k, v in kwargs.items() if k not in ('query',)}
        if p:
            return cls.objects.filter(name__icontains=query, **kwargs).all().order_by('-id').prefetch_related(*p)
        else:
            return cls.objects.filter(name__icontains=query, **kwargs).all().order_by('-id')
    
    @classmethod
    def item(cls, pk):
        p = cls.get_prefetch()
        if p:
            return cls.objects.filter(pk=pk).prefetch_related(*p).last()
        else:
            return cls.objects.filter(pk=pk).last()
        
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
        if 'instance' in kwargs:
            instance = kwargs['instance']
        else:
            instance = cls.item(int(kwargs['pk']))
        instance.pk = None
        instance.save()
        return instance
    
    @classmethod
    def delete(cls, *args, **kwargs):
        if 'instance' in kwargs:
            instance = kwargs['instance']
        else:
            instance = cls.item(int(kwargs['pk']))
        
        super(BaseModel, instance).delete()
        
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
    user = models.OneToOneField(User, related_name='profiles', on_delete=models.CASCADE)
    #image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'
    
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
        super(Profile, self).save(*args, **kwargs)

class Datastream(BaseModel):
    #attrs
    url = models.URLField()
    json = models.JSONField(blank=True, null=True)
   
    class Meta:
        default_related_name = 'datastreams'
        
    def save(self, *args, **kwargs):
        a = pp.App()
        a.add('READ_CSV', {'src': self.url})
        self.json = a.todos
        super(Datastream, self).save(*args, **kwargs)
    
    @classmethod
    def services(cls):
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_CSV')]
    
class Datasource(BaseModel):
    #attrs
    data = models.TextField()
    last_cached = models.DateTimeField(auto_now_add=True, auto_now=False, null=True, blank=True)
    selected_viz = models.IntegerField(null=True, blank=True)
    #document = models.FileField(upload_to='files/')
    
    #relations
    datastream = models.ForeignKey(Datastream, on_delete=models.CASCADE, null=True)
    
    class Meta:
        default_related_name = 'datasources'
    
    prefetch = ('vizs', 'comments', 'activities', 'itemviews', )
    
    @classmethod
    def _fetch(cls, *args, **kwargs):
        a = pp.App(kwargs['datastream'].json)
        df = a.call()
        return df.to_csv(index=False)
    
    @classmethod
    def extra_kwargs(cls, *args, **kwargs):
        return {'data': cls._fetch(*args, **kwargs)}
    
    def refresh(self, *args, **kwargs):
        self.data = self._fetch(datastream=self.datastream)
        self.last_cached = datetime.utcnow()
        self.save()    
        
    @cached_property
    def datatable(self):
        io = StringIO(self.data)
        df = pd.read_csv(io)
        return df[:200].to_dict(orient='tight')

    @cached_property
    def databuffer(self):
        return StringIO(self.data)
    
    @cached_property
    def columns(self):
        return self.datatable['columns']
    
    @cached_property
    def records(self):
        return self.datatable['data']
    
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
    
class Viz(BaseModel):
    #relations
    datasource = models.ForeignKey(Datasource, on_delete=models.CASCADE)
    
    #attrs
    json = models.JSONField(blank=True, null=True)
    
    class Meta:
        default_related_name = 'vizs'
        
    def viz_html(self):
        #load csv from db
        copied_json = deepcopy(self.json)
        #copied_json[0]['options']['src'] = self.parent.datasource.databuffer
        copied_json[0]['options']['src'] = self.datasource.databuffer
        a = pp.App(copied_json)
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
            showlegend=True,
            legend = {
                'x': 1,
                'xanchor': 'right',
                'y': 1,
                'bgcolor': '#000000',
            }
        )
        j = json.loads(pio.to_json(fig=fig, engine='json'))
        return {
            'plot_data': json.dumps(j['data']),
            'plot_layout': json.dumps(j['layout']),
        }
    
    @classmethod
    def extra_kwargs(cls, **kwargs):
        a = pp.App()
        a.add('READ_CSV', {'src': kwargs['datasource'].pk})
        a.add('VIZ_HIST', {'x': 'Age'})
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
    
    prefetch = ('user',)
    
    
class ItemView(models.Model):
    IPAddress = models.GenericIPAddressField(default='45.243.82.169')
    datasource = models.ForeignKey(Datasource, null=True, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, null=True, on_delete=models.CASCADE)
    
    class Meta:
        default_related_name = 'itemviews'
    
    #prefetch = ('profile',)
    
class Activity(models.Model):
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
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=1, choices=ACTIVITY_TYPES)
    date = models.DateTimeField(auto_now_add=True)
    datasource = models.ForeignKey(Datasource, null=True, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, null=True, on_delete=models.CASCADE)
    
    class Meta:
        default_related_name = 'activities'
    
    #prefetch = ('user',)
    
class Notification(models.Model):
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    title = models.CharField(max_length=100, blank=True, default='New notification title')
    message = models.CharField(max_length=200, blank=True, default='New notification message')
    html = models.CharField(max_length=1000, blank=True)
    dismissable = models.BooleanField(default=True)
    INFO = "INF"
    DANGER = "DAN"
    CATEGORY_CHOICES = (
        (INFO, "Info"),
        (DANGER, "Danger"),
    )
    category = models.CharField(
        max_length=3,
        choices=CATEGORY_CHOICES,
        default=INFO)
    LIST = "LIST"
    VIEW = "VIEW"
    POSITION_CHOICES = (
        (LIST, "List"),
        (VIEW, "View"),
    )
    position = models.CharField(
        max_length=4,
        choices=POSITION_CHOICES,
        default=LIST)
       
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