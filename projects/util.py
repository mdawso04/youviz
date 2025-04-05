from projects.models import Profile, Settings
from django.http import Http404
from guardian.shortcuts import get_perms

def attach_slug_to_perm_name(perm_name, obj):
    return '{}_{}'.format(perm_name, obj.slug)

def obj_perms_with_slug(current_user, obs, app_perms=None):
    '''Return perms_with_slug for objs, or append to app_perms'''
    all_perms = []
    for o in obs:
        o_perms = get_perms(current_user, o)
        #new_perms_with_key = ['{}{}'.format(perm, o.slug) for perm in new_perms]
        # {% if 'change_datastream'|:form.instance.slug in app_perms %}
        o_perms_with_slug = [attach_slug_to_perm_name(p, o) for p in o_perms]
        #print(o)
        if app_perms:
            app_perms.extend(o_perms_with_slug)
        else:
            all_perms.extend(o_perms_with_slug)
    if app_perms:
        return
    else:
        return all_perms
    

def get_perms_and_settings(*args, **kwargs):
    
    request = kwargs['request']
    context = kwargs['context']
    obs = kwargs.get('obs', None)
    update_perms = kwargs.get('update_perms', False)
    
    mode = context['mode']
    query = context['query'] if 'query' in context else None
    page = context['page'] if 'page' in context else None
    search = context['search'] if 'search' in context else None

    current_user = request.user
    
    if update_perms:
        if obs:
            app_perms = kwargs.get('app_perms', None)
            app_perms.extend(obj_perms_with_slug(current_user, obs))
        return app_perms
    else:
        app_perms = [p.split('.', 1)[1] for p in list(current_user.get_all_permissions())]

        current_user_custom_settings = None
        settings = None
        if hasattr(request.user, 'profile'):
            current_user_custom_settings = request.user.profile.properties
        if current_user_custom_settings:
            settings = Settings.all() | current_user_custom_settings
        else:
            settings = Settings.all()
    
        #app_perms_and_o_perms = {'app': app_perms, 'obj': {}}

        if obs:
            app_perms.extend(obj_perms_with_slug(current_user, obs))

        ''' 
            for o in obs:
                o_perms = get_perms(current_user, o)
                #new_perms_with_key = ['{}{}'.format(perm, o.slug) for perm in new_perms]
                # {% if 'change_datastream'|:form.instance.slug in app_perms %}
                o_perms_with_slug = ['{}_{}'.format(p, o.slug) for p in o_perms]
                #print(o)
                app_perms.extend(o_perms_with_slug)

        #print(app_perms)
        '''


        edit_display_perm = settings.get(f'edit_display_perm_{mode}', None)
        nav_display_perm = settings.get(f'nav_display_perm_{mode}', None)
        if edit_display_perm and any(edit_display_perm in s for s in app_perms):
            app_perms.append('display_edit_panel')
        if nav_display_perm and any(nav_display_perm in s for s in app_perms):
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


        if hasattr(request.user, 'profile'):
            settings['user_profile_color'] = request.user.profile.properties['profile_color']
        else:
            settings['user_profile_color'] = '#0dcaf0'
    
        return app_perms, settings

def updating_handler(
        app_perms,
        req_perms,
        cache_key,
        target_object
    ):
        if req_perms: 
            for p in req_perms:
                if p not in app_perms:
                    raise Http404
        if cache_key and target_object:
            c = cache.get(cache_key)
            if c:
                target_object.set_field_data(c)

def updated_handler(
        cache_key=None,
        target_object=None,
        form_or_formset=None,
        call_on_success=None,
    ):
        if cache_key and target_object:
            cache.set(cache_key, target_object.field_data())
                
        #convert values
        #validation
        #save
        #cache update


#import copyreg

#from django.forms.renderers import DjangoTemplates
#DatastreamFormFormSet
#from projects.components.app import AppView

#def pickle_django_templates(instance):
#    return AppView, ()

#copyreg.pickle(AppView, pickle_django_templates)
