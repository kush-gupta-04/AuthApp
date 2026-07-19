# 🔐 AuthApp - Node.js Authentication & Authorization API

A secure authentication and authorization REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. This project implements user registration, login, password encryption using **bcrypt**, JWT-based authentication, and role-based authorization.

---

## 🚀 Features

- 🔑 User Signup & Login
- 🔒 Password Hashing using bcrypt
- 🎫 JWT Authentication
- 👥 Role-Based Authorization (Student & Admin)
- 🍪 Secure Cookie Authentication
- 📦 MongoDB Database Integration with Mongoose
- ⚡ Express Middleware Support
- 🛡 Protected Routes using Authentication Middleware
- 🌐 RESTful API Architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- dotenv

---

## 📂 Project Structure

```text
AuthApp/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── Auth.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── user.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/AuthApp.git
```

### Navigate to the project

```bash
cd AuthApp
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=4000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the server

```bash
npm run dev
```

or

```bash
node index.js
```

---

## 📮 API Endpoints

### User Signup

```http
POST /api/v1/signup
```

Body

```json
{
    "name":"Kushagra",
    "email":"abc@gmail.com",
    "password":"Kush@0401",
    "role":"Student"
}
```

---

### User Login

```http
POST /api/v1/login
```

Body

```json
{
    "email":"abc@gmail.com",
    "password":"Kush@0401"
}
```

---

## 🔐 Authentication Flow

1. User registers with email and password.
2. Password is hashed using bcrypt.
3. User logs in with valid credentials.
4. JWT token is generated.
5. Token is stored in an HTTP-only cookie.
6. Protected routes verify the JWT before granting access.
7. Role-based middleware authorizes Student/Admin access.

---

## 📦 Dependencies

- express
- mongoose
- bcrypt
- jsonwebtoken
- cookie-parser
- dotenv
- nodemon

---

## 🎯 Future Improvements

- Forgot Password
- Reset Password via Email
- Email Verification
- Refresh Tokens
- Rate Limiting
- Input Validation
- Swagger API Documentation

---

## 👨‍💻 Author

**Kushagra Gupta**

📧 kushagragupta0401@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/kush-gupta0401/

---

## ⭐ Show your support

If you found this project helpful, please consider giving it a ⭐ on GitHub!
