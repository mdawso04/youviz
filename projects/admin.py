from django.contrib import admin
from django.contrib.auth.models import User
from guardian.admin import GuardedModelAdmin

from .models import Profile, Datastream, Datapod, Datasource, Viz, ItemView, Activity, Comment, Notification, Settings, Cover

#guarded models

class DatastreamAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'last_cached', 'hash_key', 'slug')

class DatapodAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class DatasourceAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'last_cached', 'hash_key', 'slug')
    
class VizAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class ReportAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', 'created_at', 'last_updated', 'hash_key', 'slug')

class ProfileAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', 'slug')
    
class CommentAdmin(GuardedModelAdmin):
    readonly_fields = ('pk', )
    
#non-guarded models

class ItemViewAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )
    
class ActivityAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )

class NotificationAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )
    
class SettingsAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )

class CoverAdmin(admin.ModelAdmin):
    readonly_fields = ('pk', )

    
# Unregister default before register custom version
#admin.site.unregister(User)
admin.site.register(Datastream, DatastreamAdmin)
admin.site.register(Datapod, DatapodAdmin)
admin.site.register(Datasource, DatasourceAdmin)
admin.site.register(Viz, VizAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(ItemView, ItemViewAdmin)
admin.site.register(Activity, ActivityAdmin)
admin.site.register(Notification, NotificationAdmin)
admin.site.register(Settings, SettingsAdmin)
admin.site.register(Cover, CoverAdmin)
#admin.site.register(Report, VizAdmin)
