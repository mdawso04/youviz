from django import template
from django.utils.html import conditional_escape
from django.utils.safestring import mark_safe

from datetime import date, timedelta

from projects.models import Activity, Profile, ItemView
from django.urls import reverse

register = template.Library()

#filters

ui_map = {
    #'DATA_COL_FILTER': 'Filter: custom criteria',
    #'DATA_COL_FILTER_MISSING': 'Filter: missing values',
    'DATA_COL_FILTER_TEXT_NOTEQUAL': 'Text is not',
    'DATA_COL_FILTER_TEXT_EQUAL': 'Text is',
    'DATA_COL_FILTER_TEXT_STARTSWITH': 'Text starts with',
    'DATA_COL_FILTER_TEXT_ENDSWITH': 'Text ends with',
    'DATA_COL_FILTER_TEXT_CONTAINS': 'Text contains',
    'DATA_COL_FILTER_TEXT_NOTSTARTWITH': 'Text does not start with',
    'DATA_COL_FILTER_TEXT_NOTENDWITH': 'Text does not end with',
    'DATA_COL_FILTER_TEXT_NOTCONTAIN': 'Text does not contain',
    'DATA_COL_FILTER_NUM_NOTEQUAL': 'Number is not',
    'DATA_COL_FILTER_NUM_EQUAL': 'Number is',
    'DATA_COL_FILTER_NUM_LT': 'Number is less than',
    'DATA_COL_FILTER_NUM_GT': 'Number is more than',
    #'DATA_COL_FORMAT_ADD_PREFIX': 'Transform col: add prefix',
    #'DATA_COL_FORMAT_ADD_SUFFIX': 'Transform col: add suffix',
    #'DATA_COL_FORMAT_FILL_DOWN': 'Transform col: fill down',
    #'DATA_COL_FORMAT_FILL_UP': 'Transform col: fill up',
    #'DATA_COL_FORMAT_REPLACE': 'Replace',
    'DATA_COL_FORMAT_REPLACE_TEXT': 'Replace text',    
    #'DATA_COL_FORMAT_REPLACE_MISSING': 'Transform col: replace missing',
    #'DATA_COL_FORMAT_ROUND': 'Transform col: round',
    #'DATA_COL_FORMAT_STRIP': 'Transform col: strip',
    #'DATA_COL_FORMAT_STRIP_LEFT': 'Transform col: strip left',
    #'DATA_COL_FORMAT_STRIP_RIGHT': 'Transform col: strip right',
    #'DATA_COL_FORMAT_TO_LOWERCASE': 'Transform col: lowercase',
    #'DATA_COL_FORMAT_TO_TITLECASE': 'Transform col: titlecase',
    #'DATA_COL_FORMAT_TO_UPPERCASE': 'Transform col: uppercase',
    'DATA_COL_FORMAT_TYPE': 'Change column type',
    'DATA_COL_RENAME': 'Rename column',
    #'DATA_COL_TRANSFORM_ADD': 'Transform: add',
    #'DATA_COL_TRANSFORM_SUBTRACT': 'Transform col: subtract',
    #'DATA_COL_TRANSFORM_MULTIPLY': 'Transform col: multiply',
    #'DATA_COL_TRANSFORM_DIVIDE': 'Transform col: divide',
    #'DATA_COL_TRANSFORM_EXPONENT': 'Transform col: exponent',
    #'DATA_COL_TRANSFORM_ROOT': 'Transform col: root',
    #'DATA_COL_TRANSFORM_FLOORDIV': 'Transform col: floor division',
    #'DATA_COL_TRANSFORM_MODULUS': 'Transform col: modulus',
    'DATA_COL_ADD_INDEX': 'Add index column',
    'DATA_COL_ADD_INDEX_FROM_0': 'Add index column from 0',
    'DATA_COL_ADD_INDEX_FROM_1': 'Add index column from 1',
    #'DATA_COL_ADD_CONCATENATE': 'Add col: concatenate',
    #'DATA_COL_ADD_DUPLICATE': 'Add col: duplicate',
    #'DATA_COL_ADD_EXTRACT_BEFORE': 'Add col: extract before',
    #'DATA_COL_ADD_EXTRACT_FIRST': 'Add col: extract first',
    #'DATA_COL_ADD_EXTRACT_FROM': 'Add col: extract from',
    #'DATA_COL_ADD_EXTRACT_LAST': 'Add col: extract last',
    #'DATA_COL_ADD_FIXED': 'Add col: fixed value',
    #'DATA_COL_DELETE': 'Remove col: custom',
    'DATA_COL_DELETE_EXCEPT': 'Delete all columns except',
    'DATA_COL_REORDER_ASCENDING': 'Reorder columns asc',
    'DATA_COL_REORDER_DESCENDING': 'Reorder columns desc',
    #'DATA_COL_REORDER_MOVE_TO_BACK': 'Move col: to back',
    #'DATA_COL_REORDER_MOVE_TO_FRONT': 'Move col: to front',
    #'DATA_ROW_ADD': 'Add row',
    #'DATA_ROW_DELETE': 'Remove row: by index',
    #'DATA_ROW_KEEP_TOP': 'Remove rows: except top',
    #'DATA_ROW_KEEP_BOTTOM': 'Remove rows: except bottom',
    'DATA_ROW_REVERSE_ORDER': 'Reverse row order',
    #'DATA_COL_SORT': 'Table: sort by',
    #'DATA_ROW_TO_COLHEADER': 'Table: row to header',
    #'DATA_ROW_FROM_COLHEADER': 'Table: header to row',
    #'DATA_APPEND': 'Table: append',
    #'DATA_GROUP': 'Table: group',
    #'DATA_MERGE': 'Table: merge',
    #'DATA_TRANSPOSE': 'Table: transpose',
    #'DATA_UNPIVOT': 'Table: unpivot',
    #'DATA_PIVOT': 'Table: pivot',
    'VIZ_AREA': 'Area',
    'VIZ_BAR': 'Bar',
    'VIZ_BOX': 'Box',
    'VIZ_DATASTATS': 'Stats summary',
    'VIZ_HIST': 'Histogram',
    'VIZ_LINE': 'Line',
    'VIZ_SCATTER': 'Scatter',
    'VIZ_VIOLIN': 'Violin',
    'xaxis_categoryorder': 'x-axis order',
    'xaxis_title_text': 'x-axis title',
    'xaxis_showticklabels': 'x-axis labels',
    'xaxis_ticks': 'x-axis ticks',
    'xaxis_rangemode': 'x-axis range mode',
    'xaxis_autorange': 'x-axis autorange',
    'xaxis_showgrid': 'x-axis gridlines',
    'yaxis_categoryorder': 'y-axis order',
    'yaxis_title_text': 'y-axis title',
    'yaxis_showticklabels': 'y-axis labels',
    'yaxis_ticks': 'y-axis ticks',
    'yaxis_rangemode': 'y-axis range mode',
    'yaxis_autorange': 'y-axis autorange',
    'yaxis_showgrid': 'y-axis gridlines',
    'facet_col': 'columns',
    'facet_row': 'rows', 
}

