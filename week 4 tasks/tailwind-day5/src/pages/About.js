import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

// Task 1: About Page Component
function About() {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1>About This Project ℹ️</h1>
        <p>
          This project was created to learn and practice multi-page navigation in React using <strong>React Router</strong>.
        </p>

        <h2>What I Learned in This Task:</h2>

        <div className="grid-container">
          <div className="grid-item">
            <h3>1. Multi-Page Routing</h3>
            <p>
              Used <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> to define paths for Home, About, Contact, and Dashboard.
            </p>
          </div>

          <div className="grid-item">
            <h3>2. Active Navigation</h3>
            <p>
              Used <code>&lt;NavLink&gt;</code> to highlight the current active tab with a blue background so users know which page is open.
            </p>
          </div>

          <div className="grid-item">
            <h3>3. Dynamic Routes</h3>
            <p>
              Created the <code>/post/:postId</code> route and used the <code>useParams()</code> hook to display the post ID dynamically.
            </p>
          </div>

          <div className="grid-item">
            <h3>4. 404 Fallback</h3>
            <p>
              Added a wildcard <code>path="*"</code> route to catch any wrong URL and display a friendly 404 Page Not Found.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <Link to="/" className="btn">Back to Home</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
