# Scenario - Data Analysis
- Download the H1B data for years from 2016 to 2019 from the link below  
  > https://www.dol.gov/agencies/eta/foreign-labor/performance:
- Ingest the records into a Postgres database
- Create a Django app based API , which can do below on demand
  - Number of results
  - Mean salary
  - Median salary
  - 25% percentile salary
  - 75% percentile salary
  - percentile salary on demand (based on input %)
    

# Key Points
- Try to use Django for app development
- Do not use libraries like pandas or numpy, and try to write your own code for loading and analyzing the data 
- Write a well performant code and try to measure the API and query performance

