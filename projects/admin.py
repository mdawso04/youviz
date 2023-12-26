from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import Profile, Datastream, Datasource, Viz, ItemView, Activity, Comment

class DatastreamAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class DatasourceAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'last_cached', 'hash_key', 'slug')
    
class VizAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class ReportAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', 'slug')
    
class ItemViewAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )
    
class ActivityAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )

class CommentAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )

    
# Unregister default before register custom version
#admin.site.unregister(User)
admin.site.register(Datastream, DatastreamAdmin)
admin.site.register(Datasource, DatasourceAdmin)
admin.site.register(Viz, VizAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(ItemView, ItemViewAdmin)
admin.site.register(Activity, ActivityAdmin)
admin.site.register(Comment, CommentAdmin)
#admin.site.register(Report, VizAdmin)
