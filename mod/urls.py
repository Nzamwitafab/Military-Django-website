from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('form', views.submit_application, name='submit_application'),
    path('view-applications/', views.view_applications, name='view_applications'),
]