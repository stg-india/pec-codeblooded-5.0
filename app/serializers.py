from rest_framework import serializers
from .models import h1b

class helper(serializers.ModelSerializer):
    class Meta:
        model=h1b
        fields=('id','salary','unitofpay')