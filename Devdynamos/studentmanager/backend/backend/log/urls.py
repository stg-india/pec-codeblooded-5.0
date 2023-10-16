from django.urls import path
from . import views
from .views import LogEntryList

urlpatterns=[
    path('logs/',views.getAllLogs,name='logs'),
    path('logs/<str:pk>',views.getLog,name='log'),
    path('logs/new/',views.newLog,name='new_log'),
    path('logs/<str:pk>/update/',views.updateLog,name='update_log'),
    path('logs/<str:pk>/delete/',views.deleteLog,name='delete_log'),
    path('api/log-entries/', LogEntryList.as_view(), name='log-entry-list')
    
]