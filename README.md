✨ What is TaskMate?



![image](https://github.com/user-attachments/assets/8ef6115e-f7f0-4362-8452-b5ce5154bf81)
![image](https://github.com/user-attachments/assets/fba68a99-1c54-41d2-9d4a-d19750ee94b2)
![image](https://github.com/user-attachments/assets/e327b559-fe5c-47dd-bf50-038805973e53)
![image](https://github.com/user-attachments/assets/e2213723-2dd0-4370-a8ec-7d08655847b9)
![image](https://github.com/user-attachments/assets/ee445f51-0aaf-4b71-b161-aa86b77beec5)
![image](https://github.com/user-attachments/assets/8ae2dfd0-d38c-4d2e-81c2-f41d80bf177f)

TaskMate is a task management web application designed to help users efficiently organize and track their work.

🔹 Add Tasks: Users can create and manage their tasks effortlessly.
🔹 Track Work Details: Monitor progress and keep records of completed or pending tasks.
🔹 Filter & Search Tasks: Quickly find specific tasks using advanced filtering and search features.
🔹 Secure & Reliable: The app is secured with JWT authentication, ensuring data privacy and security.

With TaskMate, staying productive and organized has never been easier! 🚀

🛠 Technologies Used & Installation Links:
Backend:
Spring Boot – Framework for backend development. Download
Java 17 – Programming language for backend logic. Download Java 17
Frontend:
React.js – Frontend library for building an interactive UI. Install Node.js (Required for React)
Database:
MySQL Workbench – Used for managing and storing task data. Download
API Testing:
Postman – Used to test and debug API endpoints. Download

🚀 Development Process
1️⃣ UI/UX Planning & Architecture
Before starting the development, the UI/UX design was planned to ensure a smooth and user-friendly experience. The architecture was mapped out, defining how different components would interact.

2️⃣ Backend Development (Spring Boot & Java 17)
Once the architecture was finalized, backend development began. The focus was on structuring the system based on two key entities:

Task – Represents the user's tasks.
User – Manages authentication and task ownership.
Controllers and Service Logic:
Controllers and service layers were implemented to handle business logic, data processing, and request handling.

3️⃣ Challenges Faced & Solutions
🔹 Password Encryption: Encrypting user passwords was a critical security measure. After researching different encryption techniques, AES (Advanced Encryption Standard) was chosen for securing passwords.
🔹 Database Relationships: Implementing One-to-Many and Many-to-One mappings was complex, requiring an in-depth understanding of entity relationships in Spring Boot & JPA.

4️⃣ API Testing & Frontend Integration
Since the frontend wasn’t ready, API testing was performed using Postman to ensure all endpoints functioned correctly. Once verified, the API endpoints were integrated into the React.js frontend to complete the user experience.

This structured approach ensured a smooth development process while overcoming challenges effectively. 🚀
Frontend Development (React.js)
After completing and testing the backend using Postman, the focus shifted to frontend design and implementation using React.js.

🔹 Features Implemented
✅ Add Tasks: Users can create and manage their tasks effortlessly.
✅ Edit Tasks: Clicking the pencil icon allows users to modify existing tasks.
✅ Delete Tasks: Users can remove tasks when no longer needed.
✅ Filter Tasks: A filtering option helps users keep track of their work-life balance by organizing tasks effectively.

🔹 Challenges Faced & Solutions
🔸 CORS Issues: Faced difficulties with Cross-Origin Resource Sharing (CORS) when connecting the frontend to the backend. This was resolved by configuring proper CORS policies in Spring Boot.
🔸 Enhancing Tiny Features: Worked on refining small UI/UX details to provide a smoother user experience.

Below are the screenshots showcasing the final TaskMate web app interface.
