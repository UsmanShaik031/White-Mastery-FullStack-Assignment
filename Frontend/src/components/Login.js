import React, { memo, useState } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3000/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Login failed');
      }

      const { accessToken, refreshToken } = await res.json();

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/app');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
      </Form.Group>

      <Form.Group controlId="password" className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <div className="text-right mt-2">
        <Link to="/forgot-password">Forgot Password</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/register">Register</Link>
      </div>

      <Button className="mt-3" type="submit" disabled={!email || !password}>
        Login
      </Button>
    </Form>
  );
}

export default memo(Login);
