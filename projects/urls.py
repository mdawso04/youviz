from django.urls import path, include
from . import views
from projects.components.viz import VizView
from projects.components.dataframe import DataframeView
from projects.components.vizreport import VizreportView

urlpatterns = [
    path('', views.app_top, name="app_top"),
    path('gallery/<int:pk>/', views.gallery, name="gallery"),
    path('viz/<int:pk>/<hash_k>/', VizView.as_view()),
    path('datasource/<int:pk>/<hash_k>/', DataframeView.as_view(), name="dataframe"),
    path('report/<int:pk>/<hash_k>/', VizreportView.as_view(), name="vizreport"),
    path("upload/", views.model_form_upload, name="model_form_upload"),
    path('youviz_js', views.youviz_js, name="youviz_js"),
    path('accounts/', include('allauth.urls')),
    #new login code
    #path('signup/', views.signup, name ='signup'),
    #path('login/', views.login, name = 'login'),
]