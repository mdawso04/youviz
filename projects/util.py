from projects.models import Profile, Settings
from django.http import Http404
from guardian.shortcuts import get_perms
from django.core.cache import cache
import json
from django.forms import modelformset_factory
from django.forms import BaseModelFormSet
from django.shortcuts import redirect
from django.urls import reverse
from types import SimpleNamespace
import copy

def cache_key_from_obj(obj, suffix=''):
    return '{}_{}{}'.format(type(obj).__name__.lower(), obj.slug, suffix)

def attach_slug_to_perm_name(perm_name, obj):
    return '{}_{}'.format(perm_name, obj.slug)

def add_perm_from_obj(obj):
    return attach_slug_to_perm_name('add_{}'.format(type(obj).__name__.lower()), obj) 

def change_perm_from_obj(obj):
    return attach_slug_to_perm_name('change_{}'.format(type(obj).__name__.lower()), obj) 

def delete_perm_from_obj(obj):
    return attach_slug_to_perm_name('delete_{}'.format(type(obj).__name__.lower()), obj) 

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
        app_perms=None,
        req_perms=None,
        cache_keys=None,
        target_object=None,
        master_object=None
    ):
        if target_object is not None:
            target_object = getattr(*target_object)
        if master_object is not None:
            master_object = getattr(*master_object)
        if req_perms: 
            #print('CHECKING {} in {}'.format(req_perms, app_perms))
            for p in req_perms:
                if p not in app_perms:
                    raise Http404
        if target_object is not None:
            ckey = cache_key_from_obj(target_object, '_buffer')
            c = cache.get(ckey)
            if c:
                target_object.set_field_data(c)
        if master_object is not None:
            c2key = cache_key_from_obj(master_object, '_master')
            c1 = cache.get(c2key)
            if c1:
                master_object.set_field_data(c1)


def updated_handler(
        cache_keys=None,
        target_object=None,
        master_object=None,
        form_or_formset=None,
        save_form_or_formset_on_valid=False,
        call_on_success=None,
    ):
            
        if cache_keys is not None and target_object is not None:
            cache.set(cache_key, getattr(*target_object).field_data())
            
        def call_on_success_handler(call_on_success):
            result = None
            if call_on_success:
                for action in call_on_success:
                    method_name = action[0]
                    args = action[1]
                    kwargs = action[2]
                    result = method_name(*args, **kwargs)
                    #print('calling {}'.format(method_name))
            return result
        
        form_or_formset_is_valid = None
        action_result = None
        cleaned_target_instance = None
        handling_master_and_target = master_object is not None
        
        if form_or_formset:
            form_or_formset_is_valid = form_or_formset.is_valid()
            if form_or_formset_is_valid:
                #print('WORKING WITH PASSED TARGET {}'.format(target_object.__dict__))
                #save 'cleaned' data to target model
                cleaned_target_instance = form_or_formset.save(commit=False)
                if hasattr(form_or_formset, 'forms'): #formset
                    cleaned_target_instance = cleaned_target_instance[0]
                #print('BUILT CLEANED TARGET {}'.format(cleaned_target_object.__dict__))
                #update master model
                if handling_master_and_target:
                    #print('PREPPING DATA TO COPY {}'.format(cleaned_target_object.field_data()))
                    #master_object.set_field_data(cleaned_target_object.field_data())
                    setattr(*master_object, copy.deepcopy(cleaned_target_instance))
                    #print('COPIED TO MASTER TARGET {}'.format(master_object.__dict__))
                #optionally write to db manually due to our buffer/master setup
                if save_form_or_formset_on_valid:
                    #form_or_formset.save()
                    if handling_master_and_target:
                        getattr(*master_object).save()
                        #print('SAVED MASTER TARGET {}'.format(master_object.__dict__))
                    else:
                        cleaned_target_instance.save()
                        #print('SAVED CLEANED TARGET {}'.format(cleaned_target_object.__dict__))
                else:
                    print('valid but no save selcted')
                #call actions
                action_result = call_on_success_handler(call_on_success)
            else:
                print('formset not valid')
                #print(form_or_formset.errors)
                #print(form_or_formset.non_form_errors())
        else:
            action_result = call_on_success_handler(call_on_success)
        
        if cleaned_target_instance is not None:
            cache.set(cache_key_from_obj(cleaned_target_instance, '_buffer'), cleaned_target_instance.field_data())
        if handling_master_and_target:
            cache.set(cache_key_from_obj(getattr(*master_object), '_master'), getattr(*master_object).field_data())
        print('updated cache')
            
        return form_or_formset_is_valid, action_result

        #convert values
        #validation
        #save
        #cache update
        
