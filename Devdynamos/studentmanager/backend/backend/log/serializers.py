from rest_framework import serializers
from .models import Log
from auditlog.models import LogEntry

class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Log
        fields='__all__'
class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = '__all__'