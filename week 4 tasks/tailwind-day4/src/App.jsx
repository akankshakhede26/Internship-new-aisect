import { useState } from "react";

function CourseCard({ title, description, icon }) {
  return (
    <div className="card group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-5">
        {description}
      </p>

      <button className="btn-primary">
        Learn More
      </button>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const courses = [
    {
      title: "Web Development",
      description:
        "Learn HTML, CSS, JavaScript and modern web development.",
      icon: "💻",
    },
    {
      title: "React JS",
      description:
        "Build interactive and reusable user interfaces using React.",
      icon: "⚛️",
    },
    {
      title: "UI/UX Design",
      description:
        "Learn the fundamentals of creating beautiful user experiences.",
      icon: "🎨",
    },
    {
      title: "Programming",
      description:
        "Improve your programming and problem-solving skills.",
      icon: "👨‍💻",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }

    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-gray-800">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors duration-300"
          >
            MySite
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="font-medium hover:text-primary transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium hover:text-primary transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#courses"
              className="font-medium hover:text-primary transition-colors duration-300"
            >
              Courses
            </a>

            <a
              href="#contact"
              className="font-medium hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>

            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100 transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-4">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-primary transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-primary transition"
            >
              About
            </a>

            <a
              href="#courses"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-primary transition"
            >
              Courses
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-primary transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <p className="uppercase tracking-widest text-sm font-semibold mb-4 opacity-90">
            Advanced Tailwind CSS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Beautiful Websites
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
            Learn advanced Tailwind CSS, reusable components,
            animations, gradients and modern UI design.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#courses"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold
              hover:bg-gray-100 hover:-translate-y-1
              active:scale-95 transition-all duration-300 shadow-lg"
            >
              Explore Courses
            </a>

            <a
              href="#about"
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold
              hover:bg-white hover:text-primary
              active:scale-95 transition-all duration-300"
            >
              Learn More
            </a>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-primary font-semibold uppercase tracking-wide">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Learn Modern Web Technologies
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our platform helps students learn modern web development
              through practical projects and hands-on experience.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="card text-center">

              <div className="text-4xl mb-4">
                🚀
              </div>

              <h3 className="text-xl font-bold mb-3">
                Fast Learning
              </h3>

              <p className="text-gray-600">
                Learn concepts quickly with practical examples
                and real-world projects.
              </p>

            </div>


            <div className="card text-center">

              <div className="text-4xl mb-4">
                🎯
              </div>

              <h3 className="text-xl font-bold mb-3">
                Practical Skills
              </h3>

              <p className="text-gray-600">
                Build projects and develop skills that are useful
                in real development work.
              </p>

            </div>


            <div className="card text-center">

              <div className="text-4xl mb-4">
                ⭐
              </div>

              <h3 className="text-xl font-bold mb-3">
                Modern UI
              </h3>

              <p className="text-gray-600">
                Create beautiful and responsive interfaces using
                Tailwind CSS.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= COURSES ================= */}
      <section id="courses" className="py-20 bg-background">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-secondary font-semibold uppercase tracking-wide">
              Our Courses
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Explore Our Courses
            </h2>

            <p className="text-gray-600 mt-4">
              Choose a course and start learning today.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                icon={course.icon}
              />
            ))}

          </div>

        </div>
      </section>


      {/* ================= INTERACTIVE CARD ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <div
            className="rounded-2xl p-8 md:p-12
            bg-gradient-to-r from-primary to-secondary
            text-white shadow-xl"
          >

            <div className="text-center">

              <div className="text-5xl mb-5">
                📩
              </div>

              <h2 className="text-3xl font-bold mb-3">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-white/90 mb-8">
                Get the latest tutorials, tips and web development
                resources directly in your inbox.
              </p>


              <form
                onSubmit={handleSubscribe}
                className="max-w-xl mx-auto"
              >

                <div className="flex flex-col sm:flex-row gap-3">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg
                    text-gray-800 bg-white border-2 border-transparent
                    outline-none
                    focus:ring-2 focus:ring-white
                    focus:border-white
                    transition-all duration-300"
                  />

                  <button
                    type="submit"
                    className="bg-white text-primary px-6 py-3
                    rounded-lg font-semibold
                    hover:bg-gray-100
                    active:scale-95
                    transition-all duration-300
                    shadow-md"
                  >
                    Subscribe
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-background">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-accent font-semibold uppercase tracking-wide">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
            Ready to Start Learning?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start building modern and responsive websites
            using Tailwind CSS.
          </p>

          <button
            onClick={() => alert("Thank you for contacting us!")}
            className="btn-secondary"
          >
            Contact Us
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-2xl font-bold mb-3">
                MySite
              </h3>

              <p className="text-gray-400">
                Learn, build and grow with modern web technologies.
              </p>
            </div>


            <div>

              <h3 className="font-semibold mb-3">
                Quick Links
              </h3>

              <div className="space-y-2">

                <a
                  href="#home"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition"
                >
                  About
                </a>

                <a
                  href="#courses"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Courses
                </a>

                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>

              </div>

            </div>


            <div>

              <h3 className="font-semibold mb-3">
                Follow Us
              </h3>

              <div className="flex gap-3">

                <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-primary transition">
                  Facebook
                </button>

                <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-secondary transition">
                  Instagram
                </button>

              </div>

            </div>

          </div>


          <div className="border-t border-gray-700 mt-8 pt-6 text-center">

            <p className="text-gray-400">
              © 2026 MySite. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;