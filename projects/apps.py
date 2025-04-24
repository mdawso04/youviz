from django.apps import AppConfig
from django.conf import settings as app_settings
from django.db.models.signals import post_migrate

def initialise(sender, **kwargs):
    """after migrations"""
    
    from .models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover
    from random import randint
    from django.contrib.auth.models import User, Group, Permission
    
    #groups
    site_allusers, _ = Group.objects.get_or_create(name='site_allusers')
    site_registeredusers, _ = Group.objects.get_or_create(name='site_registeredusers')
    site_powerusers, _ = Group.objects.get_or_create(name='site_powerusers')
    datasource_owners, _ = Group.objects.get_or_create(name='datasource_owners')
    datasource_managers, _ = Group.objects.get_or_create(name='datasource_managers')
    datasource_collaborators, _ = Group.objects.get_or_create(name='datasource_collaborators')
    datastream_owners, _ = Group.objects.get_or_create(name='datastream_owners')
    datastream_managers, _ = Group.objects.get_or_create(name='datastream_managers')
    datastream_collaborators, _ = Group.objects.get_or_create(name='datastream_collaborators')
    comment_owners, _ = Group.objects.get_or_create(name='comment_owners')
    
    #perms
    view_published_datasource_perm = Permission.objects.get(codename='view_published_datasource')
    view_datasource_perm = Permission.objects.get(codename='view_datasource')
    change_datasource_perm = Permission.objects.get(codename='change_datasource')
    delete_datasource_perm = Permission.objects.get(codename='delete_datasource')
    
    view_published_datastream_perm = Permission.objects.get(codename='view_published_datastream')
    view_datastream_perm = Permission.objects.get(codename='view_datastream')
    change_datastream_perm = Permission.objects.get(codename='change_datastream')
    delete_datastream_perm = Permission.objects.get(codename='delete_datastream')
    
    change_activity_perm = Permission.objects.get(codename='change_activity')
    
    view_profile_perm = Permission.objects.get(codename='view_profile')
    change_profile_perm = Permission.objects.get(codename='change_profile')
    
    add_datasource_perm = Permission.objects.get(codename='add_datasource')
    add_datastream_perm = Permission.objects.get(codename='add_datastream')
    
    add_comment_perm = Permission.objects.get(codename='add_comment')
    view_comment_perm = Permission.objects.get(codename='view_comment')
    change_comment_perm = Permission.objects.get(codename='change_comment')
    delete_comment_perm = Permission.objects.get(codename='delete_comment')
    
    
    site_allusers.permissions.add(
        view_published_datasource_perm.pk,
        view_comment_perm.pk,
    )
    site_registeredusers.permissions.add(
        change_activity_perm.pk,
        view_profile_perm.pk,
        change_profile_perm.pk,
        add_datasource_perm.pk,
        add_comment_perm.pk,
        view_published_datastream_perm.pk,
    )
    site_powerusers.permissions.add(
        add_datastream_perm.pk
    )
    datasource_owners.permissions.add(
        view_datasource_perm.pk,
        change_datasource_perm.pk,
        delete_datasource_perm.pk,
    )
    datasource_managers.permissions.add(
        view_datasource_perm.pk,
        change_datasource_perm.pk,
        delete_datasource_perm.pk,
    )
    datasource_collaborators.permissions.add(
        view_datasource_perm.pk,
        change_datasource_perm.pk,
    )
    datastream_owners.permissions.add(
        view_datastream_perm.pk,
        change_datastream_perm.pk,
        delete_datastream_perm.pk,
    )
    datastream_managers.permissions.add(
        view_datastream_perm.pk,
        change_datastream_perm.pk,
        delete_datastream_perm.pk,
    )
    datastream_collaborators.permissions.add(
        view_datastream_perm.pk,
        change_datastream_perm.pk,
    )
    comment_owners.permissions.add(
        change_comment_perm.pk,
        delete_comment_perm.pk,
    )
    
    
    #assign group to GuardianUser
    guardian_user_exists = User.objects.filter(username='GuardianUser').exists()
    if not guardian_user_exists:
        from django.apps import apps as django_apps
        from django.db.models.signals import post_migrate
        guardian_config = django_apps.get_app_config('guardian')
        post_migrate.send(
            sender=guardian_config,
            app_config=guardian_config,
            verbosity=2,
            interactive=False,
            using=None,
        )
    guardian_user = User.objects.get(username='GuardianUser')    
    guardian_user.groups.add(site_allusers)
    
    #system user
    system_user_exists = User.objects.filter(username='system').exists()
    if not system_user_exists:
        email = f'user{randint(1, 99999)}@example.com'
        password = User.objects.make_random_password()
        system_user = User.objects.create_user(
            username='system',
            email=email,
            password=password)
    

    #covers
    covers_exist = Cover.objects.exists()
    if not covers_exist:
        business_cover = Cover.objects.create(
            name='Business',
            description='Business',
            slug='business',
            owner=system_user,
            search_terms='business,employee,work,attrition,turnover',
        )
        society_cover = Cover.objects.create(
            name='Society',
            description='Society',
            slug='society',
            owner=system_user,
            search_terms='society,population,',
        )
        health_cover = Cover.objects.create(
            name='Health',
            description='Health',
            slug='health',
            owner=system_user,
            search_terms='health,covid,sick,disease,death,accident,injur',
        )
        education_cover = Cover.objects.create(
            name='Education',
            description='Education',
            slug='education',
            owner=system_user,
            search_terms='education,univerity,school,learn',
        )
        default_cover = Cover.objects.create(
            name='_top',
            description='_top',
            slug='_top',
            owner=system_user,
            search_terms='{},{},{},{},'.format(
                business_cover.search_terms,
                society_cover.search_terms,
                health_cover.search_terms,
                education_cover.search_terms,
            ),
        )
    
    #datastream
    datastreams_exist = Datastream.objects.exists()
    if not datastreams_exist:
        ds1 = Datastream.objects.create(
            name='Synthetic Attrition Data',
            url='https://raw.githubusercontent.com/IBM/employee-attrition-aif360/master/data/emp_attrition.csv',
            owner=system_user,
        )
    
    #settings
    settings_exist = Settings.objects.exists()
    if not settings_exist:
        settings = Settings.objects.create(
            json={
                "sitename": "YouViz", 
                "sitedesc": "The free web app where you can Find, Visualise and Share Open Data", 
                "sitewelcome": {
                    "topline": "Welcome to YouViz!", 
                    "subline": "Search, Vizualize and Share Open Data for Free"
                },
                "comments": True,
            },
        )
    
    #notifications
    notifications_exist = Notification.objects.exists()
    if not notifications_exist:
        view_ad = Notification.objects.create(
            title='View ad',
            position=Notification.VIEW_AD,
            html='Block content',
        )
    
    #site
    from django.contrib.sites.models import Site
    site = Site.objects.get(id=app_settings.SITE_ID)
    site.domain = app_settings.SITE_DOMAIN_NAME
    site.name = app_settings.SITE_DISPLAY_NAME
    site.save()

    #if not SiteProfile.objects.exists():
    #    SiteProfile.objects.create(site=site)

class ProjectsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'projects'
    
    def ready(self):
        post_migrate.connect(initialise, sender=self)

        
from django.contrib.staticfiles.apps import StaticFilesConfig

class ProjectsStaticFilesConfig(StaticFilesConfig):
    ignore_patterns = ['CVS', '.*', '*~', 'projects/src/*',]  # your custom ignore list
    
    
    
def refresh_datasources():
    from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover, Comment

    datastreams_to_refresh = Datastream.list(properties__refresh=True)
    if datastreams_to_refresh:
        for d in datastreams_to_refresh:
            d.refresh()
    else:
        print('No ds to refresh!')
        
        
'''
PATCH
'''
from typing import Any, Dict, Optional

from django.db.models import QuerySet
from django_unicorn.components import UnicornView
from django_unicorn.decorators import timed


@timed
def new_set_property_value(
    component: UnicornView,
    property_name: Optional[str],
    property_value: Any,
    data: Optional[Dict] = None,
    call_resolved_method=True,  # noqa: FBT002
) -> None:
    """
    Sets properties on the component.
    Also updates the data dictionary which gets set back as part of the payload.

    Args:
        param component: Component to set attributes on.
        param property_name: Name of the property.
        param property_value: Value to set on the property.
        param data: Dictionary that gets sent back with the response. Defaults to {}.
        call_resolved_method: Whether or not to call the resolved method. Defaults to True.
    """

    if property_name is None:
        raise AssertionError("Property name is required")
    if property_value is None:
        raise AssertionError("Property value is required")

    if not data:
        data = {}

    component.updating(property_name, property_value)

    """
    Handles nested properties. For example, for the following component:

    class Author(UnicornField):
        name = "Neil"

    class TestView(UnicornView):
        author = Author()

    `payload` would be `{'name': 'author.name', 'value': 'Neil Gaiman'}`

    The following code updates UnicornView.author.name based the payload's `author.name`.
    """
    property_name_parts = property_name.split(".")
    for part in property_name_parts:
        if part.startswith("__") and part.endswith("__"):
            raise AssertionError("Invalid property name")
    component_or_field = component
    data_or_dict = data  # Could be an internal portion of data that gets set

    for idx, property_name_part in enumerate(property_name_parts):
        if hasattr(component_or_field, property_name_part):
            #print('one')
            if idx == len(property_name_parts) - 1:
                if hasattr(component_or_field, "_set_property"):
                    # Can assume that `component_or_field` is a component
                    component_or_field._set_property(
                        property_name_part,
                        property_value,
                        call_updating_method=False,  # the updating method has already been called above
                        call_updated_method=True,
                        call_resolved_method=call_resolved_method,
                    )
                else:
                    # Handle calling the updating/updated method for nested properties
                    property_name_snake_case = property_name.replace(".", "_")
                    updating_function_name = f"updating_{property_name_snake_case}"
                    updated_function_name = f"updated_{property_name_snake_case}"
                    resolved_function_name = f"resolved_{property_name_snake_case}"

                    if hasattr(component, updating_function_name):
                        getattr(component, updating_function_name)(property_value)

                    is_relation_field = False

                    # Set the id property for ForeignKeys
                    # TODO: Move some of this to utility function
                    if hasattr(component_or_field, "_meta"):
                        for field in component_or_field._meta.get_fields():
                            if field.is_relation and field.many_to_many:
                                related_name = field.name

                                if field.auto_created:
                                    related_name = field.related_name or f"{field.name}_set"

                                if related_name == property_name_part:
                                    related_descriptor = getattr(component_or_field, related_name)
                                    related_descriptor.set(property_value)
                                    is_relation_field = True
                                    break
                            elif field.name == property_name_part:
                                if field.is_relation:
                                    setattr(
                                        component_or_field,
                                        field.attname,
                                        property_value,
                                    )
                                    is_relation_field = True
                                    break

                    if not is_relation_field:
                        setattr(component_or_field, property_name_part, property_value)

                    if hasattr(component, updated_function_name):
                        getattr(component, updated_function_name)(property_value)

                    if call_resolved_method and hasattr(component, resolved_function_name):
                        getattr(component, resolved_function_name)(property_value)

                data_or_dict[property_name_part] = property_value
            else:
                component_or_field = getattr(component_or_field, property_name_part)
                data_or_dict = data_or_dict.get(property_name_part, {})
        elif isinstance(component_or_field, dict):
            print('is this a dict?? {}'.format(component_or_field))
            print(data_or_dict)
            
            if idx == len(property_name_parts) - 1:
                component_or_field[property_name_part] = property_value
                #data_or_dict[property_name_part] = property_value
            else:
                component_or_field = component_or_field[property_name_part]
                #data_or_dict = data_or_dict.get(property_name_part, {})
        elif isinstance(component_or_field, (QuerySet, list)):
            #print('three')
            # TODO: Check for iterable instead of list? `from collections.abc import Iterable`
            property_name_part_int = int(property_name_part)

            if idx == len(property_name_parts) - 1:
                component_or_field[property_name_part_int] = property_value  # type: ignore[index]
                data_or_dict[property_name_part_int] = property_value
            else:
                #print('woohooo')
                #print(component_or_field)
                #print(component_or_field[property_name_part_int])
                #print(data_or_dict)
                component_or_field = component_or_field[property_name_part_int]  # type: ignore[index]
                #data_or_dict = data_or_dict[property_name_part_int]
        else:
            break

    component.updated(property_name, property_value)

    if call_resolved_method:
        component.resolved(property_name, property_value)

