from django_unicorn.components import UnicornView
from django import forms
import pp

from projects.models import Viz

#from django.conf import settings

import pandas as pd
import plotly.express as px
import plotly.io as pio
import os

TYPES = []
TYPE_HISTOGRAM = 'histogram'
TYPE_SCATTER = 'scatter'
TYPES.extend([
    TYPE_HISTOGRAM,
    TYPE_SCATTER,
])

PARAMS_HISTOGRAM = {
    'x': None,
    'color':None,  
}

PARAMS_SCATTER = {
    'x': None,
    'Y': None,
    'color':None,  
}

PARAMS = {
    TYPE_HISTOGRAM: PARAMS_HISTOGRAM,
    TYPE_SCATTER: PARAMS_SCATTER
}

class VizView(UnicornView):
    #form_class = HelloWorldForm
    #model = xxx
    
    #parent = None
    #vizid = None
    datatable: dict = {}
    viz: Viz = None
    viz_settings: dict = {}
    '''
    viz_types = [
        'Histogram',
        'Scatter',
        'Line',
        'Tree',
        'Hist list'
    ]
    
    viz_params = {
        'Histogram': {
            'x': None,
            'color':None,  
        },
        'Scatter': {
            'x': None,
            'y': None,
            'color': None,
            'size': None,
        },
    }
    '''
    def mount(self):
        #print('app mount')
        self.load_viz()
        #self.call('testAppFunction', 'app mount')
    
    def load_viz(self):
        print('viz load viz')
        a = pp.App(self.viz.json)
        self.viz_settings = a.data()
        for v in self.viz_settings['options'].values():
            if v['saved'] is None:
                v['saved'] = 'None'
    
    def df(self):
        return pd.DataFrame.from_dict(self.datatable, orient='tight') if self.datatable else None
    
    def toData(self, df):
        self.datatable = df.to_dict(orient='tight')
        
    def sort(self, col):
        #self.df.sort_values(by=['col_1'])
        #print(col)
        #print(type(self.data))
        df = self.df().sort_values(by=[col])
        self.toData(df)
    
    def columns(self):
        return self.datatable['columns'] if self.datatable else None
    
    def records(self):
        return self.datatable['data'] if self.datatable else None 
    
    '''
    def optionx(self):
        #print('XXXXXXXXXXXX')
        a = pp.App(self.viz.json)
        todo = a.todos[-1]
        service = todo['settings']['service']
        return a.options(service)
    
    def cur_selection(self):
        #a = pp.App(self.viz.json)
        #todo = a.todos[-1]
        #return todo['settings']['options']
        return self.viz.json[-1]['settings']['options']
    
    def update_selection(self, k, v):
        a = pp.App(self.viz.json)
        todo = a.todos[-1]
        todo['settings']['options'][k] = v
        self.viz.json = a.todos
        self.viz.save()
    '''
    def plot(self):
        print('viz plot')
        #print(self.json)
        #df = self.df()
        #if df is not None: 
        #    fig = px.histogram(self.df(), x='Attrition', color='Department')
        #    return pio.to_html(fig=fig, full_html=False, include_plotlyjs='cdn', include_mathjax=False)
        #else:
        #    return None
        #print(self.viz.json)
        '''
        x = self.viz.json['x'] if self.viz.json['x'] else self.columns()[0]
        y = self.viz.json['y'] if self.viz.json['y'] else self.columns()[0]
        color = self.viz.json['color'] if self.viz.json['color'] else self.columns()[0]
        
        if self.viz.json['viz_type'] == 'Histogram':
            #fig = px.histogram(self.df(), x=x, color=color)
            fig = pp.VIZ_HIST(self.df(), x=x, color=color)
            fig.update_layout(width=None, height=None,autosize=True, margin={'l': 0})
        elif self.viz.json['viz_type'] == 'Scatter':
            #fig = px.scatter(self.df(), x=x, y=y, color=color)
            fig = pp.VIZ_SCATTER(self.df(), x=x, color=color)
            fig.update_layout(width=None, height=None,autosize=True, margin={'l': 0})
        else:
            return 'Sorry, this is a ' + self.viz.json['viz_type']
        print('viz plot end')
        #print(fig)
        #return pio.to_html(fig=fig, full_html=False, include_plotlyjs='cdn', include_mathjax=False)
        
        #fig = pio.from_json(self.viz.json)
        #print('\n\n' +self.viz.json)
        #return pio.to_html(fig=fig, full_html=False, include_plotlyjs='cdn', include_mathjax=False)
        '''
        a = pp.App(self.viz.json)
        #todo = a.todos[-1]
        print('***********')
        fig = a.call(return_df=False)[0]
        fig.update_layout(width=None, height=None,autosize=True, margin={'l': 0})
        return pio.to_json(fig=fig, engine='json')
    
    def plot_data(self):
        import json
        p = self.plot()
        #print('plot data')
        #print(p)
        try:
            y = json.loads(p)
        except:
            print('JSON LOADS ERROR')
            return None
        else:
            return json.dumps(y['data'])
    
    def plot_layout(self):
        import json
        p = self.plot()
        try:
            y = json.loads(p)
        except:
            print('JSON LOADS ERROR')
            return None
        else:
            return json.dumps(y['layout'])
    
    # LIFECYCLE 
    def hydrate(self):
        pass
        #print('viz hydrate')
        #self.call('testAppFunction', 'app hydrate')
        
    def updating(self, name, value):
        pass
        #print('viz updating ' + name)
    
    def updated(self, name, value):
        print('****viz updated****' + name)
        
        a = pp.App(self.viz.json)
        todo = a.todos[-1]
        if name == 'viz_settings.name':
                todo['name'] = value
        elif name == 'viz_settings.service.saved':
                todo['service'] = value
                # filter out unusable params
                new_service_params = list(a.options(value, df=pd.DataFrame()).keys())
                todo['options'] = {k: v for k, v in todo['options'].items() if k in new_service_params}
                print('XXXXXX')
                print(todo['options'])
                self.load_viz()
        elif name.startswith('viz_settings.options'):
            if value == 'None':
                value = None
            todo['options'][name.split('.')[2]] = value
            #new_service_params = list(a.options(todo['service']).keys())
            #todo['options'] = {k: v['saved'] for k, v in self.viz_settings['options'].items() if k in new_service_params}
        self.viz.json = a.todos
        self.viz.save()
    
    def calling(self, name, args):
        pass
        #print('viz calling ' + name)
    
    def called(self, name, args):
        pass
        #print('viz called ' + name)
    
    def complete(self):
        pass
        #print('viz complete')
        #self.call('testAppFunction', 'app complete')
    
    def rendered(self, html):
        pass
        #print('viz rendered')
        #self.children = list(set(self.children))
        #print('app rendered')
        #print('app self.data:')
        #print(self.data)
        '''
        print('viz self')
        print(self)
        print('viz children:')
        print(self.children)
        '''
        '''
        for child in self.children:
            if hasattr(child, "datatable"):
                print('child.datatable:')
                print(child.datatable)
        '''
        #self.call('dropdownReload')
    
    def parent_rendered(self, html):
        pass
        #print('viz rendered')
        #self.call('testAppFunction', 'app parent_rendered')    
    
    
    
    
    
