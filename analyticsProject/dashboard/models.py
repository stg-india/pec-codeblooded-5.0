from django.db import models

# Create your models here.


class Order(models.Model):
    CASE_NUMBER = models.CharField(max_length=50)
    CASE_NUMBER = models.CharField(max_length=50)
    CASE_STATUS = models.CharField(max_length=50)
    CASE_SUBMITTED = models.DateTimeField
    DECISION_DATE = models.DateTimeField
    VISA_CLASS = models.CharField(max_length=50)
    EMPLOYMENT_START_DATE = models.DateTimeField
    EMPLOYMENT_END_DATE = models.DateTimeField
    EMPLOYER_NAME = models.CharField(max_length=50)
    EMPLOYER_ADDRESS = models.CharField(max_length=50)
    EMPLOYER_CITY = models.CharField(max_length=50)
    EMPLOYER_STATE = models.CharField(max_length=50)
    EMPLOYER_POSTAL_CODE = models.AutoField
    EMPLOYER_COUNTRY = models.CharField(max_length=50)
    EMPLOYER_PROVINCE = models.CharField(max_length=50)
    EMPLOYER_PHONE = models.AutoField
    EMPLOYER_PHONE_EXT = models.CharField(max_length=50)
    AGENT_ATTORNEY_NAME = models.CharField(max_length=50)
    AGENT_ATTORNEY_CITY = models.CharField(max_length=50)
    AGENT_ATTORNEY_STATE = models.CharField(max_length=50)
    JOB_TITLE = models.CharField(max_length=50)
    SOC_CODE = models.CharField(max_length=50)
    SOC_NAME = models.CharField(max_length=50)
    NAIC_CODE = models.AutoField
    TOTAL_WORKERS = models.AutoField
    FULL_TIME_POSITION = models.CharField(max_length=50)
    PREVAILING_WAGE = models.AutoField
    PW_UNIT_OF_PAY = models.CharField(max_length=50)
    PW_WAGE_SOURCE = models.CharField(max_length=50)
    PW_SOURCE_YEAR = models.AutoField
    PW_SOURCE_OTHER = models.CharField(max_length=50)
    WAGE_RATE_OF_PAY_FROM = models.AutoField
    WAGE_RATE_OF_PAY_TO = models.AutoField
    WAGE_UNIT_OF_PAY = models.CharField(max_length=50)
    H1B_DEPENDENT = models.CharField(max_length=50)
    WILLFULL_VIOLATOR = models.CharField(max_length=50)
    WORKSITE_CITY = models.CharField(max_length=50)
    WORKSITE_COUNTY = models.CharField(max_length=50)
    WORKSITE_STATE = models.CharField(max_length=50)
    WORKSITE_POSTAL_CODE = models.AutoField
    ORIGINAL_CERT_DATE = models.DateTimeField