from django_unicorn.views.action_parsers import utils
utils.set_property_value = new_set_property_value




from typing import Dict

from django_unicorn.components import UnicornView
from django_unicorn.views.action_parsers.utils import set_property_value
from django_unicorn.views.objects import ComponentRequest

def new_handle(component_request: ComponentRequest, component: UnicornView, payload: Dict):
    property_name = payload.get("name")
    property_value = payload.get("value")

    call_resolved_method = True

    # If there is more than one action then only call the resolved methods for the last action in the queue
    if len(component_request.action_queue) > 1:
        call_resolved_method = False
        last_action = component_request.action_queue[-1:][0]

        if last_action.payload.get("name") == property_name and last_action.payload.get("value") == property_value:
            call_resolved_method = True

    print(component)
    print(property_name)
    print(property_value)
    print( component_request.data)

    set_property_value(
        component, property_name, property_value, component_request.data, call_resolved_method=call_resolved_method
    )

from django_unicorn.views.action_parsers import sync_input
sync_input.handle = new_handle







# pp
import pp
from pp.log import logger
from pp.util import *
from pp.data import *
from pp.io import *

'''
Patch for pp.App.data
'''
def data(self, todo=None):
    #todo
    todo = -1 if todo is None else todo
    td = self.todos[todo]
    #available
    available_options = self.options(td['service'], index=todo)
    #saved
    saved_options = td['options']

    #all = {k: {'available': y, 'saved': saved_options.get(k)} for k, y in available_options.items()}
    #all = {'options': all}
    all = {
        'options': {
           'available': available_options,
           'saved': saved_options,
        }
    }
    all['name'] = td['name']
    all['service'] = {'available': self.services(), 'saved': td['service']}
    return all

