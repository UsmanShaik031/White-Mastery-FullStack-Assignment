import React from 'react';
import UserList from './UserList';

const SuperAdminDashboard = () => {
  return (
    <div>
      <h2>Super Admin Dashboard</h2>
      <UserList canManageAdmins={true} />
    </div>
  );
};

export default SuperAdminDashboard;
