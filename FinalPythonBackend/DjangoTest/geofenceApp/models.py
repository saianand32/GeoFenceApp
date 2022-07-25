from django.db import models

# Create your models here.

class Fencepoints(models.Model):
    fencelat = models.CharField(max_length=200)
    fencelon = models.CharField(max_length=200)
    # fenceid = models.AutoField(primary_key=True)
    # fencename = models.CharField(max_length=100)

# class Livelocation(models.Model):
#     livelocation = models.JSONField()

class Checkcontains(models.Model):
    checkcontains = models.BooleanField() 
    
class liveLocationtemp(models.Model):
    livelat = models.CharField(max_length=200)
    livelon = models.CharField(max_length=200)