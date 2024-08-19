from guardian.utils import get_anonymous_user
import gc

def guardian_anonymous_user_middleware(get_response):
    # One-time configuration and initialization.

    def middleware(request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        
        if request.user.is_anonymous:
            request.user = get_anonymous_user()
            #print('switched user here')

        response = get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response

    return middleware

from django import shortcuts

class Redirect(Exception):
    def __init__(self, url):
        self.url = url

def redirect(url):
    raise Redirect(url)

class RedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_exception(self, request, exception):
        if isinstance(exception, Redirect):
            return shortcuts.redirect(exception.url)
        
class GarbageCollectionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def get_custom_response(self, request):
        gc.collect()
        
        #import tracemalloc
        #tracemalloc.start(25)
        
        response = self.get_response(request)
        gc.collect()
        
        #snapshot = tracemalloc.take_snapshot()
        #top_stats = snapshot.statistics('traceback')
        #stat = top_stats[0]
        #for line in stat.traceback.format():
        #    print(line)
        
        from django.db import reset_queries
        reset_queries()
        return response
    
    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_custom_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response