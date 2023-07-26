import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, onLogout }) => {
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
          <Link className="navbar-link" to="/form">
            FORM
          </Link>
          <Link
            className="navbar-link"
            to="https://trainlikeaking.com/"
            target="__blank"
          >
            TK
          </Link>
        </div>
        {isAuthenticated && (
          <button className="logout-button" onClick={onLogout}>
            LOGOUT
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
