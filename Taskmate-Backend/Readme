# Task Management System - Backend

## Overview  
The **Task Management System** backend is built using **Spring Boot** and provides secure user authentication, task management, and database interaction through RESTful APIs. It includes:  
- **JWT-based authentication** for secure access  
- **AES encryption** for data protection  
- **Spring Security** to safeguard endpoints  
- **Spring Data JPA** for seamless database operations  

---

## Features  

- ✅ **User Authentication** – Secure JWT-based authentication  
- ✅ **AES Encryption** – Protects sensitive data  
- ✅ **Task Management** – CRUD operations for tasks  
- ✅ **Spring Security** – Restricts access to authorized users  
- ✅ **Spring Data JPA** – Efficient database handling  

---

## Tech Stack  

- **Java 17**  
- **Spring Boot 3**  
- **Spring Security & JWT**  
- **Spring Data JPA**  
- **PostgreSQL/MySQL** *(Choose based on your setup)*  
- **Lombok** *(Reduces boilerplate code)*  

---

## Prerequisites  

Ensure you have the following installed:  

- **Java 17 or later**  
- **Maven 3.8+**  
- **PostgreSQL or MySQL database**  

---

### 1️⃣ **Clone the Repository**  
git clone <repository-url>
cd backend

2️⃣ Configure Database
Update application.properties or application.yml with your database credentials:

properties
Copy
Edit
spring.datasource.url=jdbc:postgresql://localhost:8080/task
spring.datasource.username=your_username
spring.datasource.password=your_password


3️⃣ Build & Run
sh
Copy
Edit
mvn clean install
mvn spring-boot:run

🌍 API ENDPOINTS
🔐 Authentication
Login – POST /api/task/login
Register – POST /api/task/signup

👤 User Management
Get All Users – GET /users
Get User by ID – GET /users/{id}
Update User – PUT /users/{id}
Delete User – DELETE /users/{id}

📌 Task Management
Create Task – POST /tasks
Get All Tasks – GET /tasks
Get Task by ID – GET /tasks/{id}
Update Task – PUT /tasks/{id}
Delete Task – DELETE /tasks/{id}

🔒 SECURITY
JWT is used for authentication.
AES encryption secures sensitive data.
Protected Endpoints require a Bearer token in the request header.

🌎 ENVIRONMENT VARIABLES
Set the following environment variables in your system or .env file:

sh
Copy
Edit
JWT_SECRET=your_jwt_secret_key
AES_SECRET_KEY=your_aes_secret_key


Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Add new feature")
Push to your branch (git push origin feature-branch)
Create a Pull Request
