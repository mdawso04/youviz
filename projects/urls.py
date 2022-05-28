from django.urls import path
from . import views
from projects.components.app import AppView

urlpatterns = [
    #path("", views.project_index, name="project_index"),
    #path("<int:pk>/", views.project_detail, name="project_detail"),
    path("upload/", views.model_form_upload, name="model_form_upload"),
    path("app", AppView.as_view(), name="app"),
]