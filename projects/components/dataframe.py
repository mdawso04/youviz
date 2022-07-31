# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import File
from project import settings
from django.shortcuts import render, redirect

# pp
import pp
from pp.log import logger

#python standard libraries
import os

#non-standard libraries
import pandas as pd

class DataframeView(UnicornView):
    file: File = None
    
    class Meta:
        javascript_exclude = ('file', ) 
    
#LOAD/UPDATE
    
    def mount(self):
        #logger.debug('DataframeView > mount start')
        pass
        #logger.debug('DataframeView > mount end')
    
    def hydrate(self):
        #logger.debug('DataframeView > hydrate start')
        pass
        #logger.debug('DataframeView > hydrate end')
    
    def updating(self, name, value):
        #logger.debug('DataframeView > updating start')
        pass
        #logger.debug('DataframeView > updating end')
    
    def updated(self, name, value):
        #logger.debug('DataframeView > updated start')
        if name == 'file.description':
            self.file.save()
            #self.parent.file.save()
        #logger.debug('DataframeView > updated end')
    
#ACTIONS

    def calling(self, name, args):
        #logger.debug('DataframeView > calling start')
        pass
        #logger.debug('DataframeView > calling end')
    
    
    def delete(self):
        self.parent.deleteFile(self.file.pk)
        return redirect('/projects/app')
        
    def called(self, name, args):
        #logger.debug('DataframeView > called start')
        pass
        #logger.debug('DataframeView > called end')
    
    def complete(self):
        #logger.debug('DataframeView > complete start')
        logger.debug('DataframeView > complete end')

#RENDER
    def rendered(self, html):
        pass
        #logger.debug('DataframeView > rendered start')
        #logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        pass
        #logger.debug('DataframeView > parent_rendered start')
        #logger.debug('DataframeView > parent_rendered end')