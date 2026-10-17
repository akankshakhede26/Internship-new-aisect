import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

// Task 1: Home Page Component
function Home() {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Welcome to My Multi-Page React App 🏠</h1>
        <p>
          Hello! This application is created for the  internship tasks.
          It demonstrates how to use <strong>React Router</strong> to navigate between different pages without reloading the browser.
        </p>

        {/* Dynamic Route Quick Demo (Task 3) */}
        <div className="dynamic-box">
          <h3>⚡ Task 3: Test Dynamic Route (/post/:postId)</h3>
          <p>Click any post below to test parameter extraction using <code>useParams()</code>:</p>
          <div className="post-links-row">
            <Link to="/post/1" className="post-chip">Post #1</Link>
            <Link to="/post/2" className="post-chip">Post #2</Link>
            <Link to="/post/3" className="post-chip">Post #3</Link>
            <Link to="/post/100" className="post-chip">Post #100</Link>
          </div>
        </div>

        {/* 4 Pages Overview Grid (Task 1) */}
        <h2>Explore the Pages</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Home</h3>
            <p>You are currently on the Home page. It introduces the project and all features.</p>
            <Link to="/">Current Page</Link>
          </div>

          <div className="grid-item">
            <h3>About</h3>
            <p>Explains what React Router is and how routing works in a single page application.</p>
            <Link to="/about">Go to About &rarr;</Link>
          </div>

          <div className="grid-item">
            <h3>Contact</h3>
            <p>Contains a simple contact form with input fields for name, email, and message.</p>
            <Link to="/contact">Go to Contact &rarr;</Link>
          </div>

          <div className="grid-item">
            <h3>Dashboard</h3>
            <p>Shows student details, project status, and list of routes created.</p>
            <Link to="/dashboard">Go to Dashboard &rarr;</Link>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Bonus Feature: 404 Page</h3>
          <p>Click below to test what happens when visiting an invalid URL:</p>
          <Link to="/not-a-real-page" className="btn btn-secondary">
            Test 404 Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
