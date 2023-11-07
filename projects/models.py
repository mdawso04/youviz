from django.db import models
from django.contrib.auth.models import User
from django.utils.functional import cached_property

from project import settings

# pp
import pp
from pp.log import logger

#python standard libraries
import os
from io import StringIO
import hashlib

#non-standard libraries
import pandas as pd
import shortener
from datetime import datetime

class BaseModel(models.Model):
    name = models.CharField(max_length=100, blank=True, default='New item')
    description = models.CharField(max_length=255, blank=True, default='New item')
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    hash_key = models.CharField(max_length=10, blank=True)
    
    class Meta:
        abstract = True
    
    def __str__(self):
        return self.name
    
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
        super(BaseModel, self).save(*args, **kwargs)
        
    
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
    
class Datasource(BaseModel):
    #parent_class
    #basemodel = models.OneToOneField(BaseModel, parent_link=True, related_name='child_datasource', on_delete=models.CASCADE)
    
    #relations
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    
    #attrs
    document = models.TextField()
    #document = models.FileField(upload_to='files/')
    json = models.JSONField(blank=True, null=True)
    last_cached = models.DateTimeField(auto_now_add=False, auto_now=False, null=True, blank=True)
    selected_viz = models.IntegerField(null=True, blank=True)
    learner_mode = models.BooleanField(default=False)
    
    #name = models.CharField(max_length=100, blank=True)
    #description = models.CharField(max_length=255, blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    #last_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        default_related_name = 'datasources'
    
    @classmethod
    def datasources(cls, project):
        ds = cls.objects.filter(project=project).all().order_by('-id').prefetch_related('vizs', 'reports', 'items__answers')
        if not ds:
            cls.getRemoteData(project)
            ds = cls.objects.filter(project=project).all().order_by('-id').prefetch_related('vizs', 'reports', 'items__answers')
        return ds
            
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
    
    @cached_property
    def datatable(self):
        if self.document:
            #filepath = os.path.join(str(settings.MEDIA_ROOT), str(self.document))
            #a = pp.App()
            #a.add('READ_CSV', {'src': filepath})
            #df = a.call(return_df=True)
            # store csv in db, so no need to read from disk
            io = StringIO(self.document)
            df = pd.read_csv(io)
            return df[:200].to_dict(orient='tight')
        
    @cached_property
    def databuffer(self):
        if self.document:
            #filepath = os.path.join(str(settings.MEDIA_ROOT), str(self.document))
            #a = pp.App()
            #a.add('READ_CSV', {'src': filepath})
            #df = a.call(return_df=True)
            # store csv in db, so no need to read from disk
            return StringIO(self.document)
    
    @cached_property
    def columns(self):
        return self.datatable['columns'] if self.datatable else None
    
    @cached_property
    def records(self):
        return self.datatable['data'] if self.datatable else None
    
    @classmethod
    def remote_data(self):
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
    
class Viz(BaseModel):
    #parent_class
    #basemodel = models.OneToOneField(BaseModel, parent_link=True, related_name='child_viz', on_delete=models.CASCADE)
    
    #relations
    datasource = models.ForeignKey(Datasource, on_delete=models.CASCADE)
    
    #attrs
    json = models.JSONField(blank=True, null=True)
    
    #name = models.CharField(max_length=100, blank=True)
    #comment = models.CharField(max_length=255, blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    #last_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        default_related_name = 'vizs'
    
    #same hash for same viz settings (json)
    def _getHashPayload(self):
        return [self.__class__.__name__, self.id, self.json]
    
class Report(BaseModel):
    #parent_class
    #basemodel = models.OneToOneField(BaseModel, parent_link=True, related_name='child_report', on_delete=models.CASCADE)
    
    #relations
    datasource = models.ForeignKey(Datasource, on_delete=models.CASCADE)
    
    #attrs
    report = models.TextField()
    share = models.BooleanField(default=False)
    
    #name = models.CharField(max_length=100, blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        default_related_name = 'reports'

class Item(BaseModel):
    #parent_class
    #basemodel = models.OneToOneField(BaseModel, parent_link=True, related_name='child_item', on_delete=models.CASCADE)
    
    #relations
    datasource = models.ForeignKey(Datasource, on_delete=models.CASCADE)
    
    #name = models.CharField(max_length=100, blank=True)
    #description = models.CharField(max_length=255, blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        default_related_name = 'items'
    
class Answer(BaseModel):
    #parent_class
    #basemodel = models.OneToOneField(BaseModel, parent_link=True, related_name='child_answer', on_delete=models.CASCADE)
    
    #relations
    viz = models.OneToOneField(Viz, on_delete=models.SET_NULL, null=True)
    
    #attrs
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    
    #name = models.CharField(max_length=100, blank=True)
    #description = models.CharField(max_length=255, blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        default_related_name = 'answers'