ui_map_summary = {
    'DATA_COL_FILTER': "{0}", 
    'DATA_COL_FILTER_MISSING': "{0} is not missing",
    'DATA_COL_FILTER_TEXT_NOTEQUAL': "Is not '{1}'",
    'DATA_COL_FILTER_TEXT_EQUAL': "Is '{1}'",
    'DATA_COL_FILTER_TEXT_STARTSWITH': "Starts with '{1}'",
    'DATA_COL_FILTER_TEXT_ENDSWITH': "Ends with '{1}'",
    'DATA_COL_FILTER_TEXT_CONTAINS': "Contains '{1}'",
    'DATA_COL_FILTER_TEXT_NOTSTARTWITH': "Doesn't start with '{1}'",
    'DATA_COL_FILTER_TEXT_NOTENDWITH': "Doesn't end with '{1}'",
    'DATA_COL_FILTER_TEXT_NOTCONTAIN': "Doesn't contain '{1}'",
    'DATA_COL_FILTER_NUM_NOTEQUAL': "Is not {1}",
    'DATA_COL_FILTER_NUM_EQUAL': "Is {1}",
    'DATA_COL_FILTER_NUM_LT': "Less than {1}",
    'DATA_COL_FILTER_NUM_GT': "More than {1}",
    'DATA_COL_FORMAT_ADD_PREFIX': 'Transform col: add prefix',
    'DATA_COL_FORMAT_ADD_SUFFIX': 'Transform col: add suffix',
    'DATA_COL_FORMAT_FILL_DOWN': 'Transform col: fill down',
    'DATA_COL_FORMAT_FILL_UP': 'Transform col: fill up',
    'DATA_COL_FORMAT_REPLACE': 'Transform col: replace custom',
    'DATA_COL_FORMAT_REPLACE_TEXT': "Replace '{1}'",   
    'DATA_COL_FORMAT_REPLACE_MISSING': 'Transform col: replace missing',
    'DATA_COL_FORMAT_ROUND': 'Transform col: round',
    'DATA_COL_FORMAT_STRIP': 'Transform col: strip',
    'DATA_COL_FORMAT_STRIP_LEFT': 'Transform col: strip left',
    'DATA_COL_FORMAT_STRIP_RIGHT': 'Transform col: strip right',
    'DATA_COL_FORMAT_TO_LOWERCASE': 'Transform col: lowercase',
    'DATA_COL_FORMAT_TO_TITLECASE': 'Transform col: titlecase',
    'DATA_COL_FORMAT_TO_UPPERCASE': 'Transform col: uppercase',
    'DATA_COL_FORMAT_TYPE': 'Transform col: change data type',
    'DATA_COL_RENAME': 'Tranform col: rename',
    'DATA_COL_TRANSFORM_ADD': 'Transform: add',
    'DATA_COL_TRANSFORM_SUBTRACT': 'Transform col: subtract',
    'DATA_COL_TRANSFORM_MULTIPLY': 'Transform col: multiply',
    'DATA_COL_TRANSFORM_DIVIDE': 'Transform col: divide',
    'DATA_COL_TRANSFORM_EXPONENT': 'Transform col: exponent',
    'DATA_COL_TRANSFORM_ROOT': 'Transform col: root',
    'DATA_COL_TRANSFORM_FLOORDIV': 'Transform col: floor division',
    'DATA_COL_TRANSFORM_MODULUS': 'Transform col: modulus',
    'DATA_COL_ADD_INDEX': 'Add col: index',
    'DATA_COL_ADD_INDEX_FROM_0': "New index column '{0}'",
    'DATA_COL_ADD_INDEX_FROM_1': "New index column '{0}'",
    'DATA_COL_ADD_CONCATENATE': 'Add col: concatenate',
    'DATA_COL_ADD_DUPLICATE': 'Add col: duplicate',
    'DATA_COL_ADD_EXTRACT_BEFORE': 'Add col: extract before',
    'DATA_COL_ADD_EXTRACT_FIRST': 'Add col: extract first',
    'DATA_COL_ADD_EXTRACT_FROM': 'Add col: extract from',
    'DATA_COL_ADD_EXTRACT_LAST': 'Add col: extract last',
    'DATA_COL_ADD_FIXED': 'Add col: fixed value',
    'DATA_COL_DELETE': 'Remove col: custom',
    'DATA_COL_DELETE_EXCEPT': 'Remove col: all except',
    'DATA_COL_REORDER_ASCENDING': 'Move col: reorder asc',
    'DATA_COL_REORDER_DESCENDING': 'Move col: reorder desc',
    'DATA_COL_REORDER_MOVE_TO_BACK': 'Move col: to back',
    'DATA_COL_REORDER_MOVE_TO_FRONT': 'Move col: to front',
    'DATA_ROW_ADD': 'Add row',
    'DATA_ROW_DELETE': 'Remove row: by index',
    'DATA_ROW_KEEP_TOP': 'Remove rows: except top',
    'DATA_ROW_KEEP_BOTTOM': 'Remove rows: except bottom',
    'DATA_ROW_REVERSE_ORDER': 'Table: reverse sort',
    'DATA_COL_SORT': 'Table: sort by',
    'DATA_ROW_TO_COLHEADER': 'Table: row to header',
    'DATA_ROW_FROM_COLHEADER': 'Table: header to row',
    'DATA_APPEND': 'Table: append',
    'DATA_GROUP': 'Table: group',
    'DATA_MERGE': 'Table: merge',
    'DATA_TRANSPOSE': 'Table: transpose',
    'DATA_UNPIVOT': 'Table: unpivot',
    'DATA_PIVOT': 'Table: pivot',
    
    

}

