from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import Datastream, Datasource, Viz, Report 

class DatastreamAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')

class DatasourceAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'last_cached', 'hash_key')
    
class VizAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')

class ReportAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key')

# Unregister default before register custom version
#admin.site.unregister(User)
admin.site.register(Datastream, DatastreamAdmin)
admin.site.register(Datasource, DatasourceAdmin)
admin.site.register(Viz, VizAdmin)
admin.site.register(Report, VizAdmin)