import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  function logout() {
    localStorage.removeItem('user');
    navigate('/');
  }

  if (!user) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>You are not logged in.</h2>
        <button onClick={() => navigate('/')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome, {user.name}</h1>
      <img src={user.picture} alt="Profile" width="100" />
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
