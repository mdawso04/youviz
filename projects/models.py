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

#non-standard libraries
import pandas as pd

# Create your models here.
class Project(models.Model):
    description = models.CharField(max_length=255, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    selected_file = models.IntegerField(null=True, blank=True)
    #selected_file = models.OneToOneField(File, on_delete=models.SET_NULL, null=True)
    learner_mode = models.BooleanField(default=False)
    
    def __str__(self):
        return self.description

class File(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    #document = models.FileField(upload_to='files/')
    document = models.TextField()
    uploaded_at = models.DateTimeField(auto_now_add=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    selected_viz = models.IntegerField(null=True, blank=True)
    learner_mode = models.BooleanField(default=False)
    
    class Meta:
        default_related_name = 'files'
    
    def __str__(self):
        return self.description
    
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
        ''' Override to customize pickling '''
        state = self.__dict__.copy()
        # Don't pickle baz
        if 'databuffer' in state.keys():  
            del state['databuffer']
        return state

    def __setstate__(self, state):
        ''' Override to customize unpickling '''
        self.__dict__.update(state)
        # Add baz back since it doesn't exist in the pickle
        #self.baz = 0
    
    @classmethod
    def remote_data(self):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    
class Viz(models.Model):
    title = models.CharField(max_length=100, blank=True)
    comment = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    file = models.ForeignKey(File, on_delete=models.CASCADE)
    json = models.JSONField(blank=True, null=True)
    
    class Meta:
        default_related_name = 'vizs'
    
    def __str__(self):
        return self.title + ": " +self.comment
    
    
class Report(models.Model):
    title = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    file = models.OneToOneField(File, on_delete=models.CASCADE)
    report = models.TextField()

    def __str__(self):
        return self.title
    
class Item(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    file = models.ForeignKey(File, on_delete=models.CASCADE)
    
    class Meta:
        default_related_name = 'items'
    
    def __str__(self):
        return self.title
    
class Answer(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    viz = models.OneToOneField(Viz, on_delete=models.SET_NULL, null=True)
    
    class Meta:
        default_related_name = 'answers'
    
    def __str__(self):
        return self.title