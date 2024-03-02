# django_project/sitemaps.py
from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from projects.models import Datasource

class DatasourceSitemap(Sitemap):
    
    #changefreq = "never"
    priority = 0.5
    
    def items(self):
        return Datasource.objects.all()

    def lastmod(self, obj):
        return obj.last_updated
    
    def location(self, obj):
        return reverse('view', kwargs={'slug': obj.slug})