# django/unicorn/project
from django_unicorn.components import QuerySetType, UnicornView
from projects.models import Project, File, Viz, Report, Item

from django.core.files.base import ContentFile
from django.shortcuts import render,redirect
from project import settings
#from django.contrib import messages

# pp
import pp
from pp.log import logger

#python standard libraries
import os

#non-standard libraries
#none

class AppView(UnicornView):
    project: Project = None
    files = File.objects.none()
    file: File = None
    #items = Item.objects.none()
    #editing_file = False
    #datatable: dict = {}
    vizs = Viz.objects.none()
    selected_viz: Viz = None
    report: Report = None
    
    class Meta:
        javascript_exclude = ('project', 'files', 'file.document', 'vizs', 'selected_viz', 'report') 
    
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
                self.project = Project.objects.filter(user=self.request.user).last()
                if not self.project:
                    self.addProject()
                self.files = File.objects.filter(project=self.project, learner_mode=self.project.learner_mode).all().order_by('-id')
                if not self.files:
                    self.getRemoteData()
                self.file = self.files.last()
                #if self.file.learner_mode:
                #    self.items = Item.objects.filter(mission=self.file).all().order_by('-id')
                #else:
                #    self.items = Item.objects.none()
                self.vizs = Viz.objects.filter(file=self.file).all().order_by('-id')
                if not self.vizs:
                    self.addViz()
                if not self.selected_viz:
                    self.selected_viz = self.vizs.last()
                self.report = Report.objects.filter(file=self.file).last()
                if not self.report:
                    self.addReport()
                #logger.debug('AppView > load_table (user authenticated) end')
            else:
                #logger.debug('AppView > load_table (user not authenticated) start')
                self.files = File.objects.none()
                self.file = None
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
        p.save()
        self.load_table()
        #logger.debug('AppView > addViz end')
        
    def setFile(self, f):
        self.file = self.files.get(pk=f)
        self.project.selected_file = f
        self.project.save()
        self.load_table()
        #return redirect('/projects/app')
        
    def deleteFile(self, pk):
        # no files on disk so delete this
        #self.file.document.delete()
        self.file.delete()
        self.files = File.objects.none()
        self.file = None
        self.vizs = Viz.objects.none()
        #Viz.objects.filter(file=self.file).all().delete()
        '''
        for child in self.children:
            if hasattr(child, "is_editing"):
                child.is_editing = False
        '''
        self.load_table()
        return redirect('/projects/app')
    
    def addViz(self, viz_type='NewViz'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        #read from db so patch this
        #filepath= os.path.join(str(settings.MEDIA_ROOT), str(self.file.document))
        a = pp.App()
        #a.add('READ_CSV', {'src': filepath})
        a.add('READ_CSV', {'src': self.file.pk})
        a.add('VIZ_HIST', {'x': 'Age'})
        json = a.todos
        v = Viz(file=self.file, title=viz_type, json=json)
        v.save()
        self.load_table()
        return redirect('/projects/app')
        #logger.debug('AppView > addViz end')
        
    def copyViz(self, pk):
        v = Viz.objects.get(pk=pk)
        v.pk = None
        v.save()
        self.load_table()
        return redirect('/projects/app')
        
    def deleteViz(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        v = Viz.objects.get(pk=pk)
        v.delete()
        self.load_table()
        
    def selectViz(self, pk):
        #Viz.objects.filter(pk=pk).delete()
        self.file.selected_viz = pk
        self.file.save()
        
    def switch_learner_mode(self):
        self.project.learner_mode = not self.project.learner_mode
        self.project.save()
        #self.project.refresh_from_db()
        self.load_table()
        return redirect('/projects/app')
    
    def addReport(self, title='NewReport'):
        #logger.debug('AppView > addViz start')
        #df = self.df()
        r = Report(title=title, file=self.file)
        r.save()
        self.load_table()
        #logger.debug('AppView > addViz end')
    
    def getRemoteData(self, service='READ_DATA_ATTRITION'):
        #logger.debug('AppView > addRemoteFile start')
        a = pp.App()
        a.add(service)
        df = a.call()
        content = df.to_csv(index=False)
        # no files on disk so delete
        #temp_file = ContentFile(content.encode('utf-8'))
        f = File(description=f'{service}.csv', project=self.project, document=content, learner_mode=self.project.learner_mode)
        #f.document.save(f'{service}.csv', temp_file)
        f.save()
        
        if self.project.learner_mode:
            i = Item(title='List up relevant fields', description='Analyze provided data, find fields that seem relevant to employee attrition', 
                     mission=f)
            i.save()
        self.file = f
        self.load_table()
        #logger.debug('AppView > addRemoteFile end')
        
    def called(self, name, args):
        #logger.debug('AppView > called start')
        pass
        #logger.debug('AppView > called end')
            
    def complete(self):
        #logger.debug('AppView > complete start')
        logger.debug('AppView > complete end')

#RENDER

    def remote_data(self):
        #logger.debug('AppView > addViz start')
        s = pp.App().services()['read']
        return [i for i in s if i.startswith('READ_DATA')]
        #logger.debug('AppView > addViz end')
    
    def rendered(self, html):
        #logger.debug('AppView > rendered start')
        pass
        #logger.debug('AppView > rendered end')
    
    def parent_rendered(self, html):
        #logger.debug('AppView > parent_rendered start')
        pass
        #logger.debug('AppView > parent_rendered end')