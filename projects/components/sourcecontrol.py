# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import File, Item
from project import settings
from django.shortcuts import render, redirect

# pp
import pp
from pp.log import logger

#python standard libraries
import os

#non-standard libraries
import pandas as pd

class SourcecontrolView(UnicornView):
    
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
        pass
        #logger.debug('DataframeView > updated end')
    
#ACTIONS

    def calling(self, name, args):
        #logger.debug('DataframeView > calling start')
        pass
        #logger.debug('DataframeView > calling end')
        
    def setFile(self, f):
        self.parent.setFile(f)
        return redirect('/projects/app')
    
    def called(self, name, args):
        #logger.debug('DataframeView > called start')
        pass
        #logger.debug('DataframeView > called end')
    
    def complete(self):
        #logger.debug('DataframeView > complete start')
        logger.debug('DataframeView > complete end')

#RENDER
    def files(self):
        return self.parent.files
    
    def rendered(self, html):
        #logger.debug('DataframeView > rendered start')
        logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('DataframeView > parent_rendered start')
        logger.debug('DataframeView > parent_rendered end')