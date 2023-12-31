import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [itinerary, setItinerary] = useState([
    { activity: "", date: "", time: "", description: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRemoveClick = (index) => {
    const list = [...itinerary];
    list.splice(index, 1);
    setItinerary(list);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = { email, subject, itinerary };
    try {
      await axios.post("http://localhost:5000/post/send-email", data);
      window.location.reload();
    } catch (err) {
      setError("Failed to send email. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <h2 className="header">
        Fill out the form below and click 'Send Email' to submit itinerary
      </h2>

      <form onSubmit={handleSubmit} class="form">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Recipient email"
          required
          autoComplete="off"
        />
        <input
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Email Subject"
          required
        />

        {/* Dynamic inputs for itinerary items */}
        {itinerary.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              onChange={(e) => {
                let newItinerary = [...itinerary];
                newItinerary[index].activity = e.target.value;
                setItinerary(newItinerary);
              }}
              placeholder="Activity"
              required
            />

            <input
              type="date"
              onChange={(e) => {
                let newItinerary = [...itinerary];
                newItinerary[index].date = e.target.value;
                setItinerary(newItinerary);
              }}
              placeholder="Date"
              required
            />

            <input
              type="time"
              onChange={(e) => {
                let newItinerary = [...itinerary];
                newItinerary[index].time = e.target.value;
                setItinerary(newItinerary);
              }}
              placeholder="Time"
              required
            />

            <input
              type="text"
              onChange={(e) => {
                let newItinerary = [...itinerary];
                newItinerary[index].description = e.target.value;
                setItinerary(newItinerary);
              }}
              placeholder="Description"
              required
            />
            {/* TODO - added file uploader e.g. pdf */}

            {itinerary.length !== 1 && (
              <button
                type="button"
                className="btn"
                onClick={() => handleRemoveClick(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          disabled={loading}
          className="btn"
          type="button"
          onClick={() =>
            setItinerary([
              ...itinerary,
              { activity: "", date: "", time: "", description: "" },
            ])
          }
        >
          Add Activity
        </button>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Send Email"}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Form;
