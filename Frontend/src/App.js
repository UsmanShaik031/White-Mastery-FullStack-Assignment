import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    window.addEventListener('storage', ({ oldValue, newValue }) => {
      alert(`You can not change role/roles from ${oldValue} to ${newValue}. Please log out and log in with a different role.`);
      localStorage.setItem('roles', oldValue);
    });
  }

  getUserRole = () => {
    return localStorage.getItem('role'); 
  };

  renderDashboard = () => {
    const role = this.getUserRole();
    if (role === 'SUPER_ADMIN') return <SuperAdminDashboard />;
    if (role === 'ADMIN') return <AdminDashboard />;
    if (role === 'USER') return <UserDashboard />;
    return <Navigate to="/login" />;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={this.renderDashboard()} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
