from django_unicorn.components import UnicornView
from django import forms

#class HelloWorldForm(forms.Form):
    #name = forms.CharField()
#    name = forms.FileField()
    
class HelloWorldView(UnicornView):
    #form_class = HelloWorldForm

    name = "Name"
    test = "Waiting"
    file_data = "Waiting"
    
    def updated_name(self, value):
        self.test = value
        if self.request:
            self.file_data = self.request
            """if self.request.FILES['name']:
                self.file_data = self.request.FILES['name']"""
    