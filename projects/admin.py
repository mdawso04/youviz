from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import File, Viz

#class UserAdmin(admin.ModelAdmin):
#    readonly_fields = ('pk',)

class FileAdmin(admin.ModelAdmin):
    readonly_fields = ('pk',)
    
class VizAdmin(admin.ModelAdmin):
    readonly_fields = ('pk',)

# Unregister default before register custom version
#admin.site.unregister(User)
#admin.site.register(User, UserAdmin)
admin.site.register(File, FileAdmin)
admin.site.register(Viz, VizAdmin)
