# CSV to PostgreSQL Import Script

This Python script is designed to import data from a CSV file into a PostgreSQL database. It uses the `psycopg2` library to establish a connection to the database and the `csv` module to read data from the CSV file. The script also performs some basic data validation and inserts records into the database.

## Prerequisites

Before using this script, you need to ensure the following:

1. Python is installed on your system.
2. The `psycopg2` library is installed. You can install it using `pip`:

pip install psycopg2

3. You have a PostgreSQL database set up and running.

## Usage

1. Update the PostgreSQL database connection details in the script to match your configuration:
```python
conn = psycopg2.connect(
    database="H1B",
    user='postgres',
    password='Om',
    host='localhost',
    port='5432'
)

1. Replace the 'filepath' variable with the path to your CSV file:

filepath = 'C:\\Users\\acer\\Downloads\\H1B_Disclosure_Data_FY16.csv'

2. Customize the 'INSERT INTO' statement to match your database table and column structure.The provided statement is specific to the H1B dataset.

3. Run the script.It will read the CSV file and insert records into the PostgreSQL database.

4. After running the script,you can query your database to verify that the data has been successfully imported.


Note

This script assumes that your CSV file is well-structured and matches the data format expected by your database.
Ensure that the data types and order of columns in the 'INSERT INTO' statement match your database schema.

Please handle sensitive data with care and consider data security best practices when working with databases.

Feel free to customize the script for your specific use case.

For questions or assistance, contact Shivansh Srivastava at roskom16122002@gmail.com.

