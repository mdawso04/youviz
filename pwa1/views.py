from django.http import HttpResponse
from django.shortcuts import render

from pwa import app_settings

'''
def service_worker(request):
    response = HttpResponse(open(app_settings.PWA_SERVICE_WORKER_PATH).read(), content_type='application/javascript')
    return response
'''

from django.contrib.staticfiles.utils import get_files
from django.contrib.staticfiles.storage import StaticFilesStorage
import os
from pathlib import Path

def service_worker(request):
    s = StaticFilesStorage()
    static_files = list(get_files(s))
    
    return render(request, app_settings.PWA_SERVICE_WORKER_PATH, {
        'staticfile_list': [
            path.replace('\\', '/') 
            for path in static_files 
            if not path.endswith(('.gz', '.br'))
        ]
    }, content_type='application/javascript')

def manifest(request):
    return render(request, 'manifest.json', {
        setting_name: getattr(app_settings, setting_name)
        for setting_name in dir(app_settings)
        if setting_name.startswith('PWA_')
    }, content_type='application/json')

def offline(request):
    return render(request, "offline.html")