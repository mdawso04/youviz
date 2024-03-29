from django.urls import path, include
from django.contrib.sitemaps.views import sitemap
from project.sitemaps import DatasourceSitemap
from . import views
from projects.components.viz import VizView
from projects.components.dataframe import DataframeView
from projects.components.vizreport import VizreportView

urlpatterns = [
    #view all vizs
    path('', views.list, name="list"),
    #view one
    path('view/<int:pk>/', views.view, name="view_pk"),
    path('view/<slug:slug>/', views.view, name="view"),
    #view options to add new: datastream template or datastream, viz
    path('new/', views.new, name="new"),
    #view all vizs from 1 user
    #path('user/<str:username>/', views.user, name="user_username"),
    path('user/<slug:slug>/', views.user, name="user"),
    
    #path('app/', views.app, name="app_all"),
    #path('app/<int:pk>/', views.app, name="app"),
    #path('viz/new/', views.new_viz_list, name="new_viz_list"),
    #path('viz/new/<int:pk>/', views.new_viz, name="new_viz"),
    
    path('viz/<int:pk>/<hash_k>/', VizView.as_view(), {'context': {'mode': 'app'}}, name="viz"),
    path('viz/<int:pk>/<hash_k>/viewmode/', VizView.as_view(), {'context': {'mode': 'view'}}, name="viz_viewmode"),
    path('datasource/<int:pk>/<hash_k>/', DataframeView.as_view(), {'context': {'mode': 'app'}}, name="dataframe"),
    path('datasource/<int:pk>/<hash_k>/viewmode/', DataframeView.as_view(), {'context': {'mode': 'view'}}, name="ds_viewmode"),
    path('report/<int:pk>/<hash_k>/', VizreportView.as_view(), name="vizreport"),
    path("upload/", views.model_form_upload, name="model_form_upload"),
    path('youviz_js', views.youviz_js, name="youviz_js"),
    path('accounts/', include('allauth.urls')),
    #new login code
    #path('signup/', views.signup, name ='signup'),
    #path('login/', views.login, name = 'login'),
    path("sitemap.xml", sitemap, {"sitemaps": {'viz': DatasourceSitemap}}, name="django.contrib.sitemaps.views.sitemap")
]