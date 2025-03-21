from django.forms import ModelForm, Textarea
from django.forms import fields, models
from django.utils.translation import gettext_lazy as _
from .models import BaseModel, Datastream
from django.core.exceptions import ValidationError
from entangled.forms import EntangledModelForm, EntangledModelFormMixin
from django.forms import BaseModelFormSet

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
    use_ok = False
    use_cancel = False
    
    #required_css_class = "required"
    
    def __init__(self, *args, **kwargs):
        self.form_id = kwargs.pop('form_id', None)
        self.unicorn_model = kwargs.pop('unicorn_model', None)
        self.use_ok = kwargs.pop('use_ok', False)
        self.use_cancel = kwargs.pop('use_cancel', False)
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
        ok = {
            "label": _("OK"),
            "uonclick": None,
        }
        cancel = {
            "label": _("Cancel"),
            "uonclick": None,
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
        if data and len(data) < 5:
            raise ValidationError("Enter more than 5 characters")
        return data
    
    def clean_description(self):
        data = self.cleaned_data["description"]
        if data and len(data) < 5:
            raise ValidationError("Enter more than 5 characters")
        return data
    
    def clean(self):
        super().clean()
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
        
class DatastreamForm(EntangledModelFormMixin, BaseForm):
    source = fields.CharField(
        max_length=200,
        required=False,
        help_text="Some useful help text.",
        label=_("source"),
    )
    
    def __init__(self, *args, **kwargs):
        mode = kwargs.pop('mode', True)
        super(DatastreamForm, self).__init__(*args, **kwargs)
        if mode:
            self.fields['name'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': '{}.name'.format(*self.unicorn_model),
                'unicorn:partial': 'form-content-{}'.format(self.instance.slug),
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
            })
            self.fields['description'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': '{}.description'.format(*self.unicorn_model),
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'fileInfo',
                #'unicorn:partial.key': 'test',
                #'unicorn:dirty.attr': 'readonly', 
            })
            self.fields['datastream_type'].widget.attrs.update({
                'class': 'form-select',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': '{}.datastream_type'.format(*self.unicorn_model),
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'fileInfo',
                #'unicorn:partial.key': 'test',
            })
            self.fields['url'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': '{}.url'.format(*self.unicorn_model),
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
                'style': 'word-break: break-all;',
            })
            self.fields['json'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': '{}.json'.format(*self.unicorn_model),
                'unicorn:partial': self.form_id,
                #'unicorn:partial.id': 'test',
                #'unicorn:partial.key': 'test',
                'style': 'word-break: break-all;',
            })
            self.fields['source'].widget.attrs.update({
                'class': 'form-control',
                #'unicorn:key': 'test',
                'unicorn:model.lazy': '{}.properties.source'.format(*self.unicorn_model),
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
                attrs={
                    "rows": 6,
                }
            ),
            "json": Textarea(
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
        ok = BaseForm.Meta.ok | {
            "uonclick": 'add_datastream',
        }
        cancel = BaseForm.Meta.cancel | {
            "uonclick": None,
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
        if False:
            raise ValidationError("Invalid source")
        return data
    
    def clean(self):
        super().clean()
        source = self.cleaned_data.get("source")
        description = self.cleaned_data.get("description")
        
        '''
        if source and source != description: #name and description:
            raise ValidationError(
                "Source and description don't match"
            )
        '''
        
class BaseDatastreamFormSet(BaseModelFormSet):
    def get_form_kwargs(self, index):
        kwargs = super().get_form_kwargs(index)
        kwargs['mode'] = True
        kwargs['unicorn_model'] = f'datastreams.{index}', 
        return kwargs
                
            
from django import forms
from .models import Datasource

class DatasourceForm(forms.ModelForm):
    class Meta:
        model = Datasource
        #fields = ('data', )
        fields = ('datastream', )