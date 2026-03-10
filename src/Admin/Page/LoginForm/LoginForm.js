import React, { useState } from 'react';
import Navigation from '../../../Module/Navigation';
const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (userId === '1' && password === '1') {
      alert('Login successful');
      setIsLoggedIn(true); // Set login status to true
      window.location.href = '/AdminHome'; // Navigate to home page after successful login
    } else {
      setError('Invalid user ID or password');
    }
  };

  return (
    <>

    <Navigation/>
      

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ marginBottom: '20px', color: '#007bff' }}>Login</h2>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
