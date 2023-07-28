import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./Login.css";

const googleLogo = process.env.PUBLIC_URL + "/googleImage.png";

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
        <h1 className="login-google">Login with gmail</h1>
        <div className="login-form">
          <button className="google-login-button" onClick={signInWithGoogle}>
            <img
              className="google-image"
              src={googleLogo}
              alt="Google Sign In Logo"
            />
          </button>
          <div className="gradient"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
