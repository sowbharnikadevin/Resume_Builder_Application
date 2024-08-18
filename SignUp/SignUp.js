import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('signup-body');
    return () => {
      document.body.classList.remove('signup-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirm_password: confirmPassword }),
      });

      if (response.ok) {
        navigate('/home'); // Navigate to the home page after successful sign-up
      } else {
        const errorData = await response.json();
        alert('Failed to sign up: ' + errorData.message);
      }
    } catch (error) {
      console.error('Sign up error:', error);
      alert('An error occurred during sign-up: ' + error.message);
    }
  };

  return (
    <div className="signup-body">
      <video autoPlay loop muted className="background-video">
        <source src="https://media.istockphoto.com/id/1692542108/video/job-recuietement-and-competition-with-group-of-candidates-cv-and-documents-one-person-got.mp4?s=mp4-640x640-is&k=20&c=-N82ubo-0afKKhk4LqHMAfosRsa4KjK2xvP3lHRkhk0=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already a user? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