def action_handler(
        app_perms=None,
        req_perms=None,
        cache_keys=None,
        target_object=None,
        target_object_updates=None,
        master_object=None,
        form_or_formset=None,
        actions=None,
        reverse_redirect_on_success=None,
    ):
    #step 1, perms, cache
    print('updating handler')
    updating_handler(
        app_perms=app_perms,
        req_perms=req_perms,
        target_object=target_object,
        master_object=master_object,
    )
    print('target updates')
    #target_object_updates 
    if target_object_updates:
        for updates in target_object_updates:
            setattr(target_object, *updates)
    
    print('updated hadnler')
    call_on_success_result = updated_handler(
        target_object=target_object,
        master_object=master_object,
        form_or_formset=form_or_formset,
        save_form_or_formset_on_valid=False,
        call_on_success=actions,
    )
    #redirect
    print('reverse')
    print(call_on_success_result)
    if reverse_redirect_on_success:
        return redirect(reverse(reverse_redirect_on_success[0], kwargs=reverse_redirect_on_success[1]))
    return call_on_success_result

        
def build_form_or_formset(
        model=None,
        queryset=None,
        new_object_with_data=None,
        form=None,
        unicorn_model=None,
        formset=None,
        custom_config=None,
        form_mode=None,
        form_kwargs={}
    ):
    
    #formset if queryset provided
    if queryset:
        new_object_as_list = [getattr(*new_object_with_data)] if new_object_with_data else []
    
        initial_forms = len(queryset)
        total_forms = initial_forms + len(new_object_as_list)

        management_form_config =  {
            'form-TOTAL_FORMS': '{}'.format(total_forms), 
            'form-INITIAL_FORMS': '{}'.format(initial_forms), 
        }
        updated_instance_data = management_form_config | {
            'form-{}-{}'.format(idx, k): v if k not in ('json', 'properties',) else json.dumps(v) 
            for idx, instance in enumerate(list(queryset) + new_object_as_list)
            for k, v in instance.field_data().items() 
        }
        #print(queryset)
        #print(updated_instance_data)
        #formset
        GeneratedFormSet = modelformset_factory(
            model, 
            form=form, 
            formset=formset,
        )
        return GeneratedFormSet(
            queryset=queryset, 
            data=updated_instance_data, 
            auto_id='id_for_%s', 
            custom_config=custom_config
        )
    else:
        updated_instance_data = {k: v if k not in ('json', 'properties',) else json.dumps(v) 
            for k, v in getattr(*new_object_with_data).field_data().items() 
        }
        print(updated_instance_data)
        generated_form = form(
            instance=getattr(*new_object_with_data), 
            unicorn_model=unicorn_model,
            data=updated_instance_data, 
            custom_config=custom_config,
            form_mode=form_mode,
            **form_kwargs
        )        
        return generated_form
    
def dict_deep_merge(d1, d2, level=4):
    if level == 0 or not isinstance(d1, dict) or not isinstance(d2, dict):
        return d2
    merged = d1.copy()
    for key, value in d2.items():
        if key in merged:
            merged[key] = dict_deep_merge(merged[key], value, level - 1)
        else:
            merged[key] = value
    return merged

def updated_handler_preclean(target, name, value):
    #clean values not handled by Unicorn and write to target model in prep for update_handler
    if value == '':
        #print('NAME OF OBJ TO DLETE'.format(name))
        #print('TARGET TO DLETE'.format(target.__dict__))
        delete_nested_attr(target, name)
        
    else:
        value = coerce_value(value)
        set_nested_attr(target, name, value)
    
def coerce_value(value, from_str=True):
    if from_str:
        if value == None:
            value = 'None'
        elif value == True:
            value = 'True'
        elif value == False:
            value = 'False'
    else:
        if value == 'None':
            value = None
        elif value == 'True':
            value = True
        elif value == 'False':
            value = False
    return value
    
