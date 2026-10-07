import React, { useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("home");

  // Sample Blog Data for Personal Blog
  const [blogs] = useState([
    {
      id: 1,
      title: "Mastering React Hooks: From useState to Custom Hooks",
      author: "Akanksha Khede",
      date: "Oct 5, 2026",
      category: "React",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
      summary:
        "Hooks transformed how we write React code. Dive deep into useState, useEffect, and how to compose reusable logic using custom hooks.",
      content:
        "React Hooks revolutionized frontend architecture by allowing functional components to leverage state and lifecycle features seamlessly. By understanding the dependency array in useEffect and structuring side effects properly, you avoid infinite render loops, stale closures, and memory leaks. Once comfortable with basic hooks, writing custom hooks empowers you to encapsulate complex asynchronous or DOM behavior cleanly.",
      likes: 24,
    },
    {
      id: 2,
      title: "Asynchronous JavaScript: Promises, Async/Await Demystified",
      author: "Akanksha Khede",
      date: "Oct 2, 2026",
      category: "JavaScript",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=60",
      summary:
        "Tired of callback hell? Learn how Promises and async/await streamline non-blocking I/O operations and API requests.",
      content:
        "JavaScript's event loop executes tasks in a single-threaded environment, making asynchronous primitives crucial. Async/await syntax provides cleaner syntax sugar over ES6 Promises, improving readability when dealing with multiple sequential or parallel network requests. Always remember to wrap await calls in try/catch blocks or attach fallback catch handlers.",
      likes: 18,
    },
    {
      id: 3,
      title: "Modern CSS Mastery: Grid vs Flexbox & Glassmorphism",
      author: "Sneha Verma",
      date: "Sep 28, 2026",
      category: "CSS",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
      summary:
        "Choosing between Flexbox and CSS Grid doesn't have to be confusing. Here's a quick guide along with modern aesthetic styling techniques.",
      content:
        "Flexbox excels at one-dimensional alignment (rows or columns), making it ideal for navigation bars, card action trays, and button groups. CSS Grid is designed for two-dimensional layouts where both rows and columns need explicit coordination. By combining both with modern CSS variables, subtle backdrop filters, and soft box shadows, you achieve breathtaking user interfaces.",
      likes: 31,
    },
    {
      id: 4,
      title: "Architecting Scalable Web Apps with the MERN Stack",
      author: "Rahul Sharma",
      date: "Sep 22, 2026",
      category: "Web Dev",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
      summary:
        "A practical overview of integrating MongoDB, Express, React, and Node.js to create secure, performant full-stack systems.",
      content:
        "The MERN ecosystem is one of the most widely adopted full-stack architectures today. With Node and Express handling robust REST or GraphQL endpoints, MongoDB providing schema flexibility, and React creating responsive frontends, developers can share a single unified language (JavaScript) across the entire stack. Key considerations include JWT token authentication, CORS configuration, and modular folder structures.",
      likes: 45,
    },
    {
      id: 5,
      title: "Essential Clean Code Principles for Junior Developers",
      author: "Arjun Kumar",
      date: "Sep 15, 2026",
      category: "Career",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      summary:
        "Writing code that works is only step one. Writing readable, maintainable, and self-documenting code is what makes a great engineer.",
      content:
        "Code is read far more often than it is written. Meaningful variable names, single-responsibility functions, and consistent formatting will save your teammates and your future self hours of debugging. Don't be afraid to refactor early, write modular components, and keep functions small and focused on one specific task.",
      likes: 29,
    },
    {
      id: 6,
      title: "Understanding useEffect Dependency Arrays in React 19",
      author: "Akanksha Khede",
      date: "Sep 10, 2026",
      category: "React",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
      summary:
        "A deep dive into effect synchronizations, cleanup functions, and common pitfalls to avoid when fetching API data.",
      content:
        "The useEffect hook synchronizes your component with an external system (like the browser DOM, web sockets, or remote HTTP APIs). Omitting dependencies leads to stale state bugs, while including unmemoized objects triggers unnecessary effect re-executions. Always leverage cleanup functions to cancel pending timers or abort network requests when components unmount.",
      likes: 38,
    },
  ]);

  return (
    <div className="App">
      {/* 1. Navbar Component */}
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        currentTab={currentTab}
        onNavigate={setCurrentTab}
      />

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-tag"> MINI PROJECT </span>
          <h1 className="hero-title">Personal Tech Blog</h1>
          <p className="hero-desc">
            Documenting engineering notes, technical tutorials, and practical
            learnings across React, JavaScript, and Full-Stack Development.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="main-content">
        {currentTab === "home" && (
          /* 2. BlogList Component (Renders BlogCard via array.map()) */
          <BlogList blogs={blogs} searchTerm={searchTerm} />
        )}

        {currentTab === "about" && (
          <section className="about-card">
            <h2>About This Project</h2>
            <p>
              Welcome to my Personal Blog web application, developed as
              <strong> Mini Project </strong>

            </p>
            <p>
              This project demonstrates key modern React concepts:
            </p>
            <ul>
              <li><strong>Modular React Components:</strong> Separation of concerns with Navbar, BlogList, BlogCard, and Footer.</li>
              <li><strong>Props &amp; State:</strong> Passing dynamic post data, managing live search terms, category filters, and like counters.</li>
              <li><strong>Dynamic Rendering:</strong> Efficiently mapping over article datasets with <code>array.map()</code>.</li>
              <li><strong>Interactive UI:</strong> Conditional post detail expansion (&quot;Read More&quot; / &quot;Show Less&quot;).</li>
              <li><strong>Modern CSS Design:</strong> CSS Grid, Flexbox, custom design tokens, and smooth micro-animations.</li>
            </ul>
          </section>
        )}
      </main>

      {/* 3. Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
