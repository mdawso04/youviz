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
StringIO

#non-standard libraries
import pandas as pd

# Create your models here.
class Project(models.Model):
    description = models.CharField(max_length=255, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    selected_file = models.IntegerField(null=True, blank=True)
    learner_mode = models.BooleanField(default=False)
    
    def __str__(self):
        return self.description

class File(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    #document = models.FileField(upload_to='files/')
    document = models.TextField()
    uploaded_at = models.DateTimeField(auto_now_add=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, default=1)
    selected_viz = models.IntegerField(null=True, blank=True)
    learner_mode = models.BooleanField(default=False)
    
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
    
class Viz(models.Model):
    title = models.CharField(max_length=100, blank=True)
    comment = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    file = models.ForeignKey(File, on_delete=models.CASCADE, default=1)
    json = models.JSONField(blank=True, null=True)
    
    def __str__(self):
        return self.title + ": " +self.comment
    
class Report(models.Model):
    title = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    file = models.ForeignKey(File, on_delete=models.CASCADE, default=1)
    report = models.TextField()
    
    def __str__(self):
        return self.title

class Item(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    mission = models.ForeignKey(File, on_delete=models.CASCADE, default=1)
    viz = models.ForeignKey(Viz, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return self.title
