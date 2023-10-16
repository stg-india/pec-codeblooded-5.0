from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
# Create your models here.
from auditlog.registry import auditlog
from auditlog.models import AuditlogHistoryField
from datetime import *
class Gender(models.TextChoices):
    
     male="male"
     female="female"
     other="other"
class City(models.TextChoices):
     chandigarh="chandigarh"
     panchkula="panchkula"
     mohali="mohali"
     other="other"
class Degree(models.TextChoices):
     btech="Btech"
     mtech="Mtech"
     phd="Phd"
class Batch(models.IntegerChoices):
     one=2021
     two=2022
     three=2023
     four=2024
     five=2025
class Branch(models.TextChoices):
     cse="CSE"
     ece="ECE"
     ee="EE"
     mech="MECH"
class Quota(models.TextChoices):
     gen="General" 
     sc="SC" 
     st="ST"
     obc="OBC"
def return_date():
     return datetime.now()
class Hostel(models.TextChoices):
     kuk="Kurukshetra"
     vin="VIndhya"
     him="Himalaya"
     kal="Kalpana" 
class Prof(models.TextChoices):
     cult="Cultural"
     tech="Technical"
     sport="Sports"
class Scholar(models.TextChoices):
     non="none"
     ac="Academic"
     sp="Sports"
     pwd="PWD"
class Log(models.Model):
     sid=models.IntegerField(primary_key=True)
     history = AuditlogHistoryField()
     age=models.IntegerField(blank=True,null=True)
     step=models.IntegerField(default=0)
     name=models.CharField(max_length=100,blank=True, null=True)
     gender=models.CharField(
          choices=Gender.choices,
          blank=True, null=True
     )
     city=models.CharField(
          choices=City.choices,
          blank=True, null=True
     )
     pincode=models.IntegerField(blank=True, null=True)
     degree=models.CharField(
          choices=Degree.choices,
          blank=True, null=True
     )
     branch=models.CharField(
          choices=Branch.choices,
          blank=True, null=True
     )
     batch=models.IntegerField(
          choices=Batch.choices,
          blank=True, null=True
     )
     email=models.EmailField(blank=True, null=True)
     quota=models.CharField(
          choices=Quota.choices,
          blank=True, null=True
     )
     updatetime=models.DateTimeField(blank=True, null=True)
     cgpa=models.FloatField(blank=True, null=True)
     sgpa=models.FloatField(blank=True, null=True)
     hostel=models.CharField(
          choices=Hostel.choices,
          blank=True, null=True
     )
     prof=models.CharField(
          choices=Prof.choices,
          blank=True, null=True
     )
     scholar=models.CharField(
          choices=Scholar.choices,
          blank=True, null=True,
          
     )
auditlog.register(Log)