@register.filter
def for_ui(value):
    try:
        return ui_map[value]
    #except (ValueError, ZeroDivisionError):
    except:
        return value
    
@register.simple_tag
def for_ui_summary(lookup_key, str_params):
    try:
        return ui_map_summary[lookup_key].format(*str_params)
    except:
        return ui_map_summary[lookup_key].format('...', '...', '...', '...',)
    
@register.filter()
def for_ui_sorted(value_list):
    try:
        key_value_dict = {for_ui(i): i for i in value_list if i in ui_map}
    except:
        key_value_dict = {i: i for i in value_list}
    return sorted(key_value_dict.items())

@register.filter()
def field_name_to_label(value):
    value = value.replace('_', ' ')
    return value.title()

@register.filter
def divide(value, arg):
    try:
        return int(value) / int(arg)
    except (ValueError, ZeroDivisionError):
        return None
    
@register.filter(name='zip')
def zip_lists(a, b):
    return zip(a, b)

#tags
    
@register.simple_tag
def is_owner(user, obj):
    return obj.is_owner(user=user)

@register.simple_tag
def is_favorite(item, user):
    for a in user.activities.all():
        if item == a.datasource:
            return True
    return False

@register.simple_tag
def value_is_selected(cache_dict, option_name, current_value):
    if isinstance(cache_dict, dict):
        if option_name in cache_dict:
            if cache_dict[option_name] == current_value:
                return 'selected'
    return ''

