from django.forms import ModelForm, Textarea
from django.forms import fields, models
from django.utils.translation import gettext_lazy as _
from .models import BaseModel, Datastream
from django.core.exceptions import ValidationError
from entangled.forms import EntangledModelForm, EntangledModelFormMixin

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
    template_name = "form.html" #blank is ok - customisation is at widget level
    form_id = None
    error_css_class = "error"
    #required_css_class = "required"
    
    def __init__(self, *args, **kwargs):
        self.form_id = kwargs.pop('form_id', None)
        super(BaseForm, self).__init__(*args, **kwargs)
    
    class Meta:
        model = BaseModel
        fields = ("name", "description",)
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
        }
        labels = {
            "name": _("Name"),
            "description": _("Description"),
        }
        help_texts = {
            "name": _("The item name."),
            "description": _("The item description."),
        }
        error_messages = {
            "name": {
                "max_length": _("This writer's name is too long."),
            },
            "description": {
                "max_length": _("This writer's name is too long."),
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
        if data and 'z' in data:
            raise ValidationError("Invalid name: remove z")
        return data
    
    def clean_description(self):
        data = self.cleaned_data["description"]
        if data and 'z' in data:
            raise ValidationError("Invalid name: remove z")
        return data
    
    def clean(self):
        super().clean()
        name = self.cleaned_data.get("name")
        description = self.cleaned_data.get("description")
        
        if name and description and name != description: #name and description:
            raise ValidationError(
                "Name and description don't match"
            )
        '''        
        if cc_myself and subject and "help" not in subject:
            msg = "Must put 'help' in subject when cc'ing yourself."
            self.add_error("cc_myself", msg)
            self.add_error("subject", msg)
        '''
        
class DatastreamForm(EntangledModelFormMixin, BaseForm):
    source = fields.CharField(
        max_length=200,
        required=False,
        help_text="Some useful help text.",
        label=_("source"),
    )
    
    def __init__(self, *args, **kwargs):
        mode = kwargs.pop('mode', None)
        self.form_id = kwargs.pop('form_id', None)
        super(DatastreamForm, self).__init__(*args, **kwargs)
        if mode:
            self.fields['name'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': 'datasource.datastream.name',
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
            self.fields['description'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': 'datasource.datastream.description',
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'fileInfo',
                #'unicorn:partial.key': 'test',
                #'unicorn:dirty.attr': 'readonly', 
            })
            self.fields['datastream_type'].widget.attrs.update({
                'class': 'form-select',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': 'datasource.datastream.datastream_type',
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'fileInfo',
                #'unicorn:partial.key': 'test',
            })
            self.fields['url'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': 'datasource.datastream.url',
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
                'style': 'word-break: break-all;',
            })
            self.fields['json'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': 'datasource.datastream.json',
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
                'style': 'word-break: break-all;',
            })
            self.fields['source'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': 'datasource.datastream.properties.source',
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
    
    
    class Meta:
        model = Datastream
        fields = BaseForm.Meta.fields + ('datastream_type', "url", "json", 'source',)
        entangled_fields = {'properties': ['source', ]}
        #untangled_fields = BaseForm.Meta.fields + ('datastream_type', "url", "json",)
        widgets = BaseForm.Meta.widgets | {
            "url": Textarea(
                #template_name="widget.html", #input group
                attrs={
                    "rows": 6,
                }
            ),
            "json": Textarea(
                #template_name="widget.html", #input group
                attrs={
                    "rows": 6,
                }
            ),
        }
        labels = BaseForm.Meta.labels | {
            "datastream_type": _('datastream_type'),
            "url": _('url'),
            "json": _('json'),
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
            raise ValidationError("Invalid type")
        return data
    
    def clean_url(self):
        data = self.cleaned_data["url"]
        if False:
            raise ValidationError("Invalid url")
        return data
    
    def clean_json(self):
        data = self.cleaned_data["json"]
        if False:
            raise ValidationError("Invalid json")
        return data
    
    def clean_source(self):
        data = self.cleaned_data["source"]
        print('cleaning source field')
        if False:
            raise ValidationError("Invalid source")
        return data
    
    def clean(self):
        super().clean()
        source = self.cleaned_data.get("source")
        description = self.cleaned_data.get("description")
        #print('cleaning form....heres the clean data')
        #print(self.cleaned_data)
        
        if source and source != description: #name and description:
            raise ValidationError(
                "Source and description don't match"
            )
                
            
from django import forms
from .models import Datasource

class DatasourceForm(forms.ModelForm):
    class Meta:
        model = Datasource
        #fields = ('data', )
        fields = ('datastream', )