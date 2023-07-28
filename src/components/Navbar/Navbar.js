import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logOut, db } from "../utils/Firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (loading) return;
    if (!user) navigate("/");
    else fetchUserName();
  }, [user, loading, navigate]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          {user && <div>Welcome back {name}</div>}
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
          <Link className="navbar-link" to="/sent-emails">
            Collection
          </Link>
        </div>
        {user && (
          <button className="logout-button" onClick={logOut}>
            LOGOUT
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
