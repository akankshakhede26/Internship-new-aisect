import React from "react";
import { useParams, Link } from "react-router-dom";
import "./pages.css";

// Task 3: Dynamic Route Component (/post/:postId)
function PostDetail() {
  // Extract postId from URL using useParams()
  const { postId } = useParams();

  // Convert to number for next / previous links
  const currentId = parseInt(postId, 10);
  const prevId = !isNaN(currentId) && currentId > 1 ? currentId - 1 : 1;
  const nextId = !isNaN(currentId) ? currentId + 1 : 2;

  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Dynamic Post Page 📄</h1>
        
        {/* Task 3 requirement: Show post ID on page using useParams() */}
        <div className="post-highlight">
          Route Parameter: <code>useParams().postId</code> = <strong>{postId}</strong>
        </div>

        <h2>Showing Post #{postId}</h2>
        
        <p>
          This is the content for blog post number <strong>{postId}</strong>.
          It is loaded dynamically using the <code>useParams()</code> hook provided by <code>react-router-dom</code>.
        </p>

        <p>
          Notice how the URL in the browser address bar changes to <code>/post/{postId}</code> without reloading the whole page!
        </p>

        {/* Quick links to navigate between other posts */}
        <div className="dynamic-box" style={{ marginTop: "20px" }}>
          <h3>Try other Post IDs:</h3>
          <div className="post-links-row" style={{ marginTop: "10px" }}>
            <Link to="/post/1" className="post-chip">Post #1</Link>
            <Link to="/post/2" className="post-chip">Post #2</Link>
            <Link to="/post/3" className="post-chip">Post #3</Link>
            <Link to="/post/10" className="post-chip">Post #10</Link>
            <Link to="/post/25" className="post-chip">Post #25</Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{ marginTop: "20px" }}>
          {!isNaN(currentId) && currentId > 1 && (
            <Link to={`/post/${prevId}`} className="btn btn-secondary">
              &larr; Previous Post (#{prevId})
            </Link>
          )}

          <Link to={`/post/${nextId}`} className="btn">
            Next Post (#{nextId}) &rarr;
          </Link>

          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
