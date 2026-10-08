
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cards = [
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript and modern web development.",
    },
    {
      title: "React JS",
      description: "Build interactive and reusable components with React.",
    },
    {
      title: "Tailwind CSS",
      description: "Create beautiful responsive interfaces using utility classes.",
    },
    {
      title: "Programming",
      description: "Improve your coding skills and problem-solving ability.",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">

          <a href="#home" className="text-2xl font-bold">
            MySite
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-3">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block hover:text-blue-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block hover:text-blue-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="text-center py-20 px-4 scroll-mt-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Welcome to MySite
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          Learn React and Tailwind CSS by building modern websites.
        </p>

        <a
          href="#about"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-white py-16 px-6 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-800">
            About Us
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            MySite is a learning platform where students can learn
            React, Tailwind CSS and modern web development. Our goal
            is to make programming simple, practical and easy to understand.
          </p>

        </div>
      </section>

      {/* Courses / Cards Section */}
      <section className="px-4 py-16">

        <h2 className="text-3xl font-bold text-center mb-8">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {card.description}
              </p>

              <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-200 py-16 px-6 scroll-mt-20"
      >
        <div className="max-w-xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contact Us
          </h2>

          <form className="mt-8 bg-white p-6 rounded-xl shadow-lg">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-5">
        <p>© 2026 MySite. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
