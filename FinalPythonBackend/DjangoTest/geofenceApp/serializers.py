from dataclasses import fields
from rest_framework import serializers
from geofenceApp.models import Fencepoints, Checkcontains

class FencepointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fencepoints
        fields = ['fencelat','fencelon']



class CheckcontainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkcontains
        fields = ['checkcontains']