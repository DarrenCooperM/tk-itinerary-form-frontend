import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // logic to authenticate the user, update the state accordingly
    // For now, let's assume any non-empty strings for email and password will authenticate the user
    if (email.trim() !== "" && password.trim() !== "") {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/form" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/form"
          element={isAuthenticated ? <Form /> : <Navigate to="/login" />}
        />
        <Route
          path="/tk"
          element={
            isAuthenticated ? <div>TK Page</div> : <Navigate to="/login" />
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/form" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
