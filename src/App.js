import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import SentEmails from "./components/SentEmails/SentEmails";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/sent-emails" element={<SentEmails />} />
      </Routes>
    </Router>
  );
};

export default App;
