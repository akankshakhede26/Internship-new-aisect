import React from "react";

function Navbar({ searchTerm, onSearchChange, onNavigate, currentTab = "home" }) {
  return (
    <header className="blog-navbar">
      <div className="navbar-container">
        <div className="brand" onClick={() => onNavigate && onNavigate("home")}>
          <span className="brand-icon">✍️</span>
          <div>
            <h1 className="brand-title">Personal Blog</h1>
            <span className="brand-subtitle">Code, Stories &amp; Ideas</span>
          </div>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search articles by title, topic..."
            value={searchTerm || ""}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>

        <nav className="nav-links">
          <button
            className={`nav-btn ${currentTab === "home" ? "active" : ""}`}
            onClick={() => onNavigate && onNavigate("home")}
          >
            Articles
          </button>
          <button
            className={`nav-btn ${currentTab === "about" ? "active" : ""}`}
            onClick={() => onNavigate && onNavigate("about")}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
