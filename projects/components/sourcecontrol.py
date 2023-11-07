# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Datasource, Item
from project import settings
from django.shortcuts import render, redirect
from django.urls import reverse

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
        
    def getRemoteData(self, service='READ_DATA_ATTRITION'):
        #logger.debug('AppView > addRemoteFile start')
        self.parent.getRemoteData(service)
        return redirect('/')
        #logger.debug('AppView > addRemoteFile end')
    
    def setDatasource(self, f):
        self.parent.setDatasource(f)
        return redirect(reverse('app', args=[f]))
    
    def called(self, name, args):
        #logger.debug('DataframeView > called start')
        pass
        #logger.debug('DataframeView > called end')
    
    def complete(self):
        #logger.debug('DataframeView > complete start')
        logger.debug('SourceControlView > complete end')

#RENDER
    def datasources(self):
        return self.parent.datasources
    
    def remote_data(self):
        #logger.debug('AppView > addViz start')
        #return self.parent.remote_data()
        return Datasource.remote_data()
        #logger.debug('AppView > addViz end')
    
    def rendered(self, html):
        pass
        #logger.debug('DataframeView > rendered start')
        #logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        pass
        #logger.debug('DataframeView > parent_rendered start')
        #logger.debug('DataframeView > parent_rendered end')