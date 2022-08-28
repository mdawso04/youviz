from django.urls import path
from . import views
#from projects.components.app import AppView

urlpatterns = [
    path('', views.app_top, name="app_top"),
    path('report/<int:pk>', views.report, name="report"),
    #path("app", AppView.as_view(), name="app"),
    #path("<int:pk>/", views.project_detail, name="project_detail"),
    path("upload/", views.model_form_upload, name="model_form_upload"),
]