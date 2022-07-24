from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import Project, File, Viz, Item, Answer 

class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'user')

class FileAdmin(admin.ModelAdmin):
    readonly_fields = ('pk',)
    
class VizAdmin(admin.ModelAdmin):
    readonly_fields = ('pk',)

class ItemAdmin(admin.ModelAdmin):
    readonly_fields = ('pk',)

class AnswerAdmin(admin.ModelAdmin):
    readonly_fields = ('pk',)
    
# Unregister default before register custom version
#admin.site.unregister(User)
admin.site.register(Project, ProjectAdmin)
admin.site.register(File, FileAdmin)
admin.site.register(Viz, VizAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Answer, AnswerAdmin)
