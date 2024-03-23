# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Viz
from django.shortcuts import render,redirect
from django.utils.functional import cached_property
from django.utils.decorators import classonlymethod

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
import shortuuid

'''
Patch for pp.App.data
'''
def data(self, todo=None):
    #todo
    todo = -1 if todo is None else todo
    td = self.todos[todo]
    #available
    available_options = self.options(td['service'], index=todo)
    #saved
    saved_options = td['options']

    all = {k: {'available': y, 'saved': saved_options.get(k)} for k, y in available_options.items()}
    all = {'options': all}
    all['name'] = td['name']
    all['service'] = {'available': self.services(), 'saved': td['service']}
    return all

pp.App.data = data

'''
End patch
'''

class VizView(UnicornView):
    viz: Viz = None
    viz_settings: dict = {}
    plot: str = None
    filters: list = []
    drawings: list = []
    #xxx: dict = {}
    
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
        pk = None
        if hasattr(self.request, '_body'):
            b = json.loads(self.request._body)
            pk = b['data']['viz']['pk']
            logger.debug('PK FROM BODY: ' + str(pk))
        elif hasattr(self, 'kwargs'):
            pk = self.kwargs['pk']
            logger.debug('PK FROM KWARGS: ' + str(pk))
        self.viz = Viz.objects.filter(pk=pk).all().prefetch_related('datasource').last()
        
        '''
        if hasattr(self.request, '_body'):
            b = json.loads(self.request._body)
            pretty = pprint.PrettyPrinter(depth=4)
            logger.debug(pretty.pprint(b))
            #pk = b.data.viz.pk
            #logger.debug('PK FROM BODY: ' + str(pk))
        '''
        
        #Load viz json, replace source id with source datastream, build app
        copied_json = deepcopy(self.viz.json)
        copied_json[0]['options']['src'] = self.viz.datasource.databuffer
        a = pp.App(copied_json)
        
        #extract data todos
        #self.filters = [td for td in a.todos if td['type']=='data']
        self.filters = []
        for count, td in enumerate(a.todos):
            if td['type']=='data':
                self.filters.append(a.data(todo=count))
        for f in self.filters:
            for i in f['options'].values():
                if i['saved'] is None:
                    i['saved'] = 'None'
        
        
        #extract viz todo and build settings cache
        #self.viz_settings = a.data(todo=1) #2nd item should be viz
        #self.viz_settings = a.data(todo=len(self.filters)+1)
        self.viz_settings = a.data()
        for v in self.viz_settings['options'].values():
            if v['saved'] is None:
                v['saved'] = 'None'
                
        #extract drawing todos
        #self.drawings = a.todos[2:]
        #self.xxx = a.options(service=a.todos[2]['service'], df=a.call())
        
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
            #self.call("elementUpdate", [[id, value], [id_copy, value_copy]])  
            #self.call("Handler.navigator_rename", [[id, value]])
            self.call("Handler.alert", [self.viz.pk, value])
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
        elif all(s in name for s in ['filters.', '.service.saved']):
            if value == 'None':
                value = None
            filter_index = int(name.split('.')[1])
            a.todos[filter_index + 1]['service'] = value
            #self.filters[0]['service'] = value
            new_service_params = list(a.options(value, df=pd.DataFrame()).keys())
            a.todos[filter_index + 1]['options'] = {k: v for k, v in a.todos[filter_index + 1]['options'].items() if k in new_service_params}
            #self.filters[0]['options'] = {k: v for k, v in a.todos[1]['options'].items() if k in new_service_params}
            #self.call("alert", json.dumps(self.filters[0]))
        elif all(s in name for s in ['filters.', '.options.', '.saved']):
            if value == 'None':
                value = None
            filter_index = int(name.split('.')[1])
            a.todos[filter_index + 1]['options'][name.split('.')[3]] = value
            #self.filters[0]['options'] = {k: v for k, v in a.todos[1]['options'].items() if k in new_service_params}
            #self.call("alert", json.dumps(a.todos[1]['options']))
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
        
    def addFilter(self, f):
        a = pp.App(self.viz.json)
        a.add(
            service="DATA_COL_FILTER",
            todoName=f,
            options={"criteria": 'HourlyRate < 50'},
            index=len(self.filters)+1
        )
        self.viz.json = a.todos
        self.viz.save()
        self.load_viz()
    
    def deleteFilter(self, f):
        a = pp.App(self.viz.json)
        
        del a.todos[1 + f] # Count from 2rd element
        
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
    
    #override patch to ensure unique ID when multiple instances of same UnicornView subclass
    @classonlymethod
    def as_view(cls, **initkwargs):
        def view(request, *args, **kwargs):
            initkwargs["component_id"] = shortuuid.uuid()[:8]
            
            module_name = cls.__module__
            module_parts = module_name.split(".")
            component_name = module_parts[len(module_parts) - 1]
            component_name = component_name.replace("_", "-")
                
            initkwargs["component_name"] = component_name
            
            self = cls(**initkwargs)
            #logger.debug(self)
            #logger.debug(initkwargs["component_id"])
            self.request = request
            self.args = args
            self.kwargs = kwargs
            
            # patch to feed context for template when viz fetched by GET from outside app
            self.mount()
            self.hydrate()

            self._cache_component(**kwargs)
            self.extra_context = kwargs
            return self.render_to_response(
                context=self.get_context_data(),
                component=self,
                init_js=True,
            )
            #endpatch
            
            #return self.dispatch(request, *args, **kwargs)
        return view