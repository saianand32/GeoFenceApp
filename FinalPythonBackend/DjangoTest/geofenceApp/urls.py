from django.urls import path,include
from django.contrib import admin
from geofenceApp import views


urlpatterns=[
    path('boy', views.fencepointsApi,name='fencepoints'),
    path('live', views.livelocationtestApi,name='livelocationtemp'),
    # url(r'^department'/([0-9])')
]