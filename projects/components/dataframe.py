from django_unicorn.components import UnicornView
from django import forms

#from django.conf import settings

import pandas as pd
import plotly.express as px
import plotly.io as pio
import os

class DataframeView(UnicornView):
    #form_class = HelloWorldForm
    #model = xxx
    
    datatable: dict = {}
    
    def sort(self, col):
        #self.df.sort_values(by=['col_1'])
        #print(col)
        #print(type(self.data))
        df = self.df().sort_values(by=[col])
        self.toData(df)
        
    def df(self):
        return pd.DataFrame.from_dict(self.datatable, orient='tight') if self.datatable else None
    
    def toData(self, df):
        self.datatable = df.to_dict(orient='tight')
        
    def columns(self):
        return self.datatable['columns'] if self.datatable else None
    
    def records(self):
        return self.datatable['data'] if self.datatable else None
    
    def setData(self, data):
        print('df setData')
        self.datatable = data
        print(self.datatable)
    
    '''
    def data(self):
        print('df data')
        return self.datatable
    '''
    def mount(self):
        print('df mount')
        #self.call('testFunction', 'dataframe mount')
    
    def hydrate(self):
        print('df hydrate')
        #self.call('testFunction', 'dataframe hydrate')
    
    def updating(self, name, value):
        print('df updating ' + name)
    
    def updated(self, name, value):
        print('df updated ' + name)
    
    def calling(self, name, args):
        print('df calling ' + name)
    
    def called(self, name, args):
        print('df called ' + name)
    
    def complete(self):
        print('df complete')
        #self.call('btr')

    def rendered(self, html):
        #self.call('btr')
        print('df rendered')
        print(self.datatable)
   
    def parent_rendered(self, html):
        print('df parent_rendered')
        #self.call('testFunction', 'dataframe parent_rendered') 