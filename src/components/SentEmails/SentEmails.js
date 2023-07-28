import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SentEmails.css";

const SentEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmails = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/post/sent-emails");
        setEmails(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch emails.");
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const deleteEmail = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/post/delete-email/${id}`);
      setEmails(emails.filter((email) => email._id !== id)); // update the state
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="sent-emails-container">
      <h1>Collection</h1>
      {emails.length > 0 ? (
        emails.map((email, index) => (
          <div key={index} className="email-item">
            <div className="subject-delete-container">
              <h2>Subject: {email.subject}</h2>
              <p className="delete-icon" onClick={() => deleteEmail(email._id)}>
                X
              </p>
            </div>
            <p>Sent: {new Date(email.createdAt).toLocaleString()}</p>
            <p>Recipient: {email.email}</p>
            <p>Itinerary:</p>
            {email.itinerary.map((item, i) => (
              <div key={i} className="itinerary-item">
                <p>Activity: {item.activity}</p>
                <p>Date: {item.date}</p>
                <p>Time: {item.time}</p>
                <p>Description: {item.description}</p>
              </div>
            ))}
            <hr />
          </div>
        ))
      ) : (
        <div className="error-case-container">
          <p className="no-emails">No emails to display</p>
          <Link className="back-to-form-link" to="/form">
            Back to form
          </Link>
        </div>
      )}
    </div>
  );
};

export default SentEmails;
