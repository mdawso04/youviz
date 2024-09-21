# django_project/sitemaps.py
from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from projects.models import Datasource, Profile

class DatasourceSitemap(Sitemap):
    
    #changefreq = "never"
    priority = 0.5
    protocol = 'https'
    list_urls = ['list',]
    
    def items(self):
        return self.list_urls + list(Datasource.objects.all()) + list(Profile.objects.exclude(name__in=['System', 'Admin',]).all())

    def lastmod(self, obj):
        if obj in self.list_urls:
            return
        return obj.last_updated
    
    def location(self, obj):
        if obj in self.list_urls:
            return reverse(obj)
        elif isinstance(obj, Datasource):
            return reverse('view', kwargs={'slug': obj.slug})
        elif isinstance(obj, Profile):
            return reverse('user', kwargs={'slug': obj.slug})