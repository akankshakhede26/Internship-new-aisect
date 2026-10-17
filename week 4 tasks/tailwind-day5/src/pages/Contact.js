import React, { useState } from "react";
import "./pages.css";

// Task 1: Contact Page Component
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      // Reset form fields
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Contact Page ✉️</h1>
        <p>Feel free to send a message through the form below.</p>

        {/* Success Alert */}
        {isSubmitted && (
          <div className="success-box">
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        <hr style={{ margin: "25px 0", borderColor: "#e2e8f0" }} />

        <div>
          <h3>Other Ways to Reach Me:</h3>
          <p>📧 akankshakhede26@gmail.com</p>
          <p>📍 Location: khandwa, Madhya Pradesh</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
