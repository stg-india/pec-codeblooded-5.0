#creating serializers
from django.contrib.auth.models import User
from django.urls import include, path
from rest_framework import serializers
from dashboard.models import Order

class OrderSerializer(serializers.HyperlinkedModelSerializer)
    class Meta:
        model:Order
        fields="__all__"