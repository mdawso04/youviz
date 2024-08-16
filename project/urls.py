"""dj_test URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from django.views.decorators.cache import cache_page

from .sitemaps import DatasourceSitemap

urlpatterns = [
    path('', include("projects.urls")),
    path('admin/', admin.site.urls),
    #path('accounts/', include('django.contrib.auth.urls')), # new
    #path('accounts/login/', views.login, name='login'),
    #path('', include('pwa.urls')),
    # if you used the patch for django 4 compatibility then use the following code instead
    path('', include('pwa1.urls')),
    #path('debug/', include('debug_toolbar.urls')),
    path("unicorn/", include("django_unicorn.urls")),
    path("sitemap.xml", cache_page(60 * 15)(sitemap), {"sitemaps": {"datasources": DatasourceSitemap}},),
] 

if settings.DEBUG:
    urlpatterns +=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)