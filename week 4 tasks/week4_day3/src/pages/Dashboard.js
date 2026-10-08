import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

// Task 1: Dashboard Page Component
function Dashboard() {
  const routesList = [
    { path: "/", name: "Home Page", purpose: "Main landing view" },
    { path: "/about", name: "About Page", purpose: "Project and learning summary" },
    { path: "/contact", name: "Contact Page", purpose: "Feedback form" },
    { path: "/dashboard", name: "Dashboard", purpose: "Application overview" },
    { path: "/post/:postId", name: "Dynamic Post", purpose: "URL param testing with useParams()" },
    { path: "*", name: "404 Not Found", purpose: "Wildcard fallback page" },
  ];

  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Dashboard 📊</h1>
        <p>Welcome to the Dashboard! Here is an overview of the routing structure built in this project.</p>

        {/* Simple Summary Cards */}
        <div className="grid-container" style={{ marginBottom: "25px" }}>
          <div className="grid-item">
            <h3>4 Pages</h3>
            <p>Home, About, Contact, Dashboard connected with &lt;Route&gt;.</p>
          </div>
          <div className="grid-item">
            <h3>&lt;NavLink&gt;</h3>
            <p>Active link highlighting applied on navigation bar.</p>
          </div>
          <div className="grid-item">
            <h3>Dynamic Route</h3>
            <p>postId dynamically reads ID via useParams().</p>
          </div>
        </div>

        {/* Routes Table */}
        <h2>Registered Routes Table</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Route Path</th>
                <th>Page Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {routesList.map((route, index) => (
                <tr key={index}>
                  <td><code>{route.path}</code></td>
                  <td><strong>{route.name}</strong></td>
                  <td>{route.purpose}</td>
                  <td>
                    <Link
                      to={route.path === "/post/:postId" ? "/post/1" : route.path === "*" ? "/test-404" : route.path}
                      style={{ color: "#007bff", fontWeight: 600 }}
                    >
                      Visit &rarr;
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic Route Quick Links */}
        <div style={{ marginTop: "25px" }}>
          <h3>Test Different Post IDs:</h3>
          <div className="post-links-row" style={{ marginTop: "10px" }}>
            <Link to="/post/5" className="post-chip">Open Post #5</Link>
            <Link to="/post/12" className="post-chip">Open Post #12</Link>
            <Link to="/post/42" className="post-chip">Open Post #42</Link>
            <Link to="/post/99" className="post-chip">Open Post #99</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
