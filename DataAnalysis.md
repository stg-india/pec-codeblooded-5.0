# Scenario - Data Analysis

- ### Download the H1B data for years from 2016 to 2019 from the link below

  > https://www.dol.gov/agencies/eta/foreign-labor/performance:

  - Download the data files for the years 2016 to 2019 in a format like CSV.

- ### Ingest the records into a Postgres database

  - Ensure you have PostgreSQL installed and running.
  - Create a new PostgreSQL database and a table to store the H1B data.
  - Write Python code to read the downloaded CSV files and insert the data into the PostgreSQL database.

- ### ​Create a Django App-Based API:
  - Create a Django project and app for your API.
  - Define models in Django to represent the data in your PostgreSQL database.
  - Create API endpoints for the following functionalities:
    - Number of results: Count the total number of records in the database.
    - Mean salary: Calculate the mean (average) salary of H1B applicants.
    - Median salary: Calculate the median salary of H1B applicants.
    - 25% percentile salary: Calculate the 25th percentile salary.
    - 75% percentile salary: Calculate the 75th percentile salary.
- ### Data Analysis :

  - Write Python code within your Django app to perform the required data analyses **without using pandas or numpy**.
  - You'll need to calculate the statistical measures using SQL queries or custom Python functions.

- ### Performance Measurement:
  - Implement performance measurement within your Django app.
  - Use tools like Django Debug Toolbar or custom profiling to measure API response times and query performance.
  - Optimize your code for better performance, if needed.
