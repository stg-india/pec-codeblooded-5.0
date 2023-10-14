# Scenario - Audit Management

- Create a complex web-application to manage employee or student data, with interlinked relational data and ability to do CRUD operations.
- Audit all the operations that are happening on the application. 
- Create below components in the app
  - Display a history of all changes that has happened on an employee/student
  - A management UI to maintain and inquire the data, that can show old value and new values as part of audit history
  - A utility that can recreate an entity, by playing back all the audits with the same application (copy of a record until a specific point)
  - A utility that can record all activities in a given environment (say Production 
  - Have a config driven capability to switch on/off audit of specific features (eg. Audit for inquiries)
  - Ability to inquire based on one or many of the related data and audit the same (Eg. Employee Id or Phone Number or Department)

# Key Points 
- Try to use Django for app development
- Have a complex database structure with at least 10 different tables linked with each other

