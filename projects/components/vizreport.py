# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import Viz, Report
from project import settings
from django.shortcuts import render, redirect

# pp
import pp
from pp.log import logger

#python standard libraries
import os
from copy import *
import json

#non-standard libraries
import pandas as pd
import plotly.io as pio

class VizreportView(UnicornView):
    
    report: Report = None
    vizs: QuerySetType[Viz] = None
    vizs_html: list = []
    show_in_gallery = False
    public_access = False
    
#LOAD/UPDATE
    
    def mount(self):
        #logger.debug('VizView > mount start')
        self.load_vizs()
        #logger.debug('VizView > mount end')
    
    def load_vizs(self):
        #logger.debug('VizView > load_viz start')
        
        pk = None
        if hasattr(self.request, '_body'):
            b = json.loads(self.request._body)
            pk = b['data']['report']['pk']
        elif hasattr(self, 'kwargs'):
            pk = self.kwargs['pk']
        self.report = Report.objects.filter(pk=pk).all().prefetch_related('datasource__vizs').last()
        self.vizs = self.report.datasource.vizs.all()
        
        #if not self.report:
        #    self.report = Report.objects.filter(pk=self.kwargs['pk']).all().prefetch_related('datasource__vizs').last()
        #self.vizs = self.report.datasource.vizs.all()
        
        for v in self.vizs:
            #load csv from db
            copied_json = deepcopy(v.json)
            #copied_json[0]['options']['src'] = self.parent.datasource.databuffer
            copied_json[0]['options']['src'] = self.report.datasource.databuffer
            a = pp.App(copied_json)
            fig = a.call(return_df=False)[0]
            fig.update_layout(
                width=350, 
                height=250,
                autosize=True, 
                margin={
                    'l': 0,
                    't': 15,
                    'b': 68,
                    'r': 10,
                },
                showlegend=True,
                legend = {
                    'x': 1,
                    'xanchor': 'right',
                    'y': 1,
                    'bgcolor': '#000000',
                }
            )
            '''
            self.vizs_html.append(pio.to_html(
                fig=fig, 
                config={
                    'displayModeBar': False,
                    'scrollZoom': False,
                    'responsive': True,
                    'staticPlot': True,
                },
                full_html=False, 
                #default_width='100%',
                #default_height='100%',
                include_plotlyjs=False,
            ))
            '''
            j = json.loads(pio.to_json(fig=fig, engine='json'))
            self.vizs_html.append({
                'plot_data': json.dumps(j['data']),
                'plot_layout': json.dumps(j['layout']),
            })

        #logger.debug('VizView > load_viz end')
    
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
        if name == 'show_in_gallery' and value == False:
            self.public_access = False
        #logger.debug('DataframeView > updated end')
    
#ACTIONS

    def calling(self, name, args):
        #logger.debug('DataframeView > calling start')
        pass
        #logger.debug('DataframeView > calling end')
    
    def called(self, name, args):
        #logger.debug('DataframeView > called start')
        pass
        #logger.debug('DataframeView > called end')
    
    def complete(self):
        #logger.debug('DataframeView > complete start')
        pass
        #logger.debug('DataframeView > complete end')

#RENDER
    
    def vizData(self):
        return list(zip(self.vizs, self.vizs_html))
    
    def rendered(self, html):
        #logger.debug('DataframeView > rendered start')
        pass
        #logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('DataframeView > parent_rendered start')
        pass
        #logger.debug('DataframeView > parent_rendered end')