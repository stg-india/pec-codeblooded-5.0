from django.shortcuts import render,redirect
from .models import h1b
from django import forms
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import serializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import helper
from django.db.models import Avg
# from django.db.models.functions import PercentRank
from django.db.models import F, Window
from django.db.models.functions import PercentRank
from statistics import median
import time

from django.views.decorators.cache import cache_page
from django.core.cache import cache



# @cache_page(60 * 15)  
# def my_view(request):
#     return HttpResponse("fes")


from django.views.decorators.cache import cache_page
from django.core.cache import cache
from django.http import JsonResponse
import time


def custom_round(number,decimal=2):
    factor=10**decimal
    return int(number*factor+0.5)/factor


@cache_page(60 * 15) 
def my_view(request):
    cached_data = cache.get('my_data_key')

    if cached_data is not None:
        return render(request,"index.html",cached_data)
        return JsonResponse(cached_data, safe=False)

    start_time = time.time()
    mean = calculate_mean(request)
    end_time = time.time()
    timemean = custom_round(end_time - start_time)

    start_time = time.time()
    percentile_75 = Percentile(request)
    end_time = time.time()
    timePercentile75 = custom_round(end_time - start_time)

    data = {
        'mean': mean,
        'percentile_75': percentile_75,
        'timeout_mean': timemean,
        'timeout_percentile_75': timePercentile75
    }

    
    cache.set('my_data_key', data, 60 * 15)
    return render(request,"index.html",data)
    return JsonResponse(data, safe=False)

def Average(request):
    cached_data = cache.get('my_data_key')

    if cached_data is not None:
        return render(request,"mean.html",cached_data)
    
    start_time = time.time()
    mean = calculate_mean(request)
    end_time = time.time()
    timemean = custom_round(end_time - start_time)
    data = {
        'mean': mean,
        # 'percentile_75': percentile_75,
        'timeout_mean': timemean,
        # 'timeout_percentile_75': timePercentile75
    }

    
    cache.set('my_data_key', data, 60 * 15)
    return render(request,'mean.html',data)
    
def Mid_value(request):
    cached_data = cache.get('my_data_key')

    if cached_data is not None:
        return render(request,"median.html",cached_data)
    
    start_time = time.time()
    percentile_75 = Percentile(request)
    end_time = time.time()
    timePercentile75 = custom_round(end_time - start_time)
    data = {
        # 'mean': mean,
        'percentile_75': percentile_75,
        # 'timeout_mean': timemean,
        'timeout_percentile_75': timePercentile75
    }
    cache.set('my_data_key', data, 60 * 15)
    return render(request,'median.html',data)
    

def Count(request):
    cached_data = cache.get('my_data_key')

    if cached_data is not None:
        return render(request,"number.html",cached_data)
    
    start_time = time.time()
    mean = calculate_mean(request)
    end_time = time.time()
    timemean = custom_round(end_time - start_time)
    data = {
        'mean': mean,
        # 'percentile_75': percentile_75,
        'timeout_mean': timemean,
        # 'timeout_percentile_75': timePercentile75
    }

    
    cache.set('my_data_key', data, 60 * 15)
    return render(request,'number.html',data)
    
def JEE_MAINS(request):
    cached_data = cache.get('my_data_key')

    if cached_data is not None:
        return render(request,"percentile_25-75.html",cached_data)
    
    start_time = time.time()
    percentile_75 = Percentile(request)
    end_time = time.time()
    timePercentile75 = custom_round(end_time - start_time)
    data = {
        # 'mean': mean,
        'percentile_75': percentile_75,
        # 'timeout_mean': timemean,
        'timeout_percentile_75': timePercentile75
    }
    cache.set('my_data_key', data, 60 * 15)
    return render(request,'percentile_25-75.html',data)
    # cache.set('my_data_key', data, 60 * 15)
    # render(request,'mean.html',data)
def full(request):
    cached_data = cache.get('my_data_key')

    if cached_data is not None:
        return render(request,"full.html",cached_data)
        return JsonResponse(cached_data, safe=False)

    start_time = time.time()
    mean = calculate_mean(request)
    end_time = time.time()
    timemean = custom_round(end_time - start_time)

    start_time = time.time()
    percentile_75 = Percentile(request)
    end_time = time.time()
    timePercentile75 = custom_round(end_time - start_time)

    data = {
        'mean': mean,
        'percentile_75': percentile_75,
        'timeout_mean': timemean,
        'timeout_percentile_75': timePercentile75
    }

    
    cache.set('my_data_key', data, 60 * 15)
    return render(request,"full.html",data)


# def SalaryApi(request,id=0):
#     if request.method=='GET':
#         # a= h1b.objects.aggregate(Avg('salary'))
#         # x=a.get('salary__avg')
#         # x=custom_round(x)
#         # c={
#         #     "salary__avg":x
#         # }
#         # return c
#         file=h1b.objects.all()
#         file_serializer=helper(file,many=True);
#         salaries=[item['salary'] for item in file_serializer.data]
#         avg=sum(sa)
    
def calculate_mean(request):
    # print(request.GET.get('salary'))
    # column_name = request.GET.get('salary')
    # if not column_name:
    #     return JsonResponse({'error': 'Column name parameter is missing.'}, status=400)
    
    # queryset = h1b.objects.values_list(column_name, flat=True)
    file=h1b.objects.all()
    file_serializer=helper(file,many=True);
    salaries=[item['salary'] for item in file_serializer.data]
    length=len(salaries)
    mean = sum(salaries) /length if salaries else 0
    mean=custom_round(mean)
    # return mean
    x={
        'mean':mean,
        'Number':length
    }
    return x
    
