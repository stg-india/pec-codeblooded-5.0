# yourapp/models.py
from django.db import models

class YourModelName(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.CharField(max_length=100)
    # ... define other fields as per your CSV columns
