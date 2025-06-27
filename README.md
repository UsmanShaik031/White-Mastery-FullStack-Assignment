# 🧑‍💼 User Management Dashboard

This is a full-stack user management system I built for a timed task. It supports different dashboards and permissions based on roles like **Super Admin**, **Admin**, and **Normal User**. I used **NestJS** and **PostgreSQL** for the backend, and **React** for the frontend.

---

## 🚀 What This Project Does

Each user has a role that defines what they can access:

- **Super Admin** → Full control (manage any user, roles, and status)
- **Admin** → Can manage regular users and view other admins
- **User** → Can view and update their own profile

The UI changes based on the role after login, and users are redirected to their dashboard.

---

## ⚙️ How to Run the Project

### 🖥️ Backend Setup (NestJS + PostgreSQL)

**1. Clone the repo**
git clone https://github.com/yourusername/user-management-dashboard.git
cd user-management-dashboard/backend

**2.Install dependencies**
npm install

**3.Add your .env file**
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/userdb
JWT_SECRET=your_jwt_secret

**4.Run migrations and seed the Super Admin**
npm run migration:run
npm run seed

**5.Start the backend server**
npm run start:dev


🌐 Frontend Setup (React)

 **1.Navigate to frontend folder**
 cd ../frontend

**2.Install dependencies**
npm install

**3.Start the frontend**
npm start


**What I Used :-**

**Backend**
NestJS
PostgreSQL
TypeORM
JWT Auth
Bcrypt for password hashing
Class-validator for validation

**Frontend**
React.js
Axios for API calls
React Router
React Hook Form
MUI (or Tailwind, based on what you used)

**
🔐 API Endpoints
Here's what I implemented:
**

Authentication
POST /auth/signup – Create user (default role: USER)
POST /auth/login – Login and receive JWT
GET /auth/profile – Get the logged-in user's data
User Management (Protected)
GET /users – List users (admin/super admin)
POST /users – Create a new user
PATCH /users/:id – Update user
DELETE /users/:id – Delete user
PATCH /users/:id/role – Change role (super admin only)
PATCH /users/:id/status – Activate/deactivate user

**🧠 How I Structured It**
The backend and frontend are in separate folders (/backend, /frontend)
Role-based routes are protected using NestJS guards
Frontend uses JWT to manage sessions and redirect users after login
Clean separation: services handle logic, controllers handle requests
Error handling is global in the backend using NestJS filters

