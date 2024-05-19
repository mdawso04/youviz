from guardian.utils import get_anonymous_user

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