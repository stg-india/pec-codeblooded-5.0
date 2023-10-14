# Scenario - Audit Management

- Develop a comprehensive web-based application for managing employee or student information, featuring interconnected relational data and the capability to perform Create, Read, Update, and Delete (CRUD) operations. Implement thorough auditing for all actions carried out within the application.​

- Key components to include in the application:
  - **Change History Viewer:** Provide a feature to display a historical record of all modifications made to employee or student data.
  - **Management Dashboard:** Design a user-friendly interface for maintaining and querying the data. This dashboard should present both the previous and updated values as part of the audit history.
  - **Entity Restoration Utility:** Create a tool that can recreate an entity by replaying all audit records up to a specified point, effectively restoring a record to a previous state.
  - **Activity Logging:** Implement a utility to log all activities within a given environment, such as the production environment.
  - ​**Configurable Auditing:** Enable the configuration-driven capability to enable or disable auditing for specific features. This would allow administrators to choose which actions to audit, like inquiries.
  - **Advanced Query Capabilities:** Develop the ability to perform inquiries based on one or more related data fields, such as Employee ID, Phone Number, or Department. These queries should also include an audit trail for the queried data.
  - **Technology Choice:** Utilize the Django framework for application development, which provides robust tools for building web applications efficiently.
  - **Complex Database Structure:** Create a complex database structure comprising a minimum of 10 distinct tables with interconnections to support the application's relational data requirements.

# Key Points

- This application aims to provide a powerful and versatile solution for managing, auditing, and querying employee or student data while leveraging the Django framework's capabilities for efficient web application development.​
