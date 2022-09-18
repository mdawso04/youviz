# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Viz
from django.shortcuts import render,redirect
from django.utils.functional import cached_property

# pp
import pp
from pp.log import logger

#python standard libraries
import os
import pprint
from copy import *
import json

#non-standard libraries
import pandas as pd
#import plotly.express as px
import plotly.io as pio

class VizView(UnicornView):
    viz: Viz = None
    viz_settings: dict = {}
    plot: str = None
    drawings: list = []
    
    class Meta:
        exclude = ('plot', )
    
#LOAD/UPDATE

    def mount(self):
        #logger.debug('VizView > mount start')
        self.load_viz()
        #logger.debug('VizView > mount end')
    
    def load_viz(self):
        #logger.debug('VizView > load_viz start')
        #import pprint
        
        
        if not self.viz:
            pk = None
            if hasattr(self.request, '_body'):
                b = json.loads(self.request._body)
                pk = b.data.viz.pk
                logger.debug('PK FROM BODY: ' + str(pk))
            elif hasattr(self, 'kwargs'):
                pk = self.kwargs['pk']
                logger.debug('PK FROM KWARGS: ' + str(pk))
            self.viz = Viz.objects.filter(pk=pk).all().prefetch_related('datasource').last()
        
        if hasattr(self.request, '_body'):
            b = json.loads(self.request._body)
            pretty = pprint.PrettyPrinter(depth=4)
            logger.debug(pretty.pprint(b))
            #pk = b.data.viz.pk
            #logger.debug('PK FROM BODY: ' + str(pk))
        
        
        #load csv from db
        copied_json = deepcopy(self.viz.json)
        copied_json[0]['options']['src'] = self.viz.datasource.databuffer
        a = pp.App(copied_json)
        
        #build viz options cache for current state
        self.viz_settings = a.data(todo=1) #2nd item should be viz
        for v in self.viz_settings['options'].values():
            if v['saved'] is None:
                v['saved'] = 'None'
                
        #build drawing list for current state
        self.drawings = a.todos[2:]
        
        #build viz (including drawings) for current state
        fig = a.call(return_df=False)[0]
        fig.update_layout(width=None, height=None,autosize=True, margin={'l': 0})
        self.plot = pio.to_json(fig=fig, engine='json')

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
        #todo = a.todos[-1]
        if name == 'viz_settings.name':
            #todo['name'] = value
            #self.viz.json = a.todos
            #self.viz.json[1]['name'] = value
            a.todos[1]['name'] = value
            #self.viz.save()
        elif name == 'viz.name':
            #logger.debug('VizView > viz.title updated ("{}") start'.format(value))
            #todo['name'] = value
            #self.viz.json = a.todos
            #self.viz.json[1]['name'] = value
            #self.viz.save()
            a.todos[1]['name'] = value
            # call javascript to update related gui elements
            id = 'viz-' + str(self.viz.pk) + '-tab'
            id_copy = id + '-copy'
            value_copy = 'Copy ' + value
            self.call("elementUpdate", [[id, value], [id_copy, value_copy]])    
        elif name == 'viz_settings.service.saved':
            #todo['service'] = value
            #self.viz.json[1]['service'] = value
            a.todos[1]['service'] = value
            # filter out unusable params
            new_service_params = list(a.options(value, df=pd.DataFrame()).keys())
            a.todos[1]['options'] = {k: v for k, v in a.todos[1]['options'].items() if k in new_service_params}
            #self.viz.json[1]['options'] = {k: v for k, v in self.viz.json[1]['options'].items() if k in new_service_params}
            #self.load_viz()
            #self.viz.json = a.todos
            #self.viz.save()
        elif name.startswith('viz_settings.options'):
            if value == 'None':
                value = None
            #todo['options'][name.split('.')[2]] = value
            a.todos[1]['options'][name.split('.')[2]] = value
            #self.viz.json = a.todos
            #self.viz.save()
        elif name.startswith('drawings'):
            if value == 'None':
                value = None
            todo_index = int(name.split('.')[1]) + 2
            key = name.split('.')[2]
            if key == 'x':
                if value is not None:
                    value = int(value)
            a.todos[todo_index]['options'][key] = value
            #self.viz.json = a.todos
            #self.viz.save()
        self.viz.json = a.todos
        self.viz.save()
        self.load_viz()
        #logger.debug('VizView > updated end')

#ACTIONS

    def calling(self, name, args):
        #logger.debug('VizView > calling start')
        pass
        #logger.debug('VizView > calling end')
        
    def caller(self, fun, params):
        self.call(fun, params)
        
    def delete(self):
        #self.parent.deleteViz(self.viz.pk)
        #return redirect('/projects/app')
        pass
    
    def deleteDrawing(self, d):
        a = pp.App(self.viz.json)
        del a.todos[d + 2] # Count from 3rd element
        self.viz.json = a.todos
        self.viz.save()
        self.load_viz()
        
    def addDrawing(self, d):
        a = pp.App(self.viz.json)
        a.todos.append(
            {"name": d, "type": "draw", "service": "DRAW_VLINE", "options": {"x": 30, 'line_color': 'red'}}
        )
        self.viz.json = a.todos
        self.viz.save()
        self.load_viz()
    
    def called(self, name, args):
        #logger.debug('VizView > called start')
        pass
        #logger.debug('VizView > called end')
    
    def complete(self):
        #logger.debug('VizView > complete start')
        logger.debug('VizView > complete end')

#RENDER


    '''
    def plot(self):
        #logger.debug('VizView > plot start')
        pass
        
        a = pp.App(self.viz.json)
        #todo = a.todos[-1]
        fig = a.call(return_df=False)[0]
        fig.update_layout(width=None, height=None,autosize=True, margin={'l': 0})
        #logger.debug('VizView > plot end')
        return pio.to_json(fig=fig, engine='json')
        '''
    
    def plot_data(self):
        #logger.debug('VizView > plot_data start')
        import json
        #p = self.plot()
        try:
            y = json.loads(self.plot)
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
        #p = self.plot()
        try:
            y = json.loads(self.plot)
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