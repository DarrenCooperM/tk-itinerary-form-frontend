import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-title">TK Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="button" className="google-login-button">
            Login with Google
          </button>
        </form>
        <div className="auxiliary-actions">
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <Link to="/register" className="register-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