def parse_path_inline(path):
    """Parses a dot notation path like 'foo.bar.0.baz' into a list of keys/indexes."""
    parts = []
    for part in path.split('.'):
        if part.isdigit():
            parts.append(int(part))  # treat as list index
        else:
            parts.append(part)       # treat as attribute or dictionary key
    return parts

def delete_nested_attr(obj, attr_path):
    """Access or create nested attributes/lists/dictionaries using inline dot notation with indices."""
    parts = parse_path_inline(attr_path)
    for i, part in enumerate(parts[:-1]):
        next_part = parts[i + 1] if i + 1 < len(parts) else None

        if isinstance(part, int):  # list index
            while len(obj) <= part:
                obj.append(dict() if isinstance(next_part, str) else [])
            obj = obj[part]
        elif isinstance(obj, dict):  # dictionary key
            if part not in obj:
                obj[part] = dict() if isinstance(next_part, str) else []
            obj = obj[part]
        else:  # attribute
            if not hasattr(obj, part) or getattr(obj, part) is None:
                setattr(obj, part, [] if isinstance(next_part, int) else dict())
            obj = getattr(obj, part)
    
    final = parts[-1]
    if isinstance(final, int):  # list index
        while len(obj) <= final:
            obj.append(None)
        #return obj[final]
        del obj[final]
    elif isinstance(obj, dict):  # dictionary key
        #return obj.get(final, None)
        if final in obj:
            del obj[final]
    else:  # attribute
        if hasattr(obj, final):
            delattr(obj, final)

def get_or_create_nested_attr(obj, attr_path):
    """Access or create nested attributes/lists/dictionaries using inline dot notation with indices."""
    parts = parse_path_inline(attr_path)
    for i, part in enumerate(parts[:-1]):
        next_part = parts[i + 1] if i + 1 < len(parts) else None

        if isinstance(part, int):  # list index
            while len(obj) <= part:
                obj.append(dict() if isinstance(next_part, str) else [])
            obj = obj[part]
        elif isinstance(obj, dict):  # dictionary key
            if part not in obj:
                obj[part] = dict() if isinstance(next_part, str) else []
            obj = obj[part]
        else:  # attribute
            if not hasattr(obj, part) or getattr(obj, part) is None:
                setattr(obj, part, [] if isinstance(next_part, int) else dict())
            obj = getattr(obj, part)
    
    final = parts[-1]
    if isinstance(final, int):  # list index
        while len(obj) <= final:
            obj.append(None)
        return obj[final]
    elif isinstance(obj, dict):  # dictionary key
        return obj.get(final, None)
    else:  # attribute
        return getattr(obj, final, None)

def set_nested_attr(obj, attr_path, value):
    """Set a nested attribute, creating intermediate attributes/lists/dictionaries as needed."""
    top = obj
    print('START NESTED UPDATE FOR {} {}'.format(attr_path, top.__dict__))
    parts = parse_path_inline(attr_path)
    for i, part in enumerate(parts[:-1]):
        next_part = parts[i + 1] if i + 1 < len(parts) else None

        if isinstance(part, int):  # list index
            while len(obj) <= part:
                obj.append(dict() if isinstance(next_part, str) else [])
            obj = obj[part]
        elif isinstance(obj, dict):  # dictionary key
            if part not in obj:
                obj[part] = dict() if isinstance(next_part, str) else []
            obj = obj[part]
        else:
            if not hasattr(obj, part) or getattr(obj, part) is None:
                setattr(obj, part, [] if isinstance(next_part, int) else dict())
            obj = getattr(obj, part)

    final = parts[-1]
    if isinstance(final, int):  # list index
        while len(obj) <= final:
            obj.append(None)
        obj[final] = value
    elif isinstance(obj, dict):  # dictionary key
        obj[final] = value
    else:  # attribute
        setattr(obj, final, value)
    print('END NESTED UPDATE FOR {} {}'.format(attr_path, top.__dict__))

#import copyreg

#from django.forms.renderers import DjangoTemplates
#DatastreamFormFormSet
#from projects.components.app import AppView

#def pickle_django_templates(instance):
#    return AppView, ()

#copyreg.pickle(AppView, pickle_django_templates)
