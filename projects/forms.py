from django.forms import ModelForm, Textarea, CheckboxInput
from django.forms import fields, models
from django.utils.translation import gettext_lazy as _
from .models import BaseModel, Datastream
from django.core.exceptions import ValidationError
from entangled.forms import EntangledModelForm, EntangledModelFormMixin
from django.forms import BaseModelFormSet
from django import forms
from .models import Datasource



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
    index = None
    partials = None
    buttons = None
    
    #required_css_class = "required"
    
    def __init__(self, *args, **kwargs):
        self.form_id = kwargs.pop('form_id', None)
        self.unicorn_model = kwargs.pop('unicorn_model', None)
        self.button_config = kwargs.pop('button_config', None)
        self.index = kwargs.pop('index', None)
        self.formset = kwargs.pop('formset', None)
        self.form_mode = kwargs.pop('form_mode', None)
        if type(self.form_mode) == tuple:
            self.form_mode = self.form_mode[0]
        self.partials = kwargs.pop('partials', None)
        if type(self.partials) == tuple:
            self.partials = self.partials[0]
        
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
        
    def buttons(self):
        #buttons
        buttons = None
        if self.button_config:
            buttons = (self.__class__.Meta.buttons | self.button_config).get(self.form_mode)
        else:
            buttons = self.__class__.Meta.buttons.get(self.form_mode)
            
        #display_trigger -> bool or callable
        for b in buttons.values():
            if callable(b['display_trigger']):
                print(b['label'])
                print(b['display_trigger'](self))
                b['display_trigger'] = b['display_trigger'](self) 
                
        return buttons
            
    
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
        ok = {
            "label": _("OK"),
            "uonclick": None,
        }
        cancel = {
            "label": _("Cancel"),
            "uonclick": None,
        }
        
        
        buttons = {
            'initial': {
                "ok": {
                    "label": _("OK"),
                    "display_trigger": lambda f: f.index is None,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "cancel": {
                    "label": _("Cancel"),
                    "display_trigger": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "copy": {
                    "label": _("Copy"),
                    "display_trigger": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "delete": {
                    "label": _("Delete"),
                    "display_trigger": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
            },
            'empty': {
                "ok": {
                    "label": _("Create new datatsource"),
                    "display_trigger": lambda f: f.is_valid(),
                    "attrs":{
                        'class': 'button',
                    }
                },
                "cancel": {
                    "label": _("Cancel"),
                    "display_trigger": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "copy": {
                    "label": _("Copy"),
                    "display_trigger": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
                "delete": {
                    "label": _("Delete"),
                    "display_trigger": False,
                    "attrs":{
                        'class': 'button',
                    }
                },
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
    
    PARTIALS_FOR_VIEW = {
        'initial': {
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
            }
        },
        'empty': {
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
            }
        }
    }
    
    PARTIALS_FOR_NEW = {
        'initial': {
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
        'empty': {
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
    }
    
    BUTTONS_FOR_NEW = {
        'initial': {
            "ok": {
                "label": _("OK"),
                "display_trigger": lambda f: f.index is None,
                "attrs":{
                    'class': 'button',
                }
            },
            "cancel": {
                "label": _("Cancel"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "copy": {
                "label": _("Copy"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "delete": {
                "label": _("Delete"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
        },
        'empty': {
            "ok": {
                "label": _("Create new datatsource"),
                "display_trigger": lambda f: f.has_changed() and f.is_valid(),
                "attrs":{
                    'class': 'button',
                }
            },
            "cancel": {
                "label": _("Cancel"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "copy": {
                "label": _("Copy"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
            "delete": {
                "label": _("Delete"),
                "display_trigger": False,
                "attrs":{
                    'class': 'button',
                }
            },
        },
        
    }
    
    BUTTONS_FOR_VIEW = {
        'initial': {
            "ok": {
                "display_trigger": False,
            },
            "cancel": {
                "display_trigger": False,
            },
            "copy": {
                "display_trigger": False,
            },
            "delete": {
                "display_trigger": False,
            },
        },
        'empty': {
            "ok": {
                "display_trigger": False,
            },
            "cancel": {
                "display_trigger": False,
            },
            "copy": {
                "display_trigger": False,
            },
            "delete": {
                "display_trigger": False,
            },
        },
    }

    def __init__(self, *args, **kwargs):
        mode = kwargs.pop('mode', True)
        super(DatastreamForm, self).__init__(*args, **kwargs)

        if mode:
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
            
            #partials
            if self.partials:
                #substitute index
                indexed_partials = {
                    k: {k1: {k2: v2.replace('{index}', str(self.index)) for k2, v2 in v1.items()} for k1, v1 in v.items()} for k, v in self.partials.items()
                }
                indexed_partials = indexed_partials[self.form_mode]
                for k in indexed_partials.keys():
                    self.fields[k].widget.attrs.update(indexed_partials.get(k, None))

    
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
        self.partials = kwargs.pop('partials', None)
        self.button_config = kwargs.pop('button_config', None)
        super(BaseDatastreamFormSet, self).__init__(*args, **kwargs)
        
    def get_form_kwargs(self, index):
        kwargs = super().get_form_kwargs(index)
        kwargs['mode'] = True
        #TODO - handke None index
        if index == self.initial_form_count():
            kwargs['unicorn_model'] = ('new_datastream',)
            kwargs['form_mode'] = ('empty',)
        else:
            kwargs['unicorn_model'] = (f'formset_datastreams.{index}',)
            kwargs['form_mode'] = ('initial',)
        if self.partials:
            kwargs['partials'] = self.partials
        kwargs['index'] = index
        kwargs['button_config'] = self.button_config
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
    def __init__(self, *args, **kwargs):
        mode = kwargs.pop('mode', True)
        super(DatasourceForm, self).__init__(*args, **kwargs)
        
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
        kwargs['mode'] = True
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