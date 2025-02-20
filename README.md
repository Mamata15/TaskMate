✨ What is TaskMate?

![image](https://github.com/user-attachments/assets/8ef6115e-f7f0-4362-8452-b5ce5154bf81)
![image](https://github.com/user-attachments/assets/fba68a99-1c54-41d2-9d4a-d19750ee94b2)
![image](https://github.com/user-attachments/assets/e327b559-fe5c-47dd-bf50-038805973e53)
![image](https://github.com/user-attachments/assets/e2213723-2dd0-4370-a8ec-7d08655847b9)
![image](https://github.com/user-attachments/assets/ee445f51-0aaf-4b71-b161-aa86b77beec5)
![image](https://github.com/user-attachments/assets/8ae2dfd0-d38c-4d2e-81c2-f41d80bf177f)

🚀 TaskMate is a powerful task management web application designed to help users efficiently organize, manage, and track their tasks with ease.

🔹 Key Features
✅ Add Tasks: Easily create and manage tasks.
✅ Track Work Details: Monitor progress and maintain records of tasks.
✅ Filter & Search Tasks: Quickly find specific tasks using advanced filters.
✅ Secure & Reliable: Protected with JWT authentication for security.

With TaskMate, staying productive and organized has never been easier! 🎯

🛠 Technologies Used & Installation Links
🔹 Backend
Spring Boot – Backend framework. ➡️ Download
Java 17 – Backend programming language. ➡️ Download Java 17
🔹 Frontend
React.js – Interactive frontend UI. ➡️ Install Node.js (Required for React)
🔹 Database
MySQL Workbench – Database management. ➡️ Download
🔹 API Testing
Postman – API testing & debugging. ➡️ Download
🚀 Development Process
1️⃣ UI/UX Planning & Architecture
🎨 Before development, the UI/UX design was carefully planned to ensure an intuitive and smooth user experience. The system architecture was structured to define how components interact seamlessly.

2️⃣ Backend Development (Spring Boot & Java 17)
Once the architecture was finalized, backend development began by defining key entities:

📝 Task – Represents the user's tasks.
👤 User – Manages authentication and task ownership.
📌 Controllers & Service Logic:
Controllers and service layers were designed to efficiently handle business logic, process data, and manage requests.

3️⃣ Challenges Faced & Solutions
🔐 Password Encryption:
To secure user credentials, AES (Advanced Encryption Standard) was implemented after extensive research on encryption techniques.

🔄 Database Relationships:
One-to-Many & Many-to-One mappings in Spring Boot & JPA were implemented, though they required overcoming complexity in entity relationships.

4️⃣ API Testing & Frontend Integration
Since the frontend was still under development, APIs were tested using Postman to verify all endpoints. Once validated, they were integrated into the React.js frontend for a seamless user experience.

This structured approach ensured a smooth, secure, and efficient development process! 🚀

🎨 Frontend Development (React.js)
Once the backend was successfully tested using Postman, the focus shifted to frontend development using React.js.

🔹 Features Implemented
✅ Add Tasks: Create and manage tasks effortlessly.
✅ Edit Tasks: Modify existing tasks by clicking the pencil icon.
✅ Delete Tasks: Remove tasks when no longer needed.
✅ Filter Tasks: Keep track of tasks using the filtering option for better work-life organization.

🔹 Challenges Faced & Solutions
⚠️ CORS Issues:
Faced difficulties with Cross-Origin Resource Sharing (CORS) while integrating the frontend with the backend. This was resolved by configuring proper CORS policies in Spring Boot.

🎨 Enhancing Tiny Features:
Worked on refining UI/UX elements to improve user interaction and overall experience.

📸 Screenshots of TaskMate Web App Interface
(Screenshots are displayed above showcasing the final TaskMate UI)

