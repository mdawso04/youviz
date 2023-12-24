from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import Profile, Datastream, Datasource, Viz, ItemView

class DatastreamAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class DatasourceAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'last_cached', 'hash_key', 'slug', 'views_count')
    
class VizAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class ReportAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'slug')
    
class ItemViewAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )
    
# Unregister default before register custom version
#admin.site.unregister(User)
admin.site.register(Datastream, DatastreamAdmin)
admin.site.register(Datasource, DatasourceAdmin)
admin.site.register(Viz, VizAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(ItemView, ItemViewAdmin)
#admin.site.register(Report, VizAdmin)
