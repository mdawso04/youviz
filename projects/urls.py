from django.urls import path, include
from django.contrib.sitemaps.views import sitemap
from django.views.decorators.cache import cache_page
from project.sitemaps import DatasourceSitemap
from . import views

urlpatterns = [
    path('', views.list, name="list"),
    path('search/', views.search, name="search"),
    #path('view/<int:pk>/', views.view, name="view_pk"),
    path('user/<slug:slug>/', views.user, name="user"),
    path('view/<slug:slug>/', views.view, name="view"),
    path('new/', views.new, name="new"),
    #path('viz/<int:pk>/<hash_k>/', VizView.as_view(), {'context': {'mode': 'app'}}, name="viz"),
    path('viz/<int:pk>/data/', views.viz_data, name="viz_data"),
    path('viz/<int:pk>/<hash_k>/', views.viz, name="viz"),
    #path('viz/<int:pk>/<hash_k>/viewmode/', VizView.as_view(), {'context': {'mode': 'view'}}, name="viz_viewmode"),
    path('viz/<int:pk>/<hash_k>/viewmode/', views.viz_viewmode, name="viz_viewmode"),
    #path('datasource/<int:pk>/<hash_k>/', DataframeView.as_view(), {'context': {'mode': 'app'}}, name="dataframe"),
    path('datasource/<int:pk>/<hash_k>/', views.dataframe, name="dataframe"),
    #path('datasource/<int:pk>/<hash_k>/viewmode/', DataframeView.as_view(), {'context': {'mode': 'view'}}, name="ds_viewmode"),
    path('datasource/<int:pk>/<hash_k>/viewmode/', views.dataframe_viewmode, name="ds_viewmode"),
    #path('report/<int:pk>/<hash_k>/', VizreportView.as_view(), name="vizreport"),
    path("upload/", views.model_form_upload, name="model_form_upload"),
    #path('youviz_js', views.youviz_js, name="youviz_js"),
    path('accounts/', include('allauth.urls')),
    #new login code
    #path('signup/', views.signup, name ='signup'),
    #path('login/', views.login, name = 'login'),
    path("sitemap.xml", cache_page(60 * 15)(sitemap), {"sitemaps": {'viz': DatasourceSitemap}}, name="django.contrib.sitemaps.views.sitemap")
]