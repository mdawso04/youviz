# django_project/sitemaps.py
from django.contrib.sitemaps import Sitemap
from projects.models import Datasource

class DatasourceSitemap(Sitemap):
    def items(self):
        return Datasource.objects.all()

    def lastmod(self, obj):
        return obj.last_updated