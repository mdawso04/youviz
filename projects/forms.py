from django.forms import ModelForm, Textarea, CheckboxInput
from django.forms import fields, models
from django.utils.translation import gettext_lazy as _
from .models import BaseModel, Datastream
from django.core.exceptions import ValidationError
from entangled.forms import EntangledModelForm, EntangledModelFormMixin
from django.forms import BaseModelFormSet, ChoiceField
from django import forms
from .models import Datasource, Viz
from copy import *
from .util import *
import os


'''
My workaround was to register a custom pickle handler for the django.forms.renderers.
DjangoTemplates renderer so that it wouldn't save any state when pickling. 
On unpickling, the object is re-created from scratch.
'''
import copyreg
from django.forms.renderers import DjangoTemplates

def pickle_django_templates(instance):
    return DjangoTemplates, ()

copyreg.pickle(DjangoTemplates, pickle_django_templates)

#end

class BaseForm(ModelForm):
    template_name = "form.html"
    form_id = None
    error_css_class = "error"
    #required_css_class = "required"
    index = None
    custom_config = None
    buttons = None
    CUSTOM_CONFIG_TAGS = {
        '{index}': 'index',
        '{unicorn_model}': 'unicorn_model',
    }
    field_groups = None
    unicorn_view_key = None
    
    DEFAULT_LIST_OPTION = ('', 'Auto',)
    
    
    class Meta:
        model = BaseModel
        fields = ("name", "description", "is_published")
        widgets = {
            "name": Textarea(),
            "description": Textarea(),
            "is_published": CheckboxInput(),
        }
        labels = {
            "name": _("Name"),
            "description": _("Description"),
            "is_published": _("Is published"),
        }
        help_texts = {
            #"name": _("The item name."),
            #"description": _("The item description."),
            #"is_published": _("THe published switch."),
        }
        error_messages = {
            "name": {
                "max_length": _("This writer's name is too long."),
            },
            "description": {
                "max_length": _("This writer's name is too long."),
            },
            "is_published": {
                "max_length": _("This writer's name is too long."),
            },
        }
        buttons = {
            "ok": {
                "label": _("OK"),
                "display": True,
                "disable": lambda f: f.index is None,
                "attrs":{
                    'class': 'button',
                }
            },
            "cancel": {
                "label": _("Cancel"),
                "display": False,
                "disable": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "copy": {
                "label": _("Copy"),
                "display": False,
                "disable": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "delete": {
                "label": _("Delete"),
                "display": False,
                "disable": False,
                "attrs":{
                    'class': 'button',
                }
            },
        }
        exclude_short_field_names = ()
        exclude_full_field_names = ()
        
        
        
        '''
        max_length
        min_length
        required
        invalid
        invalid_choice
        max_digits, max_decimal_places, max_whole_digits, step_size
        overflow
        missing
        empty
        invalid_image
        invalid_list
        '''
        
    CUSTOM_CONFIG_BASE = {
        'initial': {
            'form': {
                'form': {
                    'title': _(''),
                },
                'cover': {
                    'title': _(''),
                },
            },
            'widgets': {
                'name': {
                    'class': 'form-control',
                    'rows': 4,
                    'unicorn:model.lazy': '{unicorn_model}.name',
                    #'unicorn:partial': '',
                    #'unicorn:partial.id': '',
                    #'unicorn:partial.key': '',
                },
                'description': {
                    'class': 'form-control',
                    'rows': 4,
                    'unicorn:model.lazy': '{unicorn_model}.description',
                    #'unicorn:partial': '',
                    #'unicorn:partial.id': '',
                    #'unicorn:partial.key': '',
                },
                'is_published': {
                    'class': 'form-check-input',
                    "type": "checkbox",
                    "role": "switch",
                    #'unicorn:model.lazy': '{unicorn_model}.is_published',
                    #'unicorn:partial': '',
                    #'unicorn:partial.id': 'e',
                    #'unicorn:partial.key': '',
                },
            },
            'buttons': {
                "ok": {
                    "display": False,
                },
                "cancel": {
                    "display": False,
                },
                "copy": {
                    "display": False,
                },
                "delete": {
                    "display": False,
                },
            },
        },
        'empty': {
            'form': {
                'form': {
                    'title': _(''),
                },
                'cover': {
                    'title': _(''),
                },
            },
            'widgets': {
                'name': {
                    'class': 'form-control',
                    'rows': 4,
                    'unicorn:model.lazy': '{unicorn_model}.name',
                    #'unicorn:partial': '',
                    #'unicorn:partial.id': '',
                    #'unicorn:partial.key': '',
                },
                'description': {
                    'class': 'form-control',
                    'rows': 4,
                    'unicorn:model.lazy': '{unicorn_model}.description',
                    #'unicorn:partial': '',
                    #'unicorn:partial.id': '',
                    #'unicorn:partial.key': '',
                },
                'is_published': {
                    'class': 'form-check-input',
                    "type": "checkbox",
                    "role": "switch",
                    #'unicorn:model.lazy': '{unicorn_model}.is_published',
                    #'unicorn:partial': '',
                    #'unicorn:partial.id': 'e',
                    #'unicorn:partial.key': '',
                },
            },
            'buttons': {
                "ok": {
                    "display": False,
                },
                "cancel": {
                    "display": False,
                },
                "copy": {
                    "display": False,
                },
                "delete": {
                    "display": False,
                },
            },
        }
    }
    
    def __init__(self, *args, **kwargs):
        #custom form attrs
        self.form_id = kwargs.pop('form_id', os.urandom(6).hex())
        self.unicorn_model = kwargs.pop('unicorn_model', None)
        if type(self.unicorn_model) == tuple:
            self.unicorn_model = self.unicorn_model[0]
        self.index = kwargs.pop('index', None)
        self.formset = kwargs.pop('formset', None)
        self.form_mode = kwargs.pop('form_mode', None)
        if type(self.form_mode) == tuple:
            self.form_mode = self.form_mode[0]
        self.custom_config = kwargs.pop('custom_config', None)
        if type(self.custom_config) == tuple:
            self.custom_config = self.custom_config[0]
        self.unicorn_view_key = kwargs.pop('unicorn_view_key', 'WARNING: NO KEY DEFINED')
            
        self.field_groups = {}
        
        #build baseform
        super(BaseForm, self).__init__(*args, **kwargs)
        
        #apply custom config
        
    def apply_custom_config(self):
        if self.custom_config and self.form_mode:
            #substitute index
            custom_config_for_current_form_mode = deepcopy(self.custom_config[self.form_mode])
            #TODO replace index, buttons
            replacements = {k: getattr(self, v, '') for k, v in self.CUSTOM_CONFIG_TAGS.items() if getattr(self, v, '') is not None}
            #print(replacements.items())
            def replace_handler(value):
                if isinstance(value, str):
                    for o_word, n_word in replacements.items():
                        value = value.replace(str(o_word), str(n_word))
                return value
            indexed_config = {
                k: {k1: {k2: replace_handler(v2) for k2, v2 in v1.items()} for k1, v1 in v.items()} for k, v in custom_config_for_current_form_mode.items()
            }
            form_config = indexed_config['form']
            for k, v in form_config.items():
                for k1, v1 in v.items():
                    setattr(self, '{}_{}'.format(k, k1), v1)
            widget_config = indexed_config['widgets']
            for k in widget_config.keys():
                if k in self.fields:
                    self.fields[k].widget.attrs.update(widget_config.get(k, None))
            button_config = indexed_config['buttons']
            if hasattr(self.__class__.Meta, 'buttons'):
                self.buttons = deepcopy(self.__class__.Meta.buttons | button_config)
            else:
                self.buttons = deepcopy(button_config)
            if self.buttons:
                for b in self.buttons.values():
                    if 'display' in b and callable(b['display']):
                        b['display'] = b['display'](self) 
                    if 'disable' in b and callable(b['disable']):
                        b['disable'] = b['disable'](self) 
                        
    def clean(self):
        cleaned_data = super().clean()
        name = self.cleaned_data.get('name')
        if name and len(name) < 4:
            self.add_error('name', "Name needs to be more than 4 characters.")
        
        #if name and description and name != description:
        #raise ValidationError(
        #    "Test exception"
        #)
        return cleaned_data
    
    def _build_form_group(self, choices):
        for group_name, grouped_choices in choices.items():
            self.fields[group_name] = forms.CharField(label=group_name)
            self.fields[group_name].widget.attrs.update(
                {'class': 'form-control',
                 'value': group_name,
                }
            )
            self.fields[group_name].required = True
            self.fields[group_name].disabled = True
            self.field_groups.setdefault(group_name, []).append(self[group_name])
            
            self._build_form(group_name, grouped_choices)
        
    def _build_form(self, field_group_name, choices):
        full_field_names = list(choices.keys())
        short_field_names = [n.split('.')[-1] for n in full_field_names]
        
        #build form
        for idx, current_full_field_name in enumerate(full_field_names):
            current_short_field_name = short_field_names[idx]
            if current_short_field_name not in self.Meta.exclude_short_field_names: 
                if choices[current_full_field_name] is not None and type(choices[current_full_field_name]) is not str:
                    #if current value is not in current choices
                    current_field_value = self.data.get(current_full_field_name, None)
                    enable_custom_value_charfield = 'custom' in choices[current_full_field_name]
                    field_choices = [(choice, choice,) for choice in choices[current_full_field_name]]
                    field_choices.insert(0, self.DEFAULT_LIST_OPTION)
                    if enable_custom_value_charfield:
                        custom_option_is_selected = current_field_value is not None and (current_field_value == 'custom' or current_field_value not in choices[current_full_field_name])
                        #print('self.data BEFORE: {}'.format(self.data))
                        
                        #select field (unicorn ignore patch, no unicorn model)
                        #onchange_patch = "Unicorn.call('{}', 'm_update', '{}', this.value);".format(self.unicorn_view_key, self.unicorn_model + '.' + current_full_field_name)
                        self.fields[current_full_field_name] = forms.TypedChoiceField(label=current_short_field_name, choices=field_choices, coerce=coerce_value, empty_value='')
                        #self.fields[current_full_field_name].widget.attrs.update(self._get_widget_attr(current_full_field_name, kwargs={'class': 'form-select', 'unicorn:ignore':'', 'onchange': onchange_patch}))
                        self.fields[current_full_field_name].widget.attrs.update(self._get_widget_attr(current_full_field_name, kwargs={'class': 'form-select'}))
                        self.fields[current_full_field_name].required = False
                        
                        #extra charfield intercept
                        custom_for_current_full_field_name = current_full_field_name + '_custom'
                        #custom_for_current_full_field_name = current_full_field_name
                        self.fields[custom_for_current_full_field_name] = forms.CharField(label='')
                        self.fields[custom_for_current_full_field_name].widget.attrs.update(self._get_widget_attr(custom_for_current_full_field_name))
                        self.fields[custom_for_current_full_field_name].required = False
                        if custom_option_is_selected:
                            self.data[custom_for_current_full_field_name] = deepcopy(current_field_value)
                            self.data[current_full_field_name] = 'custom'
                            self.fields[custom_for_current_full_field_name].disabled = False
                            self.fields[custom_for_current_full_field_name].help_text = 'enter a custom value'
                        else:
                            self.fields[custom_for_current_full_field_name].disabled = True
                            self.fields[custom_for_current_full_field_name].help_text = 'custom not selected'
                        #switch data to sync select and custom field
                        #print('custom option selected for {}: {}'.format(current_full_field_name, custom_option_is_selected))
                        #print('self.data AFTER: {}'.format(self.data))
                        
                    else: 
                        #select field only
                        self.fields[current_full_field_name] = forms.TypedChoiceField(label=current_short_field_name, choices=field_choices, coerce=coerce_value, empty_value='')
                        self.fields[current_full_field_name].widget.attrs.update(self._get_widget_attr(current_full_field_name, kwargs={'class': 'form-select'}))
                        self.fields[current_full_field_name].required = False                        
                else:
                    self.fields[current_full_field_name] = forms.CharField(label=current_short_field_name)
                    self.fields[current_full_field_name].widget.attrs.update(self._get_widget_attr(current_full_field_name))
                    self.fields[current_full_field_name].required = False
                #copy sefl[key] to group
                if field_group_name:
                    self.field_groups[field_group_name].append(self[current_full_field_name])
    
    def _get_widget_attr(self, full_field_name, kwargs={}):
        return kwargs
        
class DatastreamForm(EntangledModelFormMixin, BaseForm):
    source = fields.CharField(
        max_length=200,
        required=False,
        help_text="Some useful help text.",
        label=_("source"),
    )
    
    class Meta:
        model = Datastream
        fields = BaseForm.Meta.fields + ('datastream_type', "url", "json", 'source',)
        entangled_fields = {'properties': ['source', ]}
        #untangled_fields = BaseForm.Meta.fields + ('datastream_type', "url", "json",)
        widgets = dict_deep_merge(BaseForm.Meta.widgets, {
            "url": Textarea(),
            "json": Textarea(),
        })
        labels = dict_deep_merge(BaseForm.Meta.labels, {
            "datastream_type": _('datastream_type'),
            "url": _('url'),
            "json": _('json'),
            #custom labels too
            "ok_button": _('OK'),
            "cancel_button": _('Cancel'),
            "delete_button": _('Delete'),
        })
        help_texts = dict_deep_merge(BaseForm.Meta.help_texts, {
            "datastream_type": _("Some useful help text."),
            "url": _("Some useful help text."),
            "json": _("Some useful help text."),
        })
        error_messages = dict_deep_merge(BaseForm.Meta.error_messages, {
            "url": {
                "max_length": _("This writer's name is too long."),
            },
            "json": {
                "max_length": _("This writer's name is too long."),
            },
        })   
        #buttons - none
    
    CUSTOM_CONFIG_VIEW = dict_deep_merge(BaseForm.CUSTOM_CONFIG_BASE, {
        'initial': {
            'form': {
                'form': {
                    'title': _('Datasource Details View'),
                    'id': _('datastream_form'),
                    'key': _('datastream_form'),
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    'unicorn:partial.key': 'datastream_form',
                },
                'description': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    'unicorn:partial.key': 'datastream_form',
                },
                'is_published': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    'unicorn:partial.key': 'datastream_form',
                },'datastream_type': {
                    'class': 'form-select',
                    'unicorn:model.lazy': '{unicorn_model}.datastream_type',
                    'unicorn:partial.key': 'datastream_form',
                },'url': {
                    'rows': 6,
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.url',
                    'style': 'word-break: break-all;',
                    'unicorn:partial.key': 'datastream_form',
                },'json': {
                    'rows': 6,
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.json',
                    'style': 'word-break: break-all;',
                    'unicorn:partial.key': 'datastream_form',
                },'source': {
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.properties.source',
                    'unicorn:partial.key': 'datastream_form',
                },
            },
            'buttons': {
                "ok": {
                    "display": False,
                },
                "cancel": {
                    "display": False,
                },
                "copy": {
                    "display": False,
                },
                "delete": {
                    "label": _("Delete"),
                    "display": True,
                    "disable": True,
                    "attrs":{
                        'class': 'btn btn-danger btn-sm',
                        'unicorn:click': 'delete_datasource',
                    }
                },
            },
        },
    })
    
    CUSTOM_CONFIG_NEW = dict_deep_merge(BaseForm.CUSTOM_CONFIG_BASE, {
        'initial': {
            'form': {
                'form': {
                    'title': _('Datasource Details View'),
                    'id': 'datastream_form_{index}',
                    'key': 'datastream_form_{index}',
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'list-card-{index}',
                    'unicorn:partial.id': 'form-cover-{index}',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'description': {
                    'unicorn:partial': 'list-card-{index}',
                    'unicorn:partial.id': 'form-cover-{index}',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'is_published': {
                    'unicorn:partial': 'list-card-{index}',
                    'unicorn:partial.id': 'form-cover-{index}',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },'datastream_type': {
                    'class': 'form-select',
                    'unicorn:model.lazy': '{unicorn_model}.datastream_type',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },'url': {
                    'rows': 6,
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.url',
                    'style': 'word-break: break-all;',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },'json': {
                    'rows': 6,
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.json',
                    'style': 'word-break: break-all;',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },'source': {
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.properties.source',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
            },
            'buttons': {
                "ok": {
                    "label": _("OK"),
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "cancel": {
                    "label": _("Cancel"),
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "copy": {
                    "label": _("Copy"),
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "delete": {
                    "label": _("Delete"),
                    "display": True,
                    "disable": True,
                    "attrs":{
                        'class': 'btn btn-danger btn-sm',
                        'unicorn:click': 'delete_datasource',
                    }
                },
            },
        },
        'empty': {
            'form': {
                'form': {
                    'title': _('Datasource Details View'),
                    'id': 'datastream_form_{index}',
                    'key': 'datastream_form_{index}',
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'description': {
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'is_published': {
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'datastream_type': {
                    'class': 'form-select',
                    'unicorn:model.lazy': '{unicorn_model}.datastream_type',
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'url': {
                    'rows': 6,
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.url',
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'json': {
                    'rows': 6,
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.json',
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
                'source': {
                    'class': 'form-control',
                    'unicorn:model.lazy': '{unicorn_model}.source',
                    'unicorn:partial': 'form-{index}-body',
                    'unicorn:partial.key': 'datastream_form_{index}',
                },
            },
            'buttons': {
                "ok": {
                    "label": _("Create new datatsource"),
                    "display": True,
                    "disable": lambda f: not f.has_changed() or not f.is_valid(),
                    "attrs":{
                        'class': 'btn btn-primary btn-sm',
                        'unicorn:click': 'add_datastream',
                    }
                },
                "cancel": {
                    "label": _("Cancel"),
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "copy": {
                    "label": _("Copy"),
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "delete": {
                    "label": _("Delete"),
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
            },
        },
    })

    def __init__(self, *args, **kwargs):
        super(DatastreamForm, self).__init__(*args, **kwargs)
        self.apply_custom_config()
        
    def clean(self):
        cleaned_data = super().clean()
        name = self.cleaned_data.get('name')
        if name and len(name) < 4:
            self.add_error('name', "Name needs to be more than 3 characters.")
        
        '''        
        if name and description and name != description:
            raise ValidationError(
                "Name and description don't match"
            )
        '''
        return cleaned_data
        
class BaseDatastreamFormSet(BaseModelFormSet):
    def __init__(self, *args, **kwargs):
        self.custom_config = kwargs.pop('custom_config', None)
        super(BaseDatastreamFormSet, self).__init__(*args, **kwargs)
        
    def get_form_kwargs(self, index):
        kwargs = super().get_form_kwargs(index)
        if index == self.initial_form_count():
            kwargs['unicorn_model'] = ('new_datastream',)
            kwargs['form_mode'] = ('empty',)
        else:
            kwargs['unicorn_model'] = (f'formset_datastreams.{index}',)
            kwargs['form_mode'] = ('initial',)
        if self.custom_config:
            kwargs['custom_config'] = self.custom_config
        kwargs['index'] = index
        kwargs['formset'] = self
        return kwargs
    
    def clean(self):
        """Checks that no two articles have the same title."""
        if any((self.errors, self.non_form_errors(),)):
            # Don't bother validating the formset unless each form is valid on its own
            return
        '''
        titles = set()
        for form in self.forms:
            if self.can_delete and self._should_delete_form(form):
                continue
            title = form.cleaned_data.get("title")
            if title in titles:
                raise ValidationError("Articles in a set must have distinct titles.")
            titles.add(title)
        '''
                
            
class DatasourceForm(EntangledModelFormMixin, BaseForm):
    class Meta:
        model = Datasource
        fields = BaseForm.Meta.fields
        entangled_fields = {'properties': ['source', ]}
        #untangled_fields = BaseForm.Meta.fields + ('datastream_type', "url", "json",)
        widgets = BaseForm.Meta.widgets
        #labels = BaseForm.Meta.labels
        #help_texts = BaseForm.Meta.help_texts
        #error_messages = BaseForm.Meta.error_messages
        buttons = BaseForm.Meta.buttons
        
    def __init__(self, *args, **kwargs):
        super(DatasourceForm, self).__init__(*args, **kwargs)
        self.apply_custom_config()
    
    #only initial
    CUSTOM_CONFIG_VIEW = dict_deep_merge(BaseForm.CUSTOM_CONFIG_BASE, {
        'initial': {
            'form': {
                'form': {
                    'title': _('Viz Details View'),
                    'id': _('datasource_form'),
                    'key': _('datasource_form'),
                },
                'cover': {
                    'title': _('Viz Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'details-info',
                    'unicorn:partial.id': 'infoLargeTitle',
                    'unicorn:partial.key': 'datasource_form',
                },
                'description': {
                    'unicorn:partial': 'details-infos',
                    'unicorn:partial.id': 'infoLargeTitle',
                    #'unicorn:partial.key': 'infoLargeTitle',
                },
                'is_published': {
                    'unicorn:partial': 'details-info',
                    'unicorn:partial.id': 'infoLargeTitle',
                    #'unicorn:partial.key': 'infoLargeTitle',
                },
            },
            'buttons': {
                "ok": {
                    "display": False,
                },
                "cancel": {
                    "display": False,
                },
                "copy": {
                    "display": False,
                },
                "delete": {
                    "label": _("Delete Viz"),
                    "display": True,
                    "disable": True,
                    "attrs":{
                        'class': 'btn btn-danger btn-sm',
                        'unicorn:click': 'delete_datasource',
                    }
                },
            },
        },
    })
    
    def clean(self):
        cleaned_data = super().clean()
        #name = self.cleaned_data.get('name')
        #if name and len(name) < 4:
        #    self.add_error('name', "Name needs to be more than 4 characters.")
        '''        
        if name and description and name != description:
            raise ValidationError(
                "Name and description don't match"
            )
        '''
        return cleaned_data
        
class BaseDatasourceFormSet(BaseModelFormSet):
    def get_form_kwargs(self, index):
        kwargs = super().get_form_kwargs(index)
        kwargs['unicorn_model'] = f'formset_datasources.{index}', 
        return kwargs
    
    def clean(self):
        if any((self.errors, self.non_form_errors(),)):
            # Don't bother validating the formset unless each form is valid on its own
            return
        '''
        titles = set()
        for form in self.forms:
            if self.can_delete and self._should_delete_form(form):
                continue
            title = form.cleaned_data.get("title")
            if title in titles:
                raise ValidationError("Articles in a set must have distinct titles.")
            titles.add(title)
        '''

class VizForm(EntangledModelFormMixin, BaseForm):
    #handle data and viz modes
    DATA_MODE = 'data'
    VIZ_MODE = 'viz'
    DEFAULT_MODE = VIZ_MODE
    display_mode = None
    VIEW_ATTRIBUTE_PREFIX = 'viz_buffer'
    
    class Meta:
        model = Viz
        fields = ('description',)
        entangled_fields = {'properties': ['source', ]}
        #untangled_fields = BaseForm.Meta.fields + ('datastream_type', "url", "json",)
        widgets = BaseForm.Meta.widgets
        #labels = BaseForm.Meta.labels
        #help_texts = BaseForm.Meta.help_texts
        #error_messages = BaseForm.Meta.error_messages
        buttons = BaseForm.Meta.buttons
        exclude_short_field_names = BaseForm.Meta.exclude_short_field_names + ('id', 'datasource', 'showlegend')
        exclude_full_field_names = BaseForm.Meta.exclude_full_field_names
        
    def __init__(self, *args, **kwargs):
        self.display_mode = kwargs.pop('display_mode', VizForm.DEFAULT_MODE)
        super(VizForm, self).__init__(*args, **kwargs)
        
        if self.display_mode == self.DATA_MODE:
            choices = self.instance.field_choices(filter=self.display_mode, group=True)
            self._build_form_group(choices)
        else:
            choices = self.instance.field_choices(filter=self.display_mode, group=False)
            self._build_form(field_group_name=None, choices=choices)
        
        self.apply_custom_config()
                    
    def _get_widget_attr(self, full_field_name, kwargs={}):
        if '_custom' in full_field_name:
            return {'class': 'form-control',
             'unicorn:model': '{}.{}'.format(self.unicorn_model, full_field_name),
             'unicorn:partial': 'outerPlotBox-viz-{}'.format(self.instance.pk),
             'unicorn:partial.id': self.form_id, 
             #'unicorn:partial.id': '{}_col'.format(self.fields[full_field_name].auto_id),
            } | kwargs
        else:
            return {'class': 'form-control',
             'unicorn:model': '{}.{}'.format(self.unicorn_model, full_field_name),
             'unicorn:partial': 'outerPlotBox-viz-{}'.format(self.instance.pk),
             'unicorn:partial.id': self.form_id, 
             #'unicorn:partial.id': '{}_col'.format(self[full_field_name].auto_id),'unicorn:partial.id': 'switch', 
            } | kwargs
    
    def save(self, commit=False):
        instance = super(VizForm, self).save(commit=False)
        instance.set_field_data(self.cleaned_data)
        if commit:
            instance.save()
            #self.save_m2m()
        return instance
    
    #only initial
    CUSTOM_CONFIG_VIEW = dict_deep_merge(BaseForm.CUSTOM_CONFIG_BASE, {
        'initial': {
            'form': {
                'form': {
                    'title': _('Viz Data View'),
                },
                'cover': {
                    'title': _('Viz Data View'),
                },
            },
            'buttons': {
                "ok": {
                    "display": False,
                },
                "cancel": {
                    "display": False,
                },
                "copy": {
                    "display": False,
                },
                "delete": {
                    "display": False,
                },
            },
        },
    })
    
    def clean(self):
        cleaned_data = super().clean()
        #name = self.cleaned_data.get('name')
        #if name and len(name) < 4:
        #    self.add_error('name', "Name needs to be more than 4 characters.")
        '''        
        if name and description and name != description:
            raise ValidationError(
                "Name and description don't match"
            )
        '''
        return cleaned_data
