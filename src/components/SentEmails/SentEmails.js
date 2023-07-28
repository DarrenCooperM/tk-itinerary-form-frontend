import React, { useEffect, useState } from "react";
import axios from "axios";
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="sent-emails-container">
      <h1>Collection</h1>
      {emails.map((email, index) => (
        <div key={index} className="email-item">
          <h2>Subject: {email.subject}</h2>
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
      ))}
    </div>
  );
};

export default SentEmails;
