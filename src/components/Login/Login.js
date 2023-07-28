import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./Login.css";

const googleLogo = process.env.PUBLIC_URL + "/googleLogin.png";

const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/form");
  }, [user, loading, navigate]);

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-title">TK Login</h2>
        <div className="login-form">
          <button className="google-login-button" onClick={signInWithGoogle}>
            <img
              src={googleLogo}
              alt="Google Sign In Logo"
              className="google-login-logo"
            />
          </button>
        </div>
        <div className="auxiliary-actions">
          {/* <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <Link to="/register" className="register-link">
            Register
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
