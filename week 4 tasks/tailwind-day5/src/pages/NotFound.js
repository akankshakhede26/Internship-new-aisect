import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

// Bonus Add-on: 404 Page Not Found Component
function NotFound() {
  return (
    <div className="page-container">
      <div className="page-card notfound-box">
        <h1>404</h1>
        
        {/* Bonus Requirement exact heading */}
        <h2>404 Page Not Found</h2>
        
        <p>
          Oops! The page you are trying to visit does not exist or has been moved.
        </p>

        <Link to="/" className="btn">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
