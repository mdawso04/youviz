from django.forms import ModelForm, Textarea
from django.forms import fields, models
from django.utils.translation import gettext_lazy as _
from .models import BaseModel, Datastream
from django.core.exceptions import ValidationError
from entangled.forms import EntangledModelForm

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

class BaseForm(EntangledModelForm):
    template_name = "form.html" #blank is ok - customisation is at widget level
    error_css_class = "error"
    required_css_class = "required"
    
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
        print('cleaning name')
        if True:
            raise ValidationError("You have forgotten about Fred!")
        return data
    
    def clean_description(self):
        data = self.cleaned_data["description"]
        if False:
            raise ValidationError("You have forgotten about Fred!")
        return data
    
    def clean(self):
        super().clean()
        name = self.cleaned_data.get("name")
        description = self.cleaned_data.get("description")
        
        if True: #name and description:
            # Only do something if both fields are valid so far.
            if True:
                raise ValidationError(
                    "Name and description don't match"
                )
        '''        
        if cc_myself and subject and "help" not in subject:
            msg = "Must put 'help' in subject when cc'ing yourself."
            self.add_error("cc_myself", msg)
            self.add_error("subject", msg)
        '''
        
class DatastreamForm(BaseForm):
    source = fields.CharField()
    
    def __init__(self, *args, **kwargs):
        mode = kwargs.pop('mode', None)
        super(DatastreamForm, self).__init__(*args, **kwargs)
        if mode:
            self.fields['name'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model': 'datasource.datastream.name',
                'unicorn:partial': 'id_name',
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
            self.fields['description'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model': 'datasource.datastream.description',
                'unicorn:partial': 'id_description',
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
            self.fields['datastream_type'].widget.attrs.update({
                'class': 'form-select',
                #'unicorn:key': 'test',
                'unicorn:model': 'datasource.datastream.datastream_type',
                'unicorn:partial': 'id_name',
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
            self.fields['url'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model': 'datasource.datastream.url',
                'unicorn:partial': 'id_url',
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
                'style': 'word-break: break-all;',
            })
            self.fields['json'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model': 'datasource.datastream.json',
                'unicorn:partial': 'id_json',
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
                'style': 'word-break: break-all;',
            })
            self.fields['source'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model': 'datasource.datastream.properties.source',
                'unicorn:partial': 'id_source',
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
    
    
    class Meta:
        model = Datastream
        fields = BaseForm.Meta.fields + ('datastream_type', "url", "json",)
        untangledfields = BaseForm.Meta.fields + ('datastream_type', "url", "json",)
        entangledfields = {'properties': ['source', ]}
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
            "url": _('url'),
            "json": _('json'),
        }
        help_texts = BaseForm.Meta.help_texts | {
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
        
    def clean_json(self):
        data = self.cleaned_data["json"]
        if True:
            raise ValidationError("Bad json!")
        return data
    
    def clean_source(self):
        data = self.cleaned_data["source"]
        if False:
            raise ValidationError("You have forgotten about source!")
        return data
    
    def clean(self):
        super().clean()
        name = self.cleaned_data.get("source")
        #description = self.cleaned_data.get("description")
        
        if True: #name and description:
            # Only do something if both fields are valid so far.
            if True:
                raise ValidationError(
                    "Source problem!"
                )
                
            
from django import forms
from .models import Datasource

class DatasourceForm(forms.ModelForm):
    class Meta:
        model = Datasource
        #fields = ('data', )
        fields = ('datastream', )