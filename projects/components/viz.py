# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Viz
from django.shortcuts import render,redirect
from django.utils.functional import cached_property
from django.utils.decorators import classonlymethod
from django.core.exceptions import ValidationError
from django.http import Http404

from django.urls import reverse
from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.auth.decorators import user_passes_test

# pp
import pp
from pp.log import logger

#python standard libraries
import os
import pprint
from copy import *
import json
from types import SimpleNamespace

#non-standard libraries
import pandas as pd
#import plotly.express as px
import plotly.io as pio
import shortuuid

class VizView(UnicornView):
    
    viz: Viz = None
    cache: dict = {}
    
    class Meta:
        exclude = ()
        
#LOAD/UPDATE

    def mount(self):
        self.load_viz()
        
    def load_viz(self):
        #logger.debug('VizView > load_viz start')
        
        pk = None
        current_user = self.request.user
        
        #unicorn
        if hasattr(self.request, '_body'):
            b = json.loads(self.request._body)
            pk = b['data']['viz']['pk']
            logger.debug('PK FROM BODY: ' + str(pk))
        
        #GET
        elif hasattr(self, 'kwargs'):
            pk = self.kwargs['pk']
            logger.debug('PK FROM KWARGS: ' + str(pk))
        
        v = Viz.item(pk=pk)
        
        #obj perms
        if v.is_published:
            if not current_user.has_perm('view_published_viz', v):
                redirect('/')
        else:
            if not current_user.has_perm('view_viz', v):
                redirect('/')
        
        self.viz = v
        
        #self.viz.can_view_or_404(self.request.user)
        #if not self.request.user.has_perm('projects.view_viz', self.viz):
        #    raise Http404
        
        self.cache = self.viz.viz_cache
        #print(self.cache['viz']['options']['saved'])
        #print(self.cache['viz']['layout']['saved'])
        
        #logger.debug('VizView > load_viz end')
        
    def hydrate(self):
        #logger.debug('VizView > hydrate start')
        pass
        #logger.debug('VizView > hydrate end')
    
    def updating(self, name, value):
        if not self.request.user.has_perm('change_datasource', self.viz.datasource):
            raise Http404
        
    def updated(self, name, value):
        #logger.debug('VizView > updated start')
        
        a = pp.App(self.viz.json)
        if name == 'viz.name':
            self.viz.name = value
            a.todos[-1]['name'] = value
            
        elif name == 'viz.description':
            self.viz.name = value
            a.todos[-1]['name'] = value
        
        elif name.startswith('cache.viz'):
            if value == 'None':
                value = None
            elif value == 'True':
                value = True
            elif value == 'False':
                value = False
                
                
            n = name.split('.')
            property_group = n[2]
            property_item = n[4] if len(n) > 4 else None
                
            def update_nested(dic, tok, val):
                '''
                Iterate to bottom of dict, update property
                '''
                t = tok.split('-', 1)
                if len(t) == 1:
                    dic[t[0]] = val
                else:
                    if not t[0] in dic:
                        dic[t[0]] = {}
                    update_nested(dic[t[0]], t[1], val)
            
            if not property_group in a.todos[-1]: 
                a.todos[-1][property_group] = {}
            
            #update property
            if value == 'Auto':
                if property_item:
                    #if hasattr(a.todos[-1][property_group], property_item):
                    if property_item in a.todos[-1][property_group]:
                        del a.todos[-1][property_group][property_item]
                else:
                    #if hasattr(a.todos[-1], property_group):
                    del a.todos[-1][property_group]
            else:
                if property_item:
                    update_nested(a.todos[-1][property_group], property_item, value)
                else:
                    a.todos[-1][property_group] = value
            
        elif name.startswith('cache.data'):
            if value == 'None':
                value = None
            elif value == 'True':
                value = True
            elif value == 'False':
                value = False
                
            def update_nested(dic, tok, val):
                '''Iterate to bottom of dict, update property'''
                t = tok.split('-', 1)
                if len(t) == 1:
                    dic[t[0]] = val
                else:
                    update_nested(dic[t[0]], t[1], val)
                
            name_tokens = name.split('.')
            has_property_items = True if len(name_tokens) == 6 else False
            
            cache_todo_index = int(name_tokens[2])
            property_group = name_tokens[3]
            if has_property_items:
                property_item = name_tokens[5]
                update_nested(a.todos[cache_todo_index + 1][property_group], property_item, value)
            else:
                a.todos[cache_todo_index + 1][property_group] = value
                
        
        '''
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
        '''
        self.viz.json = a.todos
        self.viz.save()
        self.load_viz()
        #logger.debug('VizView > updated end')

#ACTIONS

    def calling(self, name, args):
        if not self.request.user.has_perm('change_datasource', self.viz.datasource):
            raise Http404
        
    def caller(self, fun, params):
        self.call(fun, params)
        
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
            service="DATA_COL_ADD_INDEX_FROM_0",
            todoName=f,
            options={},
            index=len(self.cache['data'])+1
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
        
    '''
    def applyUpdate(self):
        if name.startswith('cache.data.0.options.saved.criteria'):
            raise ValidationError({'cache.data.0.options.saved.criteria': 'This field is required'}, code='required')
    '''
    
    def called(self, name, args):
        #logger.debug('VizView > called start')
        pass
        #logger.debug('VizView > called end')
    
    def complete(self):
        #logger.debug('VizView > complete start')
        logger.debug('VizView > complete end')

#RENDER

    '''
    def todot(self, dic={}):
        jstr = json.dumps(dic)
        return json.loads(jstr, object_hook= lambda x: SimpleNamespace(**x))
    
    def todic(obj: Any) -> Any:
        if hasattr(obj, "__dict__"):
            return dict([(k, convert_to_serializable(v)) for k, v in vars(obj).items()])
        if isinstance(obj, list):
            return [convert_to_serializable(el) for el in obj]
        return obj  # Default for primitive types
    
    def prepare_dict_for_cache(d: dict) -> dict:
        for key, value in d.items():
            if isinstance(value, dict):
                return {k: v for k, v in value}
            elif isinstance(v, list):
                return [prepare_dict_for_cache(i) for i in ]
                '''

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
        pass
        '''
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
        '''
    
    def plot_layout(self):
        #logger.debug('VizView > plot_layout start')
        pass
        '''
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
        '''
        
    def rendered(self, html):
        #logger.debug('VizView > rendered start')
        if self.viz:
            self.viz.delete_cached_properties()
        #logger.debug('VizView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('VizView > parent_rendered start')
        if self.viz:
            del self.viz
        if self.cache:
            del self.cache
        #logger.debug('VizView > parent_rendered end')
    
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