pp.App.data = data

'''
Patch for pp.io.SimpleCsvExcelReader.read
'''

def read(self):
    '''Returns dataframe based on config'''
    s = self._src
    if hasattr(s, 'read'):
        s.seek(0)
        return pd.read_csv(s)
    return pd.read_csv(s)

pp.io.SimpleCsvExcelReader.read = read


'''
Patch for pp.App.call


def call(self, df=None, viz=None, last_index=None, return_df=True):
    #logger.debug('pp.App > call start')
    if not self._isvalid():
        #exception
        return "ERROR"
    service_list = self._service_helper(return_type='service_callable', filter_read=False)  
    result, results = None, []
    #logger.debug('Calling Todos: {}'.format(len(self.todos)))
    for item in self.todos[:last_index]:
        fn = service_list[item['service']].fn
        s = inspect.signature(fn)
        if 'df' in s.parameters:
            if 'options' in item.keys() and item['options'] is not None:
                result = fn(df=df, **item['options'])
            else:
                result = fn(df=df)
        elif 'viz' in s.parameters:
            if 'options' in item.keys() and item['options'] is not None:
                result = fn(viz=viz, **item['options'])
            else:
                result = fn(viz=viz)
        else:
            if 'options' in item.keys() and item['options'] is not None:
                result = fn(**item['options'])
            else:
                result = fn()
        if isinstance(result, pd.DataFrame):
            df = result.convert_dtypes() #apply conversion to ensure numbers are numbers
            print(df.dtypes)
        else:
            if isinstance(result, go.Figure):
                viz = result
            results.append(result)
        #logger.debug('Called Todo: {} ({})'.format(item['service'], item['name']))
    results.append(df)
    #logger.debug('Called Todos: {}'.format(len(self.todos)))
    #logger.debug('Generated results: {}'.format(len(results)))
    #logger.debug('pp.App > call end')
    if return_df:
        return results[-1]
    return results

pp.App.call = call
'''

