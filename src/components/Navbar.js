import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logOut } from "./utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link
            className="navbar-link"
            to="https://trainlikeaking.com/"
            target="__blank"
          >
            HOME
          </Link>
          <Link
            className="navbar-link"
            to="https://trainlikeaking.com/"
            target="__blank"
          >
            TK
          </Link>
        </div>
        {user && (
          <button className="logout-button" onClick={handleLogout}>
            LOGOUT
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
