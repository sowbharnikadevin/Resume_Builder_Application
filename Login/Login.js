import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          localStorage.setItem('userEmail', data.email); // Store the email in localStorage
          navigate('/home'); 
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('Failed to login');
      }
    } catch (error) {
      alert('An error occurred during login');
    }
  };

  return (
    <div className="login-container-wrapper">
      <video className="background-video1" autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/838143378/video/curriculum-vitae-or-resume-animation.mp4?s=mp4-640x640-is&k=20&c=5fS2V6-f_EgXU1xeZf9XSc5KyUqVfY-ZA-eoH6TiT0M=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <b>Email:</b>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <b>Password:</b>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
