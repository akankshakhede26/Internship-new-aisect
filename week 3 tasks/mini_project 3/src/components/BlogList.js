import React, { useState } from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, searchTerm = "" }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "React", "JavaScript", "Web Dev", "CSS", "Career"];

  // Filter blogs based on category and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      blog.title.toLowerCase().includes(query) ||
      blog.summary.toLowerCase().includes(query) ||
      blog.author.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="blog-list-section">
      <div className="section-header">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Thoughts on React, Web Development, and Modern Software Engineering
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="category-filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-pill ${selectedCategory === category ? "active" : ""
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="filter-stats">
        <span>
          Showing <strong>{filteredBlogs.length}</strong> of{" "}
          <strong>{blogs.length}</strong> posts
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </span>
      </div>

      {/* Dynamic List Rendering via .map() */}
      {filteredBlogs.length > 0 ? (
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <h3>No articles found</h3>
          <p>
            Try adjusting your search terms or picking another category.
          </p>
          <button
            className="reset-btn"
            onClick={() => setSelectedCategory("All")}
          >
            Reset Category Filter
          </button>
        </div>
      )}
    </section>
  );
}

export default BlogList;
