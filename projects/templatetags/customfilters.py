from django import template
from django.utils.html import conditional_escape
from django.utils.safestring import mark_safe

from projects.models import Activity, Profile

register = template.Library()

#filters

ui_map = {
    'DATA_COL_FILTER_TEXT_NOTEQUAL': 'Hide rows if text matches',
    'DATA_COL_FILTER_TEXT_EQUAL': 'Keep rows if text matches',
    'DATA_COL_FILTER_NUM_NOTEQUAL': 'Hide rows if number matches',
    'DATA_COL_FILTER_NUM_EQUAL': 'Keep rows if number matches',
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
    'facet_col': 'columns',
    'facet_row': 'rows', 
}

@register.filter
def for_ui(value):
    try:
        return ui_map[value]
    #except (ValueError, ZeroDivisionError):
    except:
        return value

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
