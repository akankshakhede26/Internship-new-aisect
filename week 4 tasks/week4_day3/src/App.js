import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  // Task 1: Store theme + setTheme in state
  // Optional Add-on: Load saved theme from localStorage (defaults to "light")
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  // Optional Add-on: Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    // Task 1: Wrap App with <ThemeContext.Provider>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        {/* Task 1: Add theme classes to App wrapper */}
        <div className={`App ${theme}-theme`}>
          {/* Task 2: Navigation Bar with Theme Toggle Button */}
          <Navbar />

          {/* Page Content with Routes */}
          <div className="content">
            <Routes>
              {/* 4 Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Dynamic Route */}
              <Route path="/post/:postId" element={<PostDetail />} />

              {/* 404 Page Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
