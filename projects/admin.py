from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import Project, Datasource, Viz, Report, Item, Answer 

class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'user', 'created_at', 'last_updated', 'hash_key')

class DatasourceAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'last_cached', 'hash_key')
    
class VizAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')

class ReportAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')

class ItemAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')

class AnswerAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')
    
# Unregister default before register custom version
#admin.site.unregister(User)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Datasource, DatasourceAdmin)
admin.site.register(Viz, VizAdmin)
admin.site.register(Report, VizAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Answer, AnswerAdmin)
