# from operator import index
from unicodedata import name
from django.urls import path
from . import views
# from .views import MeanView
# from .views import He
# from django.conf.urls import urls
urlpatterns=[
    # path("",views.index,name="index"),
    # path("<str:name>" ,views.greet ,name="greet"),
    # path("",views.index ,name="index"),
    # path("upload",views.upload_csv,name="upload_csv")
    # path("david",views.david ,name="david")
    # path("",views.calculate_mean,name="calculate_mean"),
    # path("",views.SalaryApi,name="SalaryApi"),
    # path("percentile_75",views.Percentile,name="Percentile"),
    # path("percentile_25",views.Percentile_25,name="Percentile_25"),
    # path("number",views.Number,name="Number"),
    # path("median",views.Median,name="Median"),
    path("app/full",views.full,name="full"),
    path("app/percentile_25-75",views.JEE_MAINS,name="percentile_25-75"),
    path("app/number",views.Count,name="number"),
    path("app/median",views.Mid_value,name="median"),
    path("app/mean",views.Average,name="mean"),
    path("main",views.main,name="main"),
    path("my_view",views.my_view,name="my_view")
    
    # path("",MeanView.as_view(),name="mean")
    
]