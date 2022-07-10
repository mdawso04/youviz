from django.db import models
from django.contrib.auth.models import User
from django.utils.functional import cached_property

from project import settings

# pp
import pp
from pp.log import logger

#python standard libraries
import os

#non-standard libraries
import pandas as pd

# Create your models here.
class Project(models.Model):
    description = models.CharField(max_length=255, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    selected_file = models.IntegerField(null=True, blank=True)
    
    def __str__(self):
        return self.description

class File(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, default=1)
    selected_viz = models.IntegerField(null=True, blank=True)
    
    def __str__(self):
        return self.description
    
    @cached_property
    def datatable(self):
        if self.document:
            filepath = os.path.join(str(settings.MEDIA_ROOT), str(self.document))
            a = pp.App()
            a.add('READ_CSV', {'src': filepath})
            df = a.call(return_df=True)
            return df[:200].to_dict(orient='tight')
        
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
