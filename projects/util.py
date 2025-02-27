from projects.models import Profile, Settings
from guardian.shortcuts import get_perms

def get_perms_and_settings(*args, **kwargs):
    
    request = kwargs['request']
    context = kwargs['context']
    objs = kwargs.get('objs', None)
    
    mode = context['mode']
    query = context['query'] if 'query' in context else None
    page = context['page'] if 'page' in context else None
    search = context['search'] if 'search' in context else None

    current_user = request.user
    app_perms = [p.split('.', 1)[1] for p in list(current_user.get_all_permissions())]

    current_user_custom_settings = None
    settings = None
    if hasattr(request.user, 'profile'):
        current_user_custom_settings = request.user.profile.properties
    if current_user_custom_settings:
        settings = Settings.all() | current_user_custom_settings
    else:
        settings = Settings.all()
    
    if objs:
        for o in objs:
            p = get_perms(current_user, o)
            #print(o)
            #print(p)
            app_perms.extend(p)
        
        
    edit_display_perm = settings.get(f'edit_display_perm_{mode}', None)
    nav_display_perm = settings.get(f'nav_display_perm_{mode}', None)
    if edit_display_perm in app_perms:
        app_perms.append('display_edit_panel')
    if nav_display_perm in app_perms:
        app_perms.append('display_nav_panel')    

    edit_open = settings.get(f'edit_open_{mode}', None)
    nav_open = settings.get(f'nav_open_{mode}', None)
    if edit_open:
        settings['edit_open'] = edit_open
    if nav_open:
        settings['nav_open'] = nav_open
        
    #session_salt to append to url for client-side cache refresh
    request.session.save()
    settings['session_salt'] = str(request.session.session_key)[-11:-1] + '/'
    
    return app_perms, settings
