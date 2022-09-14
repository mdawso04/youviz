# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import Project, Datasource, Viz, Report, Item, Answer

from django.core.files.base import ContentFile
from django.shortcuts import render, redirect
from project import settings
#from django.contrib import messages

# pp
import pp
from pp.log import logger

#python standard libraries
import os
import copy
from io import BufferedIOBase
from datetime import datetime

#non-standard libraries
#none

class AppView(UnicornView):
    project: Project = None
    datasources: QuerySetType[Datasource] = None
    #files = File.objects.none()
    datasource: Datasource = None
    vizs: QuerySetType[Viz] = None
    #vizs = Viz.objects.none()
    #selected_viz: Viz = None
    report: Report = None
    
    class Meta:
        javascript_exclude = ('project', 'datasources', 'datasource.document', 'vizs', 'report') 
    
#LOAD/UPDATE
    
    def mount(self):
        #logger.debug('AppView > mount start')
        self.load_table()
        #logger.debug(f'AppView mount. Children: {self.children}')
        #logger.debug('AppView > mount end')
        
    def load_table(self):
        if self.request:
            if self.request.user.is_authenticated:
                #logger.debug('AppView > load_table (user authenticated) start')
                if not self.project:
                    self.project = Project.objects.filter(user=self.request.user).last()
                    if not self.project:
                        self.addProject()
                self.datasources = (
                    Datasource.objects.filter(project=self.project, learner_mode=self.project.learner_mode)
                    .all().order_by('-id')
                    .prefetch_related('vizs', 'reports', 'items__answers')
                )
                if not self.datasources:
                    self.getRemoteData()
                if not self.datasource:
                    self.datasource = self.datasources.last()
                
                self.vizs = self.datasource.vizs.all()
                if not self.vizs:
                    self.addViz(call_redirect=False)
                    self.vizs = Viz.objects.filter(datasource=self.datasource).all().order_by('-id')
                '''
                if not self.selected_viz:
                    self.selected_viz = self.vizs.last()
                '''
                #self.report = Report.objects.filter(file=self.file).last()
                if hasattr(self.datasource, 'reports'):
                    self.report = self.datasource.reports.last()
                if not self.report:
                    self.addReport()
                #logger.debug('AppView > load_table (user authenticated) end')
                #print(self.__dict__)
            else:
                #logger.debug('AppView > load_table (user not authenticated) start')
                self.datasources = Datasource.objects.none()
                self.datasource = None
                self.vizs = Viz.objects.none()
                #logger.debug('AppView > load_table (user not authenticated) end')
    
    def hydrate(self):
        #logger.debug('AppView > hydrate start')
        pass
        #logger.debug('AppView > hydrate end')
        
    def updating(self, name, value):
        #logger.debug('AppView > updating start')
        pass
        #logger.debug('AppView > updating end')
    
    def updated(self, name, value):
        #logger.debug('AppView > updated start')
        pass
        #logger.debug('AppView > updated end')
        
#ACTIONS

    def calling(self, name, args):
        #logger.debug('AppView > calling start')
        pass
        #logger.debug('AppView > calling end')

    def addProject(self, description='NewProject'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        p = Project(description=description, user=self.request.user)
        self.project = p
        p.save()
        #logger.debug('AppView > addViz end')
        
    def setDatasource(self, f):
        self.datasource = self.datasources.get(pk=f)
        self.project.selected_datasource = f
        self.project.save()
        self.load_table()
        #return redirect('/projects/app')
                    
    def deleteDatasource(self, pk):
        # no files on disk so delete this
        #self.file.document.delete()
        self.datasource.delete()
        self.datasources = Datasource.objects.none()
        self.datasource = None
        self.vizs = Viz.objects.none()
        #Viz.objects.filter(file=self.file).all().delete()
        '''
        for child in self.children:
            if hasattr(child, "is_editing"):
                child.is_editing = False
        '''
        self.load_table()
        return redirect('/')
    
    def addViz(self, viz_type='NewViz', call_redirect=True):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        #read from db so patch this
        #filepath= os.path.join(str(settings.MEDIA_ROOT), str(self.file.document))
        a = pp.App()
        #a.add('READ_CSV', {'src': filepath})
        a.add('READ_CSV', {'src': self.datasource.pk})
        a.add('VIZ_HIST', {'x': 'Age'})
        json = a.todos
        v = Viz(datasource=self.datasource, name=viz_type, json=json)
        v.save()
        #self.load_table()
        if call_redirect:
            return redirect('/')
        #logger.debug('AppView > addViz end')
        
    def copyViz(self, pk):
        v = Viz.objects.get(pk=pk)
        v.pk = None
        v.save()
        self.load_table()
        return redirect('/')
        
    def deleteViz(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        v = Viz.objects.get(pk=pk)
        v.delete()
        self.load_table()
        return redirect('/')
    
    '''
    def selectViz(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        self.file.selected_viz = pk
        self.file.save()
    '''    
    
    '''
    def switch_learner_mode(self):
        self.project.learner_mode = not self.project.learner_mode
        self.project.save()
        #self.project.refresh_from_db()
        self.load_table()
        return redirect('/projects/app')
    '''
    
    def addReport(self, name='NewReport'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        r = Report(name=name, datasource=self.datasource)
        self.report = r
        r.save()
        #self.load_table()
        #logger.debug('AppView > addViz end')
        
    def refreshDatasource(self):
        #logger.debug('AppView > addViz start')
        a = pp.App(self.datasource.json)
        df = a.call()
        content = df.to_csv(index=False)
        self.datasource.document = content
        self.datasource.last_cached = datetime.utcnow()
        self.datasource.save()
        #self.load_table()
        #logger.debug('AppView > addViz end')
        
    def getRemoteData(self, service='READ_DATA_ATTRITION', name='no_name'):
        #logger.debug('AppView > addRemoteFile start')
        a = pp.App()
        a.add(service)
        df = a.call()
        content = df.to_csv(index=False)
        json = a.todos
        # no files on disk so delete
        #temp_file = ContentFile(content.encode('utf-8'))
        f = Datasource(name=name, description=service, project=self.project, 
                       json=json, document=content, learner_mode=self.project.learner_mode, last_cached = datetime.utcnow())
        #f.document.save(f'{service}.csv', temp_file)
        f.save()
        if self.project.learner_mode:
            i = Item(name='List up relevant fields', description='Analyze provided data, find fields that seem relevant to employee attrition', 
                     datasource=f)
            i.save()
        self.datasources = (
            Datasource.objects.filter(project=self.project, learner_mode=self.project.learner_mode)
            .all().order_by('-id')
            .prefetch_related('vizs', 'items__answers')
        )
        #logger.debug('AppView > addRemoteFile end')
        
    def called(self, name, args):
        #logger.debug('AppView > called start')
        pass
        #logger.debug('AppView > called end')
            
    def complete(self):
        #logger.debug('AppView > complete start')
        logger.debug('AppView > complete end')

#RENDER

    '''
    def remote_data(self):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    '''
       
    def selected_datasource_for_editing(self):
        '''Return shallow copy to prevent checksum error 
        when editing from different component '''
        return copy.copy(self.datasource)
    
    def rendered(self, html):
        #logger.debug('AppView > rendered start')
        pass
        #logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('AppView > parent_rendered start')
        pass
        #logger.debug('AppView > parent_rendered end')