from django.forms import ModelForm, Textarea, CheckboxInput
from django.forms import fields, models
from django.utils.translation import gettext_lazy as _
from .models import BaseModel, Datastream
from django.core.exceptions import ValidationError
from entangled.forms import EntangledModelForm, EntangledModelFormMixin
from django.forms import BaseModelFormSet
from django import forms
from .models import Datasource
from copy import deepcopy


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
    
    class Meta:
        model = BaseModel
        fields = ("name", "description", "is_published")
        widgets = {
            "name": Textarea(
                #template_name="widget.html", #input group
                attrs={
                    "rows": 4,
                }
            ),
            "description": Textarea(
                #template_name="widget.html", #input group
                attrs={
                    "rows": 4,
                }
            ),
            
            "is_published": CheckboxInput(
                #template_name="widget.html", #input group
                attrs={
                    "type": "checkbox",
                    "role": "switch",
                }
            ),
        }
        labels = {
            "name": _("Name"),
            "description": _("Description"),
            "is_published": _("Is published"),
        }
        help_texts = {
            "name": _("The item name."),
            "description": _("The item description."),
            "is_published": _("THe published switch."),
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
    
    def __init__(self, *args, **kwargs):
        self.form_id = kwargs.pop('form_id', None)
        self.unicorn_model = kwargs.pop('unicorn_model', None)
        self.index = kwargs.pop('index', None)
        self.formset = kwargs.pop('formset', None)
        self.form_mode = kwargs.pop('form_mode', None)
        if type(self.form_mode) == tuple:
            self.form_mode = self.form_mode[0]
        self.custom_config = kwargs.pop('custom_config', None)
        if type(self.custom_config) == tuple:
            self.custom_config = self.custom_config[0]
        
        super(BaseForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'class': 'form-control',
            #'unicorn:key': 'test',
            'unicorn:model.lazy': '{}.name'.format(*self.unicorn_model),
            #'unicorn:partial': 'form-content-{}'.format(self.instance.slug),
            #'unicorn:partial.id': 'test',
            #'unicorn:partial.key': 'test',
            "rows": 4,
        })
        self.fields['description'].widget.attrs.update({
            'class': 'form-control',
            #'unicorn:key': 'test',
            'unicorn:model.lazy': '{}.description'.format(*self.unicorn_model),
            #'unicorn:partial': self.form_id,
            #'unicorn:partial.id': 'fileInfo',
            #'unicorn:partial.key': 'test',
            #'unicorn:dirty.attr': 'readonly',
            "rows": 4, 
        })
        self.fields['is_published'].widget.attrs.update({
            'class': 'form-check-input',
            #'unicorn:key': 'test',
            'unicorn:model': '{}.is_published'.format(*self.unicorn_model),
            #'unicorn:partial': self.form_id,
            #'unicorn:partial.id': 'fileInfo',
            #'unicorn:partial.key': 'test',
            #'unicorn:dirty.attr': 'readonly', 
            "role": "switch",
        })
        
    def apply_custom_config(self):
        if self.custom_config and self.form_mode:
            #substitute index
            custom_config_for_current_form_mode = self.custom_config[self.form_mode]
            #TODO replace index, buttons
            def replace_handler(value):
                if isinstance(value, str):
                    return value.replace('{index}', str(self.index))
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
                self.fields[k].widget.attrs.update(widget_config.get(k, None))
            button_config = indexed_config['buttons']
            self.buttons = deepcopy(self.__class__.Meta.buttons | button_config)
            if self.buttons:
                for b in self.buttons.values():
                    if 'display' in b and callable(b['display']):
                        b['display'] = b['display'](self) 
                    if 'disable' in b and callable(b['disable']):
                        b['disable'] = b['disable'](self) 
                        
            #print(self.buttons)
                            
    def clean_name(self):
        data = self.cleaned_data["name"]
        if data and len(data) < 4:
            raise ValidationError("Enter more than 4 characters")
        return data
    
    def clean_description(self):
        data = self.cleaned_data["description"]
        if data and len(data) < 4:
            raise ValidationError("Enter more than 4 characters")
        return data
    
    def clean(self):
        cleaned_data = super().clean()
        name = self.cleaned_data.get("name")
        description = self.cleaned_data.get("description")
        
        '''        
        if name and description and name != description:
            raise ValidationError(
                "Name and description don't match"
            )
        if cc_myself and subject and "help" not in subject:
            msg = "Must put 'help' in subject when cc'ing yourself."
            self.add_error("cc_myself", msg)
            self.add_error("subject", msg)
        '''
        return cleaned_data
        
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
        buttons = BaseForm.Meta.buttons | {
            "ok": {
                "label": _("OK"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "cancel": {
                "label": _("OK"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "copy": {
                "label": _("OK"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "delete": {
                "label": _("OK"),
                "display_trigger": True,
                "attrs":{
                    'class': 'button',
                }
            }
        }
        widgets = BaseForm.Meta.widgets | {
            "url": Textarea(
                attrs={
                    "rows": 6,
                }
            ),
            "json": Textarea(
                attrs={
                    "rows": 6
                }
            ),
        }
        labels = BaseForm.Meta.labels | {
            "datastream_type": _('datastream_type'),
            "url": _('url'),
            "json": _('json'),
            #custom labels too
            "ok_button": _('OK'),
            "cancel_button": _('Cancel'),
            "delete_button": _('Delete'),
        }
        help_texts = BaseForm.Meta.help_texts | {
            "datastream_type": _("Some useful help text."),
            "url": _("Some useful help text."),
            "json": _("Some useful help text."),
        }
        error_messages = BaseForm.Meta.error_messages | {
            "url": {
                "max_length": _("This writer's name is too long."),
            },
            "json": {
                "max_length": _("This writer's name is too long."),
            },
        }    
    
    CUSTOM_CONFIG_VIEW = {
        'initial': {
            'form': {
                'form': {
                    'title': _('Datasource Details View'),
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    #'unicorn:partial.key': 'infoLargeTitle',
                },
                'description': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    #'unicorn:partial.key': 'infoLargeTitle',
                },
                'is_published': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
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
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    #'unicorn:partial.key': 'infoLargeTitle',
                },
                'description': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
                    #'unicorn:partial.key': 'infoLargeTitle',
                },
                'is_published': {
                    'unicorn:partial': 'datasource-details',
                    'unicorn:partial.id': 'details-datasource',
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
                    "display": False,
                },
            },
        }
    }
    
    CUSTOM_CONFIG_NEW = {
        'initial': {
            'form': {
                'form': {
                    'title': _('Datasource Details View'),
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'list-card-{index}',
                    'unicorn:partial.id': 'form-cover-{index}',
                    #'unicorn:partial.key': ,
                },
                'description': {
                    'unicorn:partial': 'list-card-{index}',
                    'unicorn:partial.id': 'form-cover-{index}',
                    #'unicorn:partial.key': ,
                },
                'is_published': {
                    'unicorn:partial': 'list-card-{index}',
                    'unicorn:partial.id': 'form-cover-{index}',
                    #'unicorn:partial.key': ,
                },
            },
            'buttons': {
                "ok": {
                    "label": _("OK"),
                    "display": lambda f: f.index is None,
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
                    "display": False,
                    "disable": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
            },
        },
        'empty': {
            'form': {
                'form': {
                    'title': _('Datasource Details View'),
                },
                'cover': {
                    'title': _('Datasource Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'form-{index}-body',
                },
                'description': {
                    'unicorn:partial': 'form-{index}-body',
                },
                'is_published': {
                    'unicorn:partial': 'form-{index}-body',
                },
                'datastream_type': {
                    'unicorn:partial': 'form-{index}-body',
                },
                'url': {
                    'unicorn:partial': 'form-{index}-body',
                },
                'json': {
                    'unicorn:partial': 'form-{index}-body',
                },
                'source': {
                    'unicorn:partial': 'form-{index}-body',
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
    }

    def __init__(self, *args, **kwargs):
        super(DatastreamForm, self).__init__(*args, **kwargs)
        #non-partials
        self.fields['datastream_type'].widget.attrs.update({
            'class': 'form-select',
            #'unicorn:key': 'test',
            'unicorn:model.lazy': '{}.datastream_type'.format(*self.unicorn_model),
        })
        self.fields['url'].widget.attrs.update({
            'class': 'form-control',
            #'unicorn:key': 'test',
            'unicorn:model.lazy': '{}.url'.format(*self.unicorn_model),
            'style': 'word-break: break-all;',
        })
        self.fields['url'].is_required = False
        self.fields['json'].widget.attrs.update({
            'class': 'form-control',
            #'unicorn:key': 'test',
            'unicorn:model.lazy': '{}.json'.format(*self.unicorn_model),
            'style': 'word-break: break-all;',
        })
        self.fields['source'].widget.attrs.update({
            'class': 'form-control',
            #'unicorn:key': 'test',
            'unicorn:model.lazy': '{}.properties.source'.format(*self.unicorn_model),
        })
        self.apply_custom_config()
        
    def clean_datastream_type(self):
        data = self.cleaned_data["datastream_type"]
        if False:
            raise ValidationError("datastream_type", "Please enter a valid type!")
        return data
    
    def clean_url(self):
        #print('cleaning url')
        data = self.cleaned_data["url"]
        #print(data)
        if data and len(data) < 4:
            raise ValidationError("url", "Please enter a longer url!")
        return data
    
    def clean_json(self):
        data = self.cleaned_data["json"]
        if False:
            raise ValidationError("json", "Please enter avalid json!")
        return data
    
    def clean_source(self):
        data = self.cleaned_data["source"]
        if False:
            raise ValidationError("source", "Please enter a valid source!")
        return data
    
    def clean(self):
        #print('clearning form')
        cleaned_data = super().clean()
        #print(cleaned_data)
        source = cleaned_data.get("source")
        description = cleaned_data.get("description")
        
        #hack to workaround phantom url validation errors
        #self.errors['url'] = self.error_class()
        #if 'url' in self.errors:
        #    del self.errors['url']
        
        '''
        if source and source != description: #name and description:
            raise ValidationError(
                "Source and description don't match"
            )
        '''
        
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
        #print('cleaning formset')
        #print('found these form errors')
        #for f in self.forms: 
        #    print(f.errors.as_data())
        #    print(f.non_field_errors())
        #print('found these non form errors')
        #print(self.non_form_errors())
            
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
        '''
        self.fields['name'].widget.attrs.update({
            'unicorn:partial': 'details-info',
            'unicorn:partial.id': 'infoLargeTitle',
            #'unicorn:partial.key': 'test',
        })
        self.fields['description'].widget.attrs.update({
            'unicorn:partial': 'details-info',
            'unicorn:partial.id': 'infoLargeTitle',
            #'unicorn:partial.key': 'test',
        })
        self.fields['is_published'].widget.attrs.update({
            'unicorn:partial': 'details-info',
            'unicorn:partial.id': 'infoLargeTitle',
            #'unicorn:partial.key': 'test',
        })
        '''
        self.apply_custom_config()
    
    #only initial
    CUSTOM_CONFIG_VIEW = {
        'initial': {
            'form': {
                'form': {
                    'title': _('Viz Details View'),
                },
                'cover': {
                    'title': _('Viz Cover View'),
                },
            },
            'widgets': {
                'name': {
                    'unicorn:partial': 'details-info',
                    'unicorn:partial.id': 'infoLargeTitle',
                    #'unicorn:partial.key': 'infoLargeTitle',
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
    }
    
    def clean(self):
        #print('clearning form')
        cleaned_data = super().clean()
        #print(cleaned_data)
        source = cleaned_data.get("source")
        description = cleaned_data.get("description")
        
        #hack to workaround phantom url validation errors
        #self.errors['url'] = self.error_class()
        if 'url' in self.errors:
            del self.errors['url']
        
        '''
        if source and source != description: #name and description:
            raise ValidationError(
                "Source and description don't match"
            )
        '''
        
class BaseDatasourceFormSet(BaseModelFormSet):
    def get_form_kwargs(self, index):
        kwargs = super().get_form_kwargs(index)
        kwargs['unicorn_model'] = f'formset_datasources.{index}', 
        return kwargs
    
    def clean(self):
        """Checks that no two articles have the same title."""
        #print('cleaning formset')
        #print('found these form errors')
        #for f in self.forms: 
        #    print(f.errors.as_data())
        #    print(f.non_field_errors())
        #print('found these non form errors')
        #print(self.non_form_errors())
            
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