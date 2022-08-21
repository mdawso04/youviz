# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import Viz
from project import settings
from django.shortcuts import render, redirect

# pp
import pp
from pp.log import logger

#python standard libraries
import os
from copy import *

#non-standard libraries
import pandas as pd
import plotly.io as pio

class VizreportView(UnicornView):
    
    vizs: QuerySetType[Viz] = None
    vizs_html: list = []
    
#LOAD/UPDATE
    
    def mount(self):
        #logger.debug('VizView > mount start')
        self.load_vizs()
        #logger.debug('VizView > mount end')
    
    def load_vizs(self):
        #logger.debug('VizView > load_viz start')
        
        for v in self.vizs:
            #load csv from db
            copied_json = deepcopy(v.json)
            copied_json[0]['options']['src'] = self.parent.file.databuffer
            a = pp.App(copied_json)
            fig = a.call(return_df=False)[0]
            fig.update_layout(
                height=370,
                width=300,
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
            self.vizs_html.append(pio.to_html(fig=fig))

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
        pass
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
    def rendered(self, html):
        #logger.debug('DataframeView > rendered start')
        pass
        #logger.debug('DataframeView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('DataframeView > parent_rendered start')
        pass
        #logger.debug('DataframeView > parent_rendered end')