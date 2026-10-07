import React from "react";

function Footer() {
  return (
    <footer className="blog-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Personal Blog</h3>
          <p>
            Exploring modern web development, React internals, and creative
            software engineering practices.
          </p>
        </div>

        <div className="footer-links">
          <h4>Topics</h4>
          <ul>
            <li>React &amp; Hooks</li>
            <li>JavaScript &amp; Async</li>
            <li>CSS Grid &amp; Design</li>
            <li>Full Stack MERN</li>
          </ul>
        </div>

        <div className="footer-credits">
          <h4>Program</h4>
          <p>
            internship
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Personal Blog | Built with React &amp; Passion</p>
      </div>
    </footer>
  );
}

export default Footer;
