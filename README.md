# MONEY-TOUR WEB APPLICATION

## Description
This is a full-stack Money-Tour web application built using **Node.js**, **Express**, **MySQL**, **JWT (JSON Web Tokens)** for authentication, and **bcryptjs** for password hashing. It allows users to register, log in, and monitor their income and expenses. The application includes user authentication, and only authenticated users can access the main features of the Money-Tour.

## Features
- **User Registration**: New users can register with an email, name, username, and password.
- **User Login**: Registered users can log in using their username and password. JWT tokens are used for session management.
- **Authentication**: Routes are protected using JWT tokens, ensuring only logged-in users can access the application’s core features.
- **Money_Tour**: Once logged in, users can add, view, and monitor their expenses and incomes.
- **Responsive Design**: The front-end is designed to work across various devices.

## Tech Stack

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### Backend
- **Node.js**
- **Express.js**
- **MySQL** (for database management)
- **bcryptjs** (for hashing passwords)
- **jsonwebtoken (JWT)** (for authentication)

### Prerequisites
- **Node.js** (v12+)
- **MySQL** (for the database)
- **npm** (Node Package Manager)

## Getting Started

### Cloned the repository
### Installed dependencies using npm install
### Set up the database (MySQL)
### Created environment variable (.env) to store my secret key and MySQL user details and password.
### Created the frontend files for the user interface.
### Created the API endpoints to handle the user registration and login.
### Started the web application using node app.js and nodemon app.js for a continuous restarting of app,js while updated the files.

## Additional Notes:
Security: Passwords are hashed before storing in the database using bcrypt, and JWT tokens are used to authenticate users for protected routes.
Error Handling: The backend returns proper status codes and error messages for invalid requests or credentials.
Frontend: The frontend HTML files handle the UI and make API calls to the backend for registration, login, and accessing the index page.

