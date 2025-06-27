# User Management Dashboard – Frontend

## 🌐 Overview

This is the **frontend** of the User Management Dashboard — a Single Page Application (SPA) built using **React.js**. It provides a role-based user interface for managing user profiles and permissions, supporting three roles: **Super Admin**, **Admin**, and **Normal User**.

---

## 🚀 Features

- 🔐 **Authentication** – Signup (Normal Users only) & Login with role-based redirection
- 🧑‍💼 **Role-based Dashboards**:
  - **Super Admin**: Manage all users & roles
  - **Admin**: Manage normal users
  - **User**: View & update personal profile
- 👥 **User Management** (Admin & Super Admin only):
  - Create/Edit/Delete users
  - Activate/Deactivate users
  - Search, filter, and paginate user lists
- 📱 **Responsive Design** – Mobile-friendly layout
- 🎨 **Reusable Components** – Modular architecture using React best practices

---

## 🛠️ Technologies Used

- **React.js**
- **React Router**
- **Axios**
- **Bootstrap / TailwindCSS / MUI** (choose the one you used)
- **Context API / Redux** (if applicable)
- **JWT-based route guards**

---

## 📦 Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/user-management-frontend.git
   cd user-management-frontend
   npm install
   REACT_APP_API_URL=http://localhost:3000/api 
   npm start
