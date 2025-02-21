✨ WHAT IS TASKMATE?

🚀 TaskMate is a powerful task management web application designed to help users efficiently organize, manage, and track their tasks with ease.


![image](https://github.com/user-attachments/assets/8ef6115e-f7f0-4362-8452-b5ce5154bf81)
![image](https://github.com/user-attachments/assets/fba68a99-1c54-41d2-9d4a-d19750ee94b2)
![image](https://github.com/user-attachments/assets/e327b559-fe5c-47dd-bf50-038805973e53)
![image](https://github.com/user-attachments/assets/e2213723-2dd0-4370-a8ec-7d08655847b9)
![image](https://github.com/user-attachments/assets/ee445f51-0aaf-4b71-b161-aa86b77beec5)
![image](https://github.com/user-attachments/assets/8ae2dfd0-d38c-4d2e-81c2-f41d80bf177f)

📌 KEY FEATURES

✅ Add Tasks: Easily create and manage tasks effortlessly.
✅ Track Work Details: Monitor progress and maintain task records.
✅ Filter & Search Tasks: Quickly find specific tasks using advanced filters.
✅ Secure & Reliable: Protected with JWT authentication for data security.

With TaskMate, staying productive and organized has never been easier! 🎯

🛠 TECHNOLOGIES USED & INSTALLATION LINKS
🔹 Backend

Spring Boot – Backend framework. ➡️ Download Spring Boot
Java 17 – Backend programming language. ➡️ Download Java 17
🔹 Frontend

React.js – Interactive frontend UI. ➡️ Install Node.js (Required for React)
🔹 Database

MySQL Workbench – Database management. ➡️ Download MySQL Workbench
🔹 API Testing

Postman – API testing & debugging. ➡️ Download Postman

🚀 DEVELOPMENT PROCESS

1️⃣ UI/UX PLANNING & ARCHITECTURE

🎨 Before development, the UI/UX design was carefully planned to ensure an intuitive and smooth user experience. The system architecture was structured to define seamless component interactions.

2️⃣ BACKEND DEVELOPMENT (SPRING BOOT & JAVA 17)

Once the architecture was finalized, backend development began with the definition of key entities:

📝 Task – Represents the user's tasks.
👤 User – Manages authentication and task ownership.

📌 Controllers & Service Logic:
Controllers and service layers were implemented to handle business logic, process data, and manage requests efficiently.

3️⃣ CHALLENGES FACED & SOLUTIONS

🔐 Password Encryption
To secure user credentials, AES (Advanced Encryption Standard) was implemented after extensive research on encryption techniques.

🔄 Database Relationships
One-to-Many & Many-to-One mappings in Spring Boot & JPA were implemented, overcoming complexity in entity relationships.

4️⃣ API TESTING & FRONTEND INTEGRATION

Since the frontend was under development, APIs were tested using Postman to verify all endpoints. Once validated, they were integrated into the React.js frontend for a seamless user experience.

This structured approach ensured a smooth, secure, and efficient development process! 🚀

🚀 HOW TO SET UP & RUN TASKMATE
Follow these steps to install, set up, and run TaskMate seamlessly.

🛠 Prerequisites
Ensure the following tools and technologies are installed on your system:

🔹 Backend
✅ Java 17 – Required for running Spring Boot.
✅ Spring Boot – Backend framework for TaskMate.

🔹 Frontend
✅ Node.js – Required for running the React.js frontend.

🔹 Database
✅ MySQL Workbench – Database management tool.

🔹 API Testing (Optional but Recommended)
✅ Postman – For testing APIs before frontend integration.

📌 Steps to Run TaskMate
1️⃣ Clone the Repository
Use Git to clone the TaskMate project repository:

sh
Copy
Edit
git clone <your-repo-url>
Navigate into the project folder:

sh
Copy
Edit
cd TaskMate
🔹 BACKEND SETUP (Spring Boot)
2️⃣ Configure MySQL Database
Open MySQL Workbench and create a database named taskmate.
Update application.properties  in the Spring Boot project with your database credentials:
properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:8080/task
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
3️⃣ Run the Spring Boot Application
Navigate to the backend folder:

sh
Copy
Edit
cd backend
Run the application using:

sh
Copy
Edit
mvn spring-boot:run


🔹 FRONTEND SETUP (React.js)
4️⃣ Install Dependencies
Navigate to the frontend folder:

sh
Copy
Edit
cd frontend
Install required dependencies in VS code

sh
Copy
Edit
npm install
5️⃣ Start the React.js Application
Run the frontend server:

sh
Copy
Edit
npm start
The React app will be available at:
http://localhost:3000

🎯 Testing the Setup
✅ Open Postman and test API endpoints (http://localhost:8080/api/...).
✅ Open a browser and navigate to http://localhost:3000 to interact with TaskMate.

💡 Additional Notes
If facing CORS issues, ensure the backend allows requests from the frontend domain (http://localhost:3000).
For JWT authentication, ensure valid user credentials are used.


🎨 FRONTEND DEVELOPMENT (REACT.JS)

Once the backend was successfully tested using Postman, the focus shifted to frontend development using React.js.

🔹 FEATURES IMPLEMENTED

✅ Add Tasks: Create and manage tasks effortlessly.
✅ Edit Tasks: Modify existing tasks using an intuitive pencil icon.
✅ Delete Tasks: Remove tasks when no longer needed.
✅ Filter Tasks: Keep track of tasks using filtering options for better organization.

🔹 CHALLENGES FACED & SOLUTIONS

⚠️ CORS Issues
Difficulties with Cross-Origin Resource Sharing (CORS) were encountered when integrating the frontend with the backend. This was resolved by configuring appropriate CORS policies in Spring Boot.

🎨 Enhancing Tiny Features
Worked on refining UI/UX elements to improve user interaction and overall experience.

📸 SCREENSHOTS OF TASKMATE WEB APP INTERFACE

(Screenshots showcasing the final TaskMate UI)

TaskMate is a robust and reliable tool that streamlines task management with an intuitive interface and powerful features. This document serves as an in-depth guide, ensuring clarity and professionalism while presenting TaskMate to the office for submission.

