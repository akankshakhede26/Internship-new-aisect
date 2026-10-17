import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import "./Navbar.css";

// Task 2: Navigation Bar Component with Theme Toggle
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Task 2: Use useContext(ThemeContext)
  const { theme, setTheme } = useContext(ThemeContext);

  // Task 2: Toggle between Light and Dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Toggle mobile navbar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand / Logo */}
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          ⚛️ MyReactApp
        </NavLink>

        {/* Action Controls: Theme Toggle & Mobile Hamburger */}
        <div className="nav-right-controls">
          {/* Task 2: Light/Dark toggle button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* Optional Add-on: Extra theme dropdown (blue, green, neon) */}
          <select
            className="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            aria-label="Select Extra Themes"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="neon">Neon</option>
          </select>

          {/* Mobile Hamburger Button */}
          <button
            className="nav-toggle-btn"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links using <NavLink> with active link highlighting */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>

          {/* Quick link to test dynamic route */}
          <NavLink
            to="/post/1"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Post #1
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