def Percentile(request,id=0):
    if request.method=='GET':
        file=h1b.objects.all()
        file_serializer=helper(file,many=True)
        salaries=[item['salary'] for item in file_serializer.data]
        # percentile_75=calculate_percentile(75,salaries,25)if salaries else 0
        data=salaries
        value=75
        value2=25
        data.sort()
        n=len(data)
        if n==0:
            return 0
        elif n==1:
            return data[0]
        elif value<=0:
            return data[0]
        elif value>=100:
            return data[-1]
        else:
            rank=(value/100)*(n-1)
            rank2=(value2/100)*(n-1)
            l2=int(rank2)
            u2=l2+1
            lower2=data[l2]
            upper2=data[u2]
            percentile_25=lower2+(rank2-l2)*(upper2-lower2)
            # print(percentile_25)
            l_rank=int(rank)
            u_rank=l_rank+1
            lower_data=data[l_rank]
            upper_data=data[u_rank]
            
            percentile_75= lower_data+(rank-l_rank)*(upper_data-lower_data)
            length=n
            if length % 2 == 0:
        # If the length is even, take the average of the middle two elements
             median = (salaries[length // 2 - 1] + salaries[length // 2]) / 2
            else:
        # If the length is odd, take the middle element
             median = salaries[length // 2]

            # percentile_25=(percentile_25)
            # percentile_75=(percentile_75)
            # print(percentile_75)
            a={
                'percentile_75':percentile_75,
                'percentile_25':percentile_25,
                'median':median
            }
            return a
            # return JsonResponse({'percentile_25':percentile_25,'percentile_75':percentile_75})
            # return JsonResponse(percentile_75,safe=False)
            #  return percentile_75

            return JsonResponse(file_serializer.data,safe=False)

# def calculate_median(values):
#     # sorted_values = sorted(values)
#     values.sort()
#     length = len(values)
    
#     if length % 2 == 0:
#         # If the length is even, take the average of the middle two elements
#         median = (values[length // 2 - 1] + values[length // 2]) / 2
#     else:
#         # If the length is odd, take the middle element
#         median = values[length // 2]
    
#     return median


# def Median(request):
#     data_values = h1b.objects.values_list('salary', flat=True)
#     data_list = list(data_values)
    
#     if data_list:
#         median_value = median(data_list)
#     else:
#         median_value = None
    
#     # median_value=round(median_value,2)
#     context = {
#         'median': median_value,
#     }
#     return context


# def Percentile_25(request,id=0):
#     if request.method=='GET':
#         file=h1b.objects.all()
#         file_serializer=helper(file,many=True);
#         salaries=[item['salary'] for item in file_serializer.data]
#         percentile_25=calculate_percentile(25,salaries)if salaries else 0
#         # return JsonResponse(percentile_25,safe=False)
#         return percentile_25
    
# def Number(request,id=0):
#      if request.method=='GET':
#          data_length=h1b.objects.count()
#          context={
#              'data_length':data_length
#          }
#          return context
     


def main(request):
  
    start_time=time.time()
    mean = calculate_mean(request)
    end_time=time.time()
    timemean=custom_round(end_time-start_time)
    # return mean
    # start_time=time.time()
    # percentile_25 = Percentile_25(request)
    # end_time=time.time()
    # timePercentile25=end_time-start_time
    start_time=time.time()
    percentile_75 = Percentile(request)
    end_time=time.time()
    timePercentile75=custom_round(end_time-start_time)
    # start_time=time.time()
    # median = Median(request)
    # end_time=time.time()
    # timeMedian=custom_round(end_time-start_time)
    # start_time=time.time()
    # number = Number(request)
    # end_time=time.time()
    # timeNumber=custom_round(end_time-start_time)
    # time_taken=end_time-start_time
    res={'mean':mean,'timeout_mean':timemean,'percentile_75':percentile_75,'timeout_percentile_75':timePercentile75}
    return render(request,"index.html",res)

    return res
    return JsonResponse({'mean':mean,'timeoutmean':timemean,'percentile_75':percentile_75,'tpercentile':timePercentile75},safe=False)
    # return JsonResponse(percentile_75,safe=False)
    print(percentile_75)
    # response_data={
    #     'mean':{
    #         'mean':mean,
    #         "timeout":timemean
    #     },
        # mean,
        # percentile_75
        # 'percentile_75':{
        #     'percentile_75':percentile_75,
        #     "timeout":timePercentile75
        # }
    # }
    
    # response_data = {
    #     'mean': {'mean':mean,'timeout':timemean},
    #     # 'percentile_25': {'percentile_25':percentile_25,'timeout':timePercentile25},
    #     'percentile_75': {'percentile_75':percentile_75,'timeout':timePercentile75},
    #     'median': {'median':median,'timeout':timeMedian},
    #     'number': {'number':number,'timeout':timeNumber}
    # }
 
    # return render(request,"hello.html")
    # return render(request,'index.html',
    #     response_data
    # )
    

    return JsonResponse(response_data, safe=False)
    # return JsonResponse(response_data,safe=False)