'''
Patch for data
'''

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTEQUAL(df, column=None, matches=None):
    '''Hides rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}` != "{}"'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_EQUAL(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}` == "{}"'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_STARTSWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}`.str.startswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_ENDSWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}`.str.endswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_CONTAINS(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = '`{}`.str.contains("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTSTARTWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = 'not `{}`.str.startswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTENDWITH(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = 'not `{}`.str.endswith("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_STRING,
    matches=FIELD_STRING,
)
def DATA_COL_FILTER_TEXT_NOTCONTAIN(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='object')
    column = column[0] if isinstance(column, list) else column
    matches = matches if isinstance(matches, str) else None 
    if column is not None and matches is not None:
        matches = 'not `{}`.str.contains("{}")'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_NOTEQUAL(df, column=None, matches=None):
    '''Hides rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` != {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_EQUAL(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` == {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df
    
@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_LT(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` < {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

@registerService(
    column=OPTION_FIELD_SINGLE_COL_NUMBER,
    matches=FIELD_NUMBER,
)
def DATA_COL_FILTER_NUM_GT(df, column=None, matches=None):
    '''Keeps rows with specified filter criteria'''
    column = colHelper(df, column, max=1, type='number')
    column = column[0] if isinstance(column, list) else column
    try:
        matches = int(matches)
    except:
        matches = None 
    if column is not None and matches is not None:
        matches = '`{}` > {}'.format(column, matches)
        logger.debug('pp.data > Filtered columns by: {}'.format(matches))
        return DATA_COL_FILTER(df, matches)
    else:
        logger.debug('pp.data > Filter columns skipped')
        return df

def DATA_COL_FORMAT_TYPE(df, columns=None, typ='str'):
    '''Format specified columns as specfied type'''
    max = 1 if columns is None else None
    columns = colHelper(df, columns, max=max)
    if isinstance(typ, str):
        converter = {c:t for c,t in zip(columns, [typ for i in range(0, len(columns))])}
    else: #array
        converter = {c:t for c,t in zip(columns, typ)}
    df = df.astype(converter)
    logger.debug('pp.data > Changed column type to {} for these columns: {}'.format(typ, columns))
    return df

pp.data.DATA_COL_FORMAT_TYPE = DATA_COL_FORMAT_TYPE


@registerService(
    #columns=OPTION_FIELD_SINGLE_COL_STRING,
    before=FIELD_STRING,
    after=FIELD_STRING,
)
def DATA_COL_FORMAT_REPLACE_TEXT(df, columns=None, before='', after=''):
    '''Round numerical column values to specified decimal'''
    #eval_string = 'cell.replace("{}","{}", regex=True)'.format(str(before), str(after))
    #df = pp.data._DATA_COL_FORMAT_CUSTOM(df=df, columns=columns, eval_string=eval_string)
    df = df.replace(before, after, regex=True)
    return df

@registerService(
    columns=OPTION_FIELD_SINGLE_COL_STRING,
)
def DATA_UNPIVOT(df, columns=None):
    columns = colHelper(df, columns)
    df = pd.melt(df, id_vars=columns)
    logger.debug('pp.data > Unpivot dataframe')
    return df

pp.data.DATA_UNPIVOT = DATA_UNPIVOT


'''
End patch
'''




    
