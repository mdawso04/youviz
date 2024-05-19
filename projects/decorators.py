from django.http import Http404
from django.shortcuts import redirect

def check_user_able_to_see_page(
    require_login=True,
    perms=None, 
    groups=None,
    login_url='/',):

    def decorator(function):
        def wrapper(request, *args, **kwargs):
            if require_login:
                perms_check_ok = request.user.has_perms(perms) if perms else True
                group_check_ok = request.user.groups.filter(name__in=groups).exists() if groups else True
                
                if group_check_ok and perms_check_ok:
                    return function(request, *args, **kwargs)
                else:
                    return redirect(login_url)
            return function(request, *args, **kwargs)

        return wrapper

    return decorator