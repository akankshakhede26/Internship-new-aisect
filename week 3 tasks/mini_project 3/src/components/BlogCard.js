import React, { useState } from "react";

function BlogCard({ blog }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const categoryColors = {
    React: "#007bff",
    JavaScript: "#f39c12",
    "Web Dev": "#27ae60",
    CSS: "#8e44ad",
    Career: "#e67e22",
  };

  const badgeColor = categoryColors[blog.category] || "#6c757d";

  return (
    <article className="blog-card">
      {blog.image && (
        <div className="card-image-wrap">
          <img src={blog.image} alt={blog.title} className="card-image" />
          <span
            className="category-badge"
            style={{ backgroundColor: badgeColor }}
          >
            {blog.category}
          </span>
        </div>
      )}

      <div className="card-content">
        <div className="card-meta">
          <span className="card-date">📅 {blog.date}</span>
          <span className="card-read-time">⏱️ {blog.readTime}</span>
        </div>

        <h3 className="card-title">{blog.title}</h3>

        <div className="card-author">
          <span className="author-avatar">{blog.author.charAt(0)}</span>
          <span className="author-name">By {blog.author}</span>
        </div>

        <p className="card-body">
          {isExpanded ? blog.content : blog.summary}
        </p>

        <div className="card-actions">
          <button
            className="read-more-btn"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less ↑" : "Read More →"}
          </button>

          <button
            className={`like-btn ${hasLiked ? "liked" : ""}`}
            onClick={handleLike}
            title={hasLiked ? "Unlike" : "Like this post"}
          >
            {hasLiked ? "❤️" : "🤍"} {likes}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
