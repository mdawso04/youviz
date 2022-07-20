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

class GetmoreView(UnicornView):
    
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
        a = pp.App()
        a.add(service)
        df = a.call()
        content = df.to_csv(index=False)
        # no files on disk so delete
        #temp_file = ContentFile(content.encode('utf-8'))
        f = File(description=f'{service}.csv', project=self.parent.project, document=content, learner_mode=self.parent.project.learner_mode)
        #f.document.save(f'{service}.csv', temp_file)
        f.save()
        
        if self.parent.project.learner_mode:
            i = Item(title='List up relevant fields', description='Analyze provided data, find fields that seem relevant to employee attrition', 
                     mission=f)
            i.save()
        self.parent.file = f
        self.parent.load_table()
        return redirect('/projects/app')
        #logger.debug('AppView > addRemoteFile end')
    
    def called(self, name, args):
        #logger.debug('DataframeView > called start')
        pass
        #logger.debug('DataframeView > called end')
    
    def complete(self):
        #logger.debug('DataframeView > complete start')
        logger.debug('DataframeView > complete end')

#RENDER
    def remote_data(self):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    
    def rendered(self, html):
        #logger.debug('DataframeView > rendered start')
        logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('DataframeView > parent_rendered start')
        logger.debug('DataframeView > parent_rendered end')