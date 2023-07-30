import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SentEmails.css";
import Pagination from "./Pagination"; // Import the Pagination component

const SentEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const emailsPerPage = 3;

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = emails.slice(indexOfFirstEmail, indexOfLastEmail);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="sent-emails-container">
      <h1>Collection</h1>
      {currentEmails.length > 0 ? (
        currentEmails.map((email, index) => (
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
      <Pagination
        emailsPerPage={emailsPerPage}
        totalEmails={emails.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SentEmails;
