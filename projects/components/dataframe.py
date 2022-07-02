# django/unicorn/project
from django_unicorn.components import UnicornView
from django import forms
from projects.models import File
from project import settings

# pp
import pp
from pp.log import logger

#python standard libraries
import os

#non-standard libraries
import pandas as pd
import plotly.express as px
import plotly.io as pio

class DataframeView(UnicornView):
    file: File = None
    datatable: dict = {}
    
#LOAD/UPDATE START
    
    def mount(self):
        #logger.debug('DataframeView > mount start')
        filepath= os.path.join(str(settings.MEDIA_ROOT), str(self.file.document))
        a = pp.App()
        a.add('READ_CSV', {'src': filepath})
        df = a.call(return_df=True)
        df = df[:200]
        self.datatable = df.to_dict(orient='tight')
        #logger.debug('DataframeView > mount end')
    
    def hydrate(self):
        pass
        #logger.debug('DataframeView > hydrate start')
        #logger.debug('DataframeView > hydrate end')
    
    def updating(self, name, value):
        pass
        #logger.debug('DataframeView > updating start')
        #logger.debug('DataframeView > updating end')
    
    def updated(self, name, value):
        #logger.debug('DataframeView > updated start')
        
        if name == 'file.description':
            self.file.save()
        #logger.debug('DataframeView > updated end')
    
#LOAD/UPDATE END    

#ACTIONS START

    def calling(self, name, args):
        pass
        #logger.debug('DataframeView > calling start')
        #logger.debug('DataframeView > calling end')
    
    def delete(self):
        self.parent.deleteFile(self.file.pk)
        return redirect('/projects/app')
        #pass
    
    def called(self, name, args):
        pass
        #logger.debug('DataframeView > called start')
        #logger.debug('DataframeView > called end')
    
#ACTIONS END

    def complete(self):
        #logger.debug('DataframeView > complete start')
        logger.debug('DataframeView > complete end')

#RENDER START
    def columns(self):
        return self.datatable['columns'] if self.datatable else None
    
    def records(self):
        return self.datatable['data'] if self.datatable else None

    def rendered(self, html):
        #logger.debug('DataframeView > rendered start')
        logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('DataframeView > parent_rendered start')
        logger.debug('DataframeView > parent_rendered end')
        
#RENDER END
