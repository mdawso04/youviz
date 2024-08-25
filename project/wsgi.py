"""
WSGI config for dj_test project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application


#from projects.middleware import GarbageCollectionMiddleware

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')

from django.conf import settings

application = get_wsgi_application()

if settings.DEBUG:
    #application = GarbageCollectionMiddleware(application)
    # my_wsgi_app is a WSGI application
    from dozer import Dozer
    #from tempfile import mkdtemp
    #from dozer import Profiler
    application = Dozer(application)
    #application = Profiler(application, profile_path=mkdtemp(prefix='dozer-'))