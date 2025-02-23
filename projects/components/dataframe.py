# django/unicorn/project
from django_unicorn.components import UnicornView
from projects.models import Datasource
from projects.util import get_perms_and_settings
from project import settings
from django.shortcuts import render, redirect
from django.utils.decorators import classonlymethod
from django.http import Http404


# pp
import pp
from pp.log import logger

#python standard libraries
import os
import json

#non-standard libraries
import pandas as pd
import shortuuid

class DataframeView(UnicornView):
    datasource: Datasource = None
    context: dict = None
    settings: dict = None 
    app_perms: list = None
    
    class Meta:
        javascript_exclude = ('datasource', 'context', 'settings', 'app_perms', ) 
    
#LOAD/UPDATE
    
    def mount(self):
        #logger.debug('DataframeView > mount start')
        self.load_table()
        #logger.debug('DataframeView > mount end')
        
    def load_table(self):
        #if not self.datasource:
        pk = None
        if hasattr(self.request, '_body'):
            b = json.loads(self.request._body)
            pk = b['data']['dataframe']['pk']
        elif hasattr(self, 'kwargs'):
            pk = self.kwargs['pk']
            self.context = self.kwargs['context']['context']
        #self.datasource = Datasource.objects.filter(pk=pk).last()
        
        ds = Datasource.item(pk=pk)
        
        mode = self.context['mode']
        query = self.context['query'] if 'query' in self.context else None
        page = self.context['page'] if 'page' in self.context else None
        search = self.context['search'] if 'search' in self.context else None
        current_user = self.request.user
        
        self.app_perms, self.settings = get_perms_and_settings(request=self.request, context=self.context, objs=(ds,))
        
        #obj perms
        if ds.is_published:
            if not 'view_published_datasource' in self.app_perms:
                raise Http404
        else:
            if not 'view_datasource' in self.app_perms:
                raise Http404
        
        self.datasource = ds
        #logger.debug('df pk:' + str(pk))
    
    def hydrate(self):
        #logger.debug('DataframeView > hydrate start')
        pass
        #logger.debug('DataframeView > hydrate end')
    
    def updating(self, name, value):
        #logger.debug('DataframeView > updating start')
        if not self.datasource.can_change(self.request.user):
            raise Http404('No such object available for this user.')
        #logger.debug('DataframeView > updating end')
    
    def updated(self, name, value):
        #logger.debug('DataframeView > updated start')
        if name == 'datasource.description':
            self.datasource.save()
            #self.parent.file.save()
        #logger.debug('DataframeView > updated end')
    
#ACTIONS

    def calling(self, name, args):
        #logger.debug('DataframeView > calling start')
        pass
        #logger.debug('DataframeView > calling end')
    
    
    def delete(self):
        self.parent.deleteDatasource(self.datasource.pk)
        return redirect('/')
        
    def called(self, name, args):
        #logger.debug('DataframeView > called start')
        pass
        #logger.debug('DataframeView > called end')
    
    def complete(self):
        #logger.debug('DataframeView > complete start')
        logger.debug('DataframeView > complete end')

#RENDER
    def rendered(self, html):
        if self.datasource:
            self.datasource.delete_cached_properties()
        #logger.debug('DataframeView > rendered start')
        #logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        if self.datasource:
            del self.datasource
        #logger.debug('DataframeView > parent_rendered start')
        #logger.debug('DataframeView > parent_rendered end')
        
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
        