# MONEY TOUR WEB APPLICATION

## Description
Money Tour is a full-stack web application designed to help users manage and track their income and expenses. It allows users to register, log in, add transactions (income and expenses), view their transaction history, and see their current balance. The project uses a MySQL database to store user and transaction data, database management, and data retrieval with a dynamic, interactive frontend interface. Money Tour is built using **Node.js**, **Express**, **MySQL** and **bcryptjs** for password hashing.

## Table of Contents
- **Features**
- **Technologies Used**
- **Getting Started**
- **API Endpoints**
- **Database Schema**
- **Testing and Debugging**
- **Future Improvements**
- **Additional notes**

## Features
- **User Registration**: New users can register with an email, username, and password.
- **User Login**: Registered users can log in using their username and password.
- **Authentication**: Routes are protected using user password, ensuring only logged-in users can access the application’s core features.
- **Transaction Management**: Once logged in, users can add, view, and monitor/manage their transactions (incomes and expenses).
- **Balance Overview**: The dashboard displays the user's current balance.
- **Transaction History**: A table view of all transactions with details like Transaction ID, Transaction Type, Transaction Details, Amount and Date.
Session Management: Uses sessions to manage user authentication and secure data access.
- **Responsive Design**: The front-end is designed to work across various devices when logged in through a web browser.

## T
Here’s a sample README file for the "Money Tour" project:

Money Tour
Money Tour is a full-stack web application designed to help users manage and track their expenses and income. It allows users to register, log in, add transactions (income and expenses), view their transaction history, and see their current balance. The project uses a MySQL database to store user and transaction data and includes user authentication, database management, and data retrieval with a dynamic, interactive frontend interface.

Table of Contents
Features
Technologies Used
Getting Started
API Endpoints
Database Schema
Testing and Debugging
Future Improvements
Features
User Registration and Login: Secure registration and login functionality with password hashing.
Transaction Management: Users can add, view, and manage their transactions.
Balance Overview: Displays the current balance, total income, and total expenses.
Transaction History: A table view of all transactions with details like type, amount, date, and particulars.
Session Management: Uses sessions to manage user authentication and secure data access.
Error Handling: Graceful error handling and user feedback on errors.

## Technologies Used

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**

### Backend
- **Node.js**
- **Express.js**
- **MySQL** (for database management)
- **bcryptjs** (for hashing passwords)
- **Testing tool**: Used postman for API testing

### Prerequisites (installed before getting started)
- **Node.js** (v12+)
- **MySQL server and workbench** (for the database)
- **npm** (Node Package Manager)

## Getting started (my Process):

#### Cloned the repository
    git clone https://github.com/cyprianchukz/portfolio_project.git
    cd portfolio_project
#### Installed dependencies using npm install
    npm install express mysql2 cors path dotenv bcryptjs body-parser
#### Set up the database (MySQL)
    Create a MySQL database named moneytour.
    Created the SQL schema in the database/moneytour.
    Update your database connection settings in app.js.
#### Created environment variable (.env) to store my MySQL user details and password.
#### Created the frontend files for the user interface.
#### Created the API endpoints to handle the user registration and login.
#### Started the web application using node app.js or nodemon app.js for a continuous restarting of app.js while updating the files.
#### Accessed the Application: 
    Opened my browser and logged on to http://localhost:3000.

## API Endpoints
Here are the main API endpoints for the application:

##### Register User: /api/register (POST)
    Body: { email, username, password }
    Response: { success: true, message: 'User registered successfully' }
##### Login User: /api/login (POST)
    Body: { username, password }
    Response: { message: 'Login successful!' }
##### Add Transaction: /api/transactions (POST)
    Body: { type, particulars, amount, date, user_id }
    Response: { message: 'Transaction added successfully!' }
##### Get All Transactions: /api/transactions (GET)
    Response: Array of transaction objects (in table format at users end)
##### Get User Balance: /api/balance (GET)
    Response: { balance, totalIncome, totalExpense }

## Database Schema
#### Users Table
| Column   | Type                         | Description            |
|----------|------------------------------|------------------------|
| user_id  | INT, Primary Key, Auto Increment | Unique user identifier |
| email    | VARCHAR(255)                 | User email             |
| username | VARCHAR(50)                  | Unique username        |
| password | VARCHAR(255)                 | Hashed user password   |

#### Transactions Table
| Column	    | Type	                            |Description            | 
|---------------|-----------------------------------|------------------------|
|transaction_id	| INT, Primary Key, Auto Increment | Unique transaction identifier      |
|user_id	    | INT, Foreign Key (references users.user_id) | Associated user identifier |
|type	        | ENUM ('income', 'expense')        | Type of transaction   |
|particulars    | VARCHAR(255)	                    | Transaction details   |
|amount	        | DECIMAL(10, 2)                    | Transaction amount    |
|date	        | DATE                          	| Date of transaction   |

## Testing and Debugging
Used Postman to test API endpoints, ensuring proper responses and error handling.
Used console logging and error handlers in app.js to trace errors and issues.
Ensured the MySQL server is running on the right port and that the connection details in app.js are correct.

## Future Improvements
- **Enhanced Authentication**: Implement JWT or OAuth for secure authentication.
- **Transaction Filtering**: Add filters for viewing transactions by date range or type.
- **User Profiles**: Allow users to update their profile information.
- **Frontend Enhancements**: Improve styling and add more dynamic frontend components.

## Additional Notes:
Security: Passwords are hashed before storing in the database using bcrypt.
Error Handling: The backend returns proper status codes and error messages for invalid requests or credentials.
Frontend: The frontend HTML files handle the UI and make API calls to the backend for registration, login, and accessing the index page.
The backend uses Express and MySQL to register, log in, and access the protected index page.
