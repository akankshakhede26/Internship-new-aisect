import React from "react";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--footer-bg, #ffffff)",
      borderTop: "1px solid var(--border-color, #e0e6ed)",
      padding: "18px 20px",
      textAlign: "center",
      marginTop: "auto",
      color: "var(--muted-text, #6c757d)",
      fontSize: "14px",
      transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease"
    }}>
      <p>© 2026 My React App | Week 4 Day 3 Internship Tasks</p>
    </footer>
  );
}

export default Footer;
