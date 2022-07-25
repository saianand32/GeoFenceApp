from tokenize import String
from django.shortcuts import render,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from django.http.response import JsonResponse
import json
import matplotlib.path as mplPath
import numpy as np

# from geofenceApp.models import Fencepoints, livelocationtemp, Checkcontains
from geofenceApp.serializers import FencepointsSerializer, CheckcontainsSerializer

flag = False
x=0.00000
y=0.00000
a,b,c=0,0,0
arr1=[]
arr2=[]
arr3=[]
poly=[]

# Create your views here.
@csrf_exempt
def fencepointsApi(request):
    global flag
    global arr1,arr2,arr3,poly
    
    if request.method=="GET":
        # fencepoint_data = Fencepoints.objects.all()
        # fencepoint_serializer = FencepointsSerializer(fencepoint_data,many=True)
        # return JsonResponse(fencepoint_serializer.data,safe=False)

        poly = []
        j=0
        while j< len(arr1):
                poly.append(arr1[j])
                poly.append(arr2[j])
                j+=1
                
                
        poly_path = mplPath.Path(np.array(arr3))
        
        point = (x,y)
        if(poly_path.contains_point(point)):
            flag = True
        else:
            flag = False
            
        
        if flag == True:
            sai = "true"
        else:
            sai = "false"
       
        return HttpResponse(sai)
        return JsonResponse(ac,safe=False)
         
        # return HttpResponse("hello")
        # departments = Departments.objects.all()
        # departments_serializer = DepartmentSerializer(departments, many=True)
        # return Jsonresponse(departments_serializer.data, safe=False)
    
    elif request.method=="POST":
        fencepoint_data = JSONParser().parse(request)
        fencepoint_serializer = FencepointsSerializer(data=fencepoint_data)
        if fencepoint_serializer.is_valid():
 
           
            a=(fencepoint_data['fencelat'])
            b=(fencepoint_data["fencelon"])
            # 1.2,3,45,67
            #["1.2","3.4"]
            arr1 = a.split(',')
            del arr1[-1]
            arr2 = b.split(',')
            del arr2[-1]
            
            arr3 = []
            i=0
            while i<len(arr1):
                lis = list([arr1[i],arr2[i]])
                arr3.append(lis)
                i+=1
                


            poly = []
            j=0
            while j< len(arr1):
                poly.append(arr1[j])
                poly.append(arr2[j])
                j+=1
                
                
            poly_path = mplPath.Path(np.array(arr3))
            point = (x,y) 
           
            if(poly_path.contains_point(point)):
                flag = True
            else:
                flag = False
            
            return JsonResponse(flag, safe=False)


    
#api for recieving live location from mobile
@csrf_exempt
def livelocationtestApi(request):
    global x,y
    if request.method == 'GET':
        return HttpResponse("saishwar is a student")
    
    elif request.method == 'POST':
        liveloc_data = JSONParser().parse(request)
        x=float(liveloc_data['livelat'])
        y=float(liveloc_data['livelon'])
        # z= e+f
        return HttpResponse("live loc sent")