@register.simple_tag
def no_value_selected(cache_dict, option_name):
    if isinstance(cache_dict, dict):
        if option_name in cache_dict:
            if option_name in cache_dict:
                return ' '
    return 'selected'

@register.simple_tag
def custom_selected(avail_dict, sel_dict, key):
    if isinstance(avail_dict, dict) and isinstance(sel_dict, dict):
        default_options = ['Auto'] + avail_dict[key]
        selection_saved = True if key in sel_dict else False
        no_selection_saved = not selection_saved
        if selection_saved:
            #selection is in stringified form so change back first
            current_selection = None if sel_dict[key] == 'None' else sel_dict[key]
            selection_in_default_options = current_selection in default_options
        else:
            current_selection = 'Auto'
        
        if no_selection_saved:
            return False
        if current_selection == ' ' and ' ' in default_options:
            return True
        if current_selection not in default_options:
            return True
        
                    
@register.simple_tag
def get_select_options(avail_dict, sel_dict, key):
    '''
    Reserved names: ' ' (custom), 'Auto' (auto)
    '''
    if isinstance(avail_dict, dict) and isinstance(sel_dict, dict):
        default_options = ['Auto'] + avail_dict[key]
        selection_saved = True if key in sel_dict else False
        no_selection_saved = not selection_saved
        if selection_saved:
            #selection is in stringified form so change back first
            current_selection = None if sel_dict[key] == 'None' else sel_dict[key]
            selection_in_default_options = current_selection in default_options
        else:
            current_selection = 'Auto'
        #watch for 'None' vs None
        
        if no_selection_saved or selection_in_default_options:
            #options as is
            dynamic_options = default_options
            dynamic_options_text = ['Custom' if o == ' ' else o for o in default_options]
        else:
            #replace custom option
            dynamic_options = [current_selection if o == ' ' else o for o in default_options]
            dynamic_options_text = ['Custom' if o == ' ' else o for o in default_options]
            
        dynamic_options_selection = ['selected' if current_selection == d else '' for d in dynamic_options]
        return zip(dynamic_options, dynamic_options_text, dynamic_options_selection)

