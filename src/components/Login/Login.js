import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle as signInWithGoogleBase,
} from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { SpinnerDotted } from "spinners-react";

const googleLogo = process.env.PUBLIC_URL + "/googleImage.png";

const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [isSigningIn, setSigningIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");

  const signInWithGoogle = async () => {
    setSigningIn(true);
    try {
      await signInWithGoogleBase();
    } catch (error) {
      console.error(error);
      setLoginError("Login failed. Please try again.");
      setTimeout(() => setLoginError(""), 2000);
    } finally {
      setSigningIn(false);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      setLoginSuccess("Login successful!");
      setTimeout(() => {
        setLoginSuccess("");
        navigate("/form");
      }, 2000);
    }
  }, [user, loading, navigate]);

  return (
    <div className="login-body">
      <div className="login-container">
        <h1 className="login-google">Login with gmail</h1>
        <div className="login-form">
          <button
            className="google-login-button"
            onClick={signInWithGoogle}
            disabled={isSigningIn}
          >
            {isSigningIn ? (
              <SpinnerDotted color="#649cf5" />
            ) : (
              <img
                className="google-image"
                src={googleLogo}
                alt="Google Sign In Logo"
              />
            )}
          </button>
          {loginSuccess && (
            <div className="login-message login-success">{loginSuccess}</div>
          )}
          {loginError && (
            <div className="login-message login-error">{loginError}</div>
          )}
          <div className="gradient"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
