from django import template
from django.utils.html import conditional_escape
from django.utils.safestring import mark_safe

from projects.models import Activity, Profile

register = template.Library()

#filters

ui_map = {
    'DATA_COL_ADD_CONCATENATE': 'Concatenate to new',
    'DATA_COL_ADD_DUPLICATE': 'Duplicate to new',
    'DATA_COL_ADD_EXTRACT_BEFORE': 'Extract before to new',
    'DATA_COL_ADD_EXTRACT_FIRST': 'Extract first to new',
    'DATA_COL_ADD_EXTRACT_FROM': 'Extract from to new',
    'DATA_COL_ADD_EXTRACT_LAST': 'Extract last to new',
    'DATA_COL_ADD_FIXED': 'New fixed',
    'DATA_COL_ADD_INDEX_FROM_0': 'New index from 0',
    'DATA_COL_ADD_INDEX_FROM_1': 'New index from 1',
    'DATA_COL_DELETE': 'Delete',
    'DATA_COL_DELETE_EXCEPT': 'Delete except',
    'DATA_COL_FILTER': 'Keep matching rows',
    'DATA_COL_FILTER_MISSING': 'Keep non-missing rows',
    'DATA_COL_FILTER_TEXT_NOTEQUAL': 'Hide rows if text matches',
    'DATA_COL_FILTER_TEXT_EQUAL': 'Keep rows if text matches',
    'DATA_COL_FILTER_NUM_NOTEQUAL': 'Hide rows if number matches',
    'DATA_COL_FILTER_NUM_EQUAL': 'Keep rows if number matches',
    'DATA_COL_FORMAT_ADD_PREFIX': 'Add prefix',
    'DATA_COL_FORMAT_ADD_SUFFIX': 'Add suffix',
    'DATA_COL_FORMAT_FILL_DOWN': 'Fill down',
    'DATA_COL_FORMAT_FILL_UP': 'Fill up',
    'DATA_COL_FORMAT_REPLACE': 'Replace',
    'DATA_COL_FORMAT_REPLACE_MISSING': 'Replace missing',
    'DATA_COL_FORMAT_ROUND': 'Round',
    'DATA_COL_FORMAT_STRIP': 'Strip',
    'DATA_COL_FORMAT_STRIP_LEFT': 'Strip left',
    'DATA_COL_FORMAT_STRIP_RIGHT': 'Strip right',
    'DATA_COL_FORMAT_TO_LOWERCASE': 'Make lowercase',
    'DATA_COL_FORMAT_TO_TITLECASE': 'Make titlecase',
    'DATA_COL_FORMAT_TO_UPPERCASE': 'Make uppercase',
    'DATA_COL_FORMAT_TYPE': 'Change type',
    'DATA_COL_RENAME': 'Rename',
    'DATA_COL_REORDER_ASCENDING': 'Reorder asc',
    'DATA_COL_REORDER_DESCENDING': 'Reorder desc',
    'DATA_COL_REORDER_MOVE_TO_BACK': 'Move to back',
    'DATA_COL_REORDER_MOVE_TO_FRONT': 'Move to front',
    'DATA_COL_SORT': 'Sort',
    'DATA_COL_TRANSFORM_ADD': 'Add',
    'DATA_COL_TRANSFORM_SUBTRACT': 'Subtract',
    'DATA_COL_TRANSFORM_MULTIPLY': 'Multiply',
    'DATA_COL_TRANSFORM_DIVIDE': 'Divide',
    'DATA_COL_TRANSFORM_EXPONENT': 'Exponent',
    'DATA_COL_TRANSFORM_ROOT': 'Root',
    'DATA_COL_TRANSFORM_FLOORDIV': 'Floor division',
    'DATA_COL_TRANSFORM_MODULUS': 'Modulus',
    'DATA_ROW_ADD': 'Add row',
    'DATA_ROW_DELETE': 'Delete row',
    'DATA_ROW_KEEP_BOTTOM': 'Keep bottom rows',
    'DATA_ROW_KEEP_TOP': 'Keep top rows',
    'DATA_ROW_REVERSE_ORDER': 'Reverse row order',
    'DATA_ROW_TO_COLHEADER': 'Promote row to header',
    'DATA_ROW_FROM_COLHEADER': 'Demote header to row',
    'DATA_APPEND': 'Append',
    'DATA_GROUP': 'Group',
    'DATA_MERGE': 'Merge',
    'DATA_TRANSPOSE': 'Transpose',
    'DATA_UNPIVOT': 'Unpivot',
    'DATA_PIVOT': 'Pivot',
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
    'xaxis_showgrid': 'x-axis gridlines',
    'yaxis_categoryorder': 'y-axis order',
    'yaxis_title_text': 'y-axis title',
    'yaxis_showticklabels': 'y-axis labels',
    'yaxis_ticks': 'y-axis ticks',
    'yaxis_showgrid': 'y-axis gridlines',
    'facet_col': 'columns',
    'facet_row': 'rows', 
}

ui_map_summary = {
    'DATA_COL_FILTER_TEXT_NOTEQUAL': "'{}' is not '{}'",
    'DATA_COL_FILTER_TEXT_EQUAL': "'{}' is '{}'",
    'DATA_COL_FILTER_NUM_NOTEQUAL': "'{}' is not '{}'",
    'DATA_COL_FILTER_NUM_EQUAL': "'{}' is '{}'",
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
        return lookup_key

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