'''
@register.simple_tag
def custom_selected(avail_dict, sel_dict, key):
    if isinstance(avail_dict, dict) and isinstance(sel_dict, dict):
        if key not in sel_dict:
            return False
        else:
            value = sel_dict[key]
            value = None if value == 'None' else value
            if value == ' ':
                return True
            else:
                if value not in avail_dict[key]:
                    return True
                else:
                    return False
'''                    

@register.simple_tag
def custom_input_required(avail_dict, sel_dict, key):
    if ' ' in avail_dict[key]:
        return True
    return False
        
@register.simple_tag
def saved_value(cache_dict, option_name):
    if isinstance(cache_dict, dict):
        if option_name in cache_dict:
            return cache_dict[option_name]
    return ''

@register.simple_tag
def datasource_views_for_user(user, timeframe='all'):
    delta = {
        'day': 1,
        'week': 7,
        'month': 30,
        'year': 365,
        'all': 9999,
    }
    date_filter = date.today() - timedelta(days=delta.get(timeframe, 9999))    
    try:
        count = ItemView.objects.filter(datasource__owner=user, created_at__gte=date_filter).count()
    except:
        count = ''
    return count

@register.inclusion_tag("templatetags/datasource_form.html", takes_context=True)
def datasource_form(context):
    return context

@register.inclusion_tag("templatetags/input_switch.html", takes_context=True)
def input_switch(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey
    '''
    return kwargs

@register.inclusion_tag("templatetags/input_text.html", takes_context=True)
def input_text(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey
    '''
    return kwargs

@register.inclusion_tag("templatetags/input_text_custom.html", takes_context=True)
def input_text_custom(context, **kwargs):
    '''
    model, modelvalue, partial, partialid, partialkey
    '''
    return kwargs

@register.inclusion_tag("templatetags/input_textarea.html", takes_context=True)
def input_textarea(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey
    '''
    return kwargs

@register.inclusion_tag("templatetags/modal_ok_cancel.html", takes_context=True)
def modal_ok_cancel(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey
    '''
    return kwargs

@register.inclusion_tag("templatetags/modal_link.html", takes_context=True)
def modal_link(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey
    '''
    return kwargs

@register.inclusion_tag("templatetags/input_select.html", takes_context=True)
def input_select(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey, options
    '''
    return kwargs

@register.inclusion_tag("templatetags/bnav_button.html", takes_context=True)
def bnav_button(context, **kwargs):
    '''
    model, modelvalue, label, partial, partialid, partialkey, options
    '''
    mode = context['context']['mode']
    config = {
        'home': {
            'label': 'Home',
            'icon': 'bi-house',
            'on': mode in ('list',),
            'disabled': mode in ('list',),
            'onclick': {
                'view': "window.location.href='{}';".format(reverse('list')),
                'new': "window.location.href='{}';".format(reverse('list')),
                'user': "window.location.href='{}';".format(reverse('list')),
            }.get(mode),
        },
        'view': {
            'label': 'View',
            'icon': 'bi-book',
            'on': mode in ('view',),
            'disabled': mode in ('list', 'view', 'new', 'user',),
            'onclick': {}.get(mode),
        },
        'new': {
            'label': {
                'list': 'New',
                'user': 'New',
                'view': 'New',
                'new': 'Cancel',
            }.get(mode),
            'icon': {
                'list': 'bi-plus-circle',
                'user': 'bi-plus-circle',
                'view': 'bi-plus-circle',
                'new': 'bi-x-circle',
            }.get(mode),
            'on': False,
            'disabled': False,
            'onclick': {
                'list': "window.location.href='{}?o=datamenu';".format(reverse('new')),
                'user': "window.location.href='{}?o=datamenu';".format(reverse('new')),
                'view': "window.location.href='{}?o=datamenu';".format(reverse('new')),
                'new': "history.back();",
            }.get(mode)
        },
        'copy': {
            'label': 'Copy',
            'icon': 'bi-copy',
            'on': False,
            'disabled': False,
            'onclick': "Unicorn.call('app', 'copy_datasource', {});".format(getattr(context.get('datasource'), 'pk', None)),
        },
    }
    return config[kwargs['button']] | kwargs