import React from 'react';
import UserList from './UserList';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserList canManageAdmins={false} />
    </div>
  );
};

export default AdminDashboard;
