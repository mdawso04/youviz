# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Viz
from django.shortcuts import render,redirect
#from django.utils.functional import cached_property

# pp
import pp
from pp.log import logger

#python standard libraries
import os
import pprint

#non-standard libraries
import pandas as pd
#import plotly.express as px
import plotly.io as pio

class VizView(UnicornView):
    viz: Viz = None
    viz_settings: dict = {}
    
#LOAD/UPDATE

    def mount(self):
        #logger.debug('VizView > mount start')
        self.load_viz()
        #logger.debug('VizView > mount end')
    
    def load_viz(self):
        #logger.debug('VizView > load_viz start')
        a = pp.App(self.viz.json)
        self.viz_settings = a.data()
        for v in self.viz_settings['options'].values():
            if v['saved'] is None:
                v['saved'] = 'None'
        #logger.debug('VizView > load_viz end')
        
    def hydrate(self):
        #logger.debug('VizView > hydrate start')
        pass
        #logger.debug('VizView > hydrate end')
        
    def updating(self, name, value):
        pass
        
    def updated(self, name, value):
        #logger.debug('VizView > updated start')
        
        a = pp.App(self.viz.json)
        todo = a.todos[-1]
        if name == 'viz_settings.name':
            todo['name'] = value
            self.viz.json = a.todos
            self.viz.save()
        elif name == 'viz.title':
            #logger.debug('VizView > viz.title updated ("{}") start'.format(value))
            todo['name'] = value
            self.viz.json = a.todos
            self.viz.save()
            id = 'viz-' + str(self.viz.pk) + '-tab'
            self.call("elementUpdate", [id, value])    
        elif name == 'viz_settings.service.saved':
            todo['service'] = value
            # filter out unusable params
            new_service_params = list(a.options(value, df=pd.DataFrame()).keys())
            todo['options'] = {k: v for k, v in todo['options'].items() if k in new_service_params}
            self.load_viz()
            self.viz.json = a.todos
            self.viz.save()
        elif name.startswith('viz_settings.options'):
            if value == 'None':
                value = None
            todo['options'][name.split('.')[2]] = value
            self.viz.json = a.todos
            self.viz.save()
        #logger.debug('VizView > updated end')

#ACTIONS

    def calling(self, name, args):
        #logger.debug('VizView > calling start')
        pass
        #logger.debug('VizView > calling end')
        
    def caller(self, fun, params):
        self.call(fun, params)
        
    def delete(self):
        self.parent.deleteViz(self.viz.pk)
        return redirect('/projects/app')
        #pass
    
    def called(self, name, args):
        #logger.debug('VizView > called start')
        pass
        #logger.debug('VizView > called end')
    
    def complete(self):
        #logger.debug('VizView > complete start')
        pass
        #logger.debug('VizView > complete end')

#RENDER

    def plot(self):
        #logger.debug('VizView > plot start')
        a = pp.App(self.viz.json)
        #todo = a.todos[-1]
        fig = a.call(return_df=False)[0]
        fig.update_layout(width=None, height=None,autosize=True, margin={'l': 0})
        #logger.debug('VizView > plot end')
        return pio.to_json(fig=fig, engine='json')
    
    def plot_data(self):
        #logger.debug('VizView > plot_data start')
        import json
        p = self.plot()
        try:
            y = json.loads(p)
        except:
            print('JSON LOADS ERROR')
            #logger.debug('VizView > plot_data end')
            return None
        else:
            #logger.debug('VizView > plot_data end')
            return json.dumps(y['data'])
    
    def plot_layout(self):
        #logger.debug('VizView > plot_layout start')
        import json
        p = self.plot()
        try:
            y = json.loads(p)
            #logger.debug('VizView > plot_layout end')
        except:
            print('JSON LOADS ERROR')
            #logger.debug('VizView > plot_layout end')
            return None
        else:
            return json.dumps(y['layout'])

    def rendered(self, html):
        #logger.debug('VizView > rendered start')
        pass
        #logger.debug('VizView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('VizView > parent_rendered start')
        pass
        #logger.debug('VizView > parent_rendered end')