from django import template
from django.utils.html import conditional_escape
from django.utils.safestring import mark_safe

from projects.models import Activity, Profile

register = template.Library()



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
    'xaxis-categoryorder': 'x-axis order',
    'facet_col': 'columns',
    'facet_row': 'rows',
}

@register.filter
def divide(value, arg):
    try:
        return int(value) / int(arg)
    except (ValueError, ZeroDivisionError):
        return None
    
@register.filter
def for_ui(value):
    try:
        return ui_map[value]
    #except (ValueError, ZeroDivisionError):
    except:
        return value
    
@register.simple_tag
def is_owner(user, obj):
    return obj.is_owner(user=user)

@register.simple_tag
def is_favorite(item, user):
    for a in user.activities.all():
        if item == a.datasource:
            return True
    return False

