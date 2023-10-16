import csv
import requests
import psycopg2

conn = psycopg2.connect(
    database = "H1B",
    user ='postgres',
    password = 'Om',
    host ='localhost',
    port='5432'
)

cursor = conn.cursor()

cursor.execute("select version()")

data = cursor.fetchone()
print("Connection established to:",data)

filepath = 'H1B_Disclosure_Data_FY16.csv'

with open(filepath, mode='r') as file:
    
    csvFile = csv.reader(file)




    for line_number, row in enumerate(csvFile,start=0):
        print("Inserting record: ", row)
        if line_number%2==0:
        
            cursor.execute(
                "INSERT INTO H1B_Disclosure_Data_FY16 (CASE_NUMBER, CASE_STATUS, CASE_SUBMITTED, DECISION_DATE, VISA_CLASS, EMPLOYMENT_START_DATE, EMPLOYMENT_END_DATE, EMPLOYER_NAME, EMPLOYER_ADDRESS, EMPLOYER_CITY, EMPLOYER_STATE, EMPLOYER_POSTAL_CODE, EMPLOYER_COUNTRY, EMPLOYER_PROVINCE, EMPLOYER_PHONE, EMPLOYER_PHONE_EXT, AGENT_ATTORNEY_NAME, AGENT_ATTORNEY_CITY, AGENT_ATTORNEY_STATE, JOB_TITLE, SOC_CODE, SOC_NAME, NAIC_CODE, TOTAL_WORKERS, FULL_TIME_POSITION, PREVAILING_WAGE, PW_UNIT_OF_PAY, PW_WAGE_SOURCE, PW_SOURCE_YEAR, PW_SOURCE_OTHER, WAGE_RATE_OF_PAY_FROM, WAGE_RATE_OF_PAY_TO, WAGE_UNIT_OF_PAY, H1B_DEPENDENT, WILLFULL_VIOLATOR, WORKSITE_CITY, WORKSITE_COUNTY, WORKSITE_STATE, WORKSITE_POSTAL_CODE, ORIGINAL_CERT_DATE) "
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);",
                (
                    str(row[0]),
                    str(row[1]),
                    str(row[2]),  
                    str(row[3]),  
                    str(row[4]),
                    str(row[5]),  
                    str(row[6]),  
                    str(row[7]),
                    str(row[8]),
                    str(row[9]),
                    str(row[10]),
                    str(row[11]),
                    str(row[12]),
                    str(row[13]),
                    str(row[14]),
                    str(row[15]),
                    str(row[16]),
                    str(row[17]),
                    str(row[18]),
                    str(row[19]),
                    str(row[20]),
                    str(row[21]),
                    str(row[22]),
                    str(row[23]),
                    str(row[24]),
                    str(row[25]),
                    str(row[26]),
                    str(row[27]),
                    str(row[28]),
                    str(row[29]),
                    str(row[30]),
                    str(row[31]),
                    str(row[32]),
                    str(row[33]),
                    str(row[34]),
                    str(row[35]),
                    str(row[36]),
                    str(row[37]),
                    str(row[38]),
                    str(row[39])
                ),
            )
        
    conn.commit()
    
conn.close()
