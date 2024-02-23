from django.apps import AppConfig

class ProjectsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'projects'
    
    def ready(self):
        from . import signals
        
from django.contrib.staticfiles.apps import StaticFilesConfig

class ProjectsStaticFilesConfig(StaticFilesConfig):
    ignore_patterns = ['CVS', '.*', '*~', 'projects/src/*',]  # your custom ignore list
