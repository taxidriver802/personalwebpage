import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp({ setUserData }) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = ({ name, email, password }) => {
    if (!name.value.trim() || !email.value.trim() || !password.value) {
      return 'All fields are required.';
    }
    if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
      return 'Please enter a valid email address.';
    }
    if (password.value.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;

    const errorMessage = validateForm({ name, email, password });
    if (errorMessage) {
      return setMessage(errorMessage);
    }

    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value,
    };

    localStorage.setItem('user', JSON.stringify(formData));
    setUserData(formData);
    setMessage('Sign-up successful! Redirecting...');
    setTimeout(() => navigate('/profile'), 2000);
  };

  return (
    <>
      <h1 className="signup__title">My version of Github</h1>

      <div className="signup">
        <div className="signup__form">
          <h2 className="signup__form-title">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="signup__form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i>
              </label>
              <input
                className="signup__form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="signup__form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i>
              </label>
              <input
                className="signup__form-input"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="signup__form-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i>
              </label>
              <input
                className="signup__form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                required
              />
            </div>
            <button className="signup__form-button" type="submit">
              Sign Up
            </button>
          </form>
          {message && <p className="signup__message">{message}</p>}
        </div>
        <img
          src="/assets/tech_creature_logo.svg"
          alt="Webpage Logo"
          className="signup-img"
        />
      </div>
    </>
  );
}

export default SignUp;
