from django.urls import path
from . import views
#from projects.components.dataframe import DataframeView

urlpatterns = [
    path('', views.app_top, name="app_top"),
    path('dataframe/<int:pk>', views.dataframe, name="dataframe"),
    #path('dataframe/<int:pk>', DataframeView.as_view(), name="dataframe"),
    path('report/<int:pk>', views.report, name="report"),
    #path("app", AppView.as_view(), name="app"),
    #path("<int:pk>/", views.project_detail, name="project_detail"),
    path("upload/", views.model_form_upload, name="model_form_upload"),
]