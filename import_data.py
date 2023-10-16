# import csv
# import os
# import django

# BATCH_SIZE = 1000000  # Adjust the batch size as needed

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ps1.settings')  # Replace 'your_project_name' with your actual project name
# django.setup()

# from app.models import h1b  # Replace 'H1B' with your actual model name

# # Read specific columns from the CSV
# with open(r'C:\Users\91868\django_app\ps1\h1b_data.xlsx.csv', 'r', encoding='utf-8') as file:
#     reader = csv.DictReader(file)
#     h1b_list = []
#     for i, row in enumerate(reader):
#         # Check if 'PW_UNIT_OF_PAY' or 'PREVAILING_WAGE' is empty
#         if not row['PW_UNIT_OF_PAY'] or not row['PREVAILING_WAGE']:
#             continue

#         # Remove commas and convert the 'PREVAILING_WAGE' column to a float
#         wage_str = row['PREVAILING_WAGE'].replace(',', '')
#         if wage_str:
#             salary = float(wage_str)

#             # Extract the 'PW_UNIT_OF_PAY' column and handle empty values
#             unitofpay = row['PW_UNIT_OF_PAY']

#             # Adjust salary based on the unit of pay
#             if unitofpay.lower() == 'month':
#                 salary *= 12
#             elif unitofpay.lower() == 'bi-weekly':
#                 salary *= 24
#             elif unitofpay.lower() == 'week':
#                 salary *= 52
#             elif unitofpay.lower() == 'hour':
#                 salary *= 2080

#             h1b_list.append(h1b(salary=salary, unitofpay=unitofpay))

#         if i > 0 and i % BATCH_SIZE == 0:
#             h1b.objects.bulk_create(h1b_list)
#             h1b_list = []

#     # Bulk create any remaining objects
#     if h1b_list:
#         h1b.objects.bulk_create(h1b_list)
import os
import csv
import django
from django.db import models
from django.db import transaction 
import time
BATCH_SIZE = 2000  # Adjust the batch size as needed

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ps1.settings')  # Replace 'your_project_name' with your actual project name
django.setup()

from app.models import h1b  # Replace 'H1B' with your actual model name

start_time = time.time()
# Read specific columns from the CSV
with open(r'C:\Users\91868\django_app\ps1\h1b_data.xlsx.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    h1b_list = []
    try:
        for i, row in enumerate(reader):
            # Check if 'PW_UNIT_OF_PAY' or 'PREVAILING_WAGE' is empty
            if not row['PW_UNIT_OF_PAY'] or not row['PREVAILING_WAGE']:
                continue

            # Remove commas and convert the 'PREVAILING_WAGE' column to a float
            wage_str = row['PREVAILING_WAGE'].replace(',', '')
            if wage_str:
                salary = float(wage_str)

                # Extract the 'PW_UNIT_OF_PAY' column and handle empty values
                unitofpay = row['PW_UNIT_OF_PAY']

                # Adjust salary based on the unit of pay
                if unitofpay.lower() == 'month':
                    salary *= 12
                elif unitofpay.lower() == 'bi-weekly':
                    salary *= 24
                elif unitofpay.lower() == 'week':
                    salary *= 52
                elif unitofpay.lower() == 'hour':
                    salary *= 2080

                h1b_list.append(h1b(
                    salary=salary,
                    unitofpay=unitofpay,
                    CASE_NUMBER=row['\ufeffCASE_NUMBER'],
                    CASE_STATUS=row['CASE_STATUS'],
                    CASE_SUBMITTED=row['CASE_SUBMITTED'],
                    DECISION_DATE=row['DECISION_DATE'],
                    VISA_CLASS=row['VISA_CLASS'],
                    EMPLOYMENT_START_DATE=row['EMPLOYMENT_START_DATE'],
                    EMPLOYMENT_END_DATE=row['EMPLOYMENT_END_DATE'],
                    EMPLOYER_NAME=row['EMPLOYER_NAME'],
                    EMPLOYER_ADDRESS=row['EMPLOYER_ADDRESS'],
                    EMPLOYER_CITY=row['EMPLOYER_CITY'],
                    EMPLOYER_STATE=row['EMPLOYER_STATE'],
                    EMPLOYER_POSTAL_CODE=row['EMPLOYER_POSTAL_CODE'],
                    EMPLOYER_COUNTRY=row['EMPLOYER_COUNTRY'],
                    EMPLOYER_PROVINCE=row['EMPLOYER_PROVINCE'],
                    EMPLOYER_PHONE=row['EMPLOYER_PHONE'],
                    EMPLOYER_PHONE_EXT=row['EMPLOYER_PHONE_EXT'],
                    AGENT_ATTORNEY_NAME=row['AGENT_ATTORNEY_NAME'],
                    AGENT_ATTORNEY_CITY=row['AGENT_ATTORNEY_CITY'],
                    AGENT_ATTORNEY_STATE=row['AGENT_ATTORNEY_STATE'],
                    JOB_TITLE=row['JOB_TITLE'],
                    SOC_CODE=row['SOC_CODE'],
                    SOC_NAME=row['SOC_NAME'],
                    NAIC_CODE=row['NAIC_CODE'],
                    TOTAL_WORKERS=row['TOTAL_WORKERS'],
                    FULL_TIME_POSITION=row['FULL_TIME_POSITION'],
                    PW_WAGE_SOURCE=row['PW_WAGE_SOURCE'],
                    PW_SOURCE_YEAR=row['PW_SOURCE_YEAR'],
                    PW_SOURCE_OTHER=row['PW_SOURCE_OTHER'],
                    WAGE_RATE_OF_PAY_FROM=row['WAGE_RATE_OF_PAY_FROM'],
                    WAGE_RATE_OF_PAY_TO=row['WAGE_RATE_OF_PAY_TO'],
                    WAGE_UNIT_OF_PAY=row['WAGE_UNIT_OF_PAY'],
                    H_1B_DEPENDENT=row['H-1B_DEPENDENT'],
                    WILLFUL_VIOLATOR=row['WILLFUL_VIOLATOR'],
                    WORKSITE_CITY=row['WORKSITE_CITY'],
                    WORKSITE_COUNTY=row['WORKSITE_COUNTY'],
                    WORKSITE_STATE=row['WORKSITE_STATE'],
                    WORKSITE_POSTAL_CODE=row['WORKSITE_POSTAL_CODE'],
                    ORIGINAL_CERT_DATE=row['ORIGINAL_CERT_DATE']
                ))

            if len(h1b_list)==BATCH_SIZE:
                with transaction.atomic():
                    h1b.objects.bulk_create(h1b_list)
                h1b_list = []

        # Bulk create any remaining objects
        if h1b_list:
            with transaction.atomic():
                h1b.objects.bulk_create(h1b_list)

    except Exception as e:
         print(f"Error processing row{i+1}:{str(e)}")

elapsed_time=time.time()-start_time
print(elapsed_time)