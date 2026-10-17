import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.slice(0, 10)); // show only 10
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); // runs once on mount

  // Bonus: Add Loading Animation & Error States
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <div style={spinnerStyle}></div>
        <h2 style={{ color: "#333", marginTop: "12px" }}>Fetching data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2 style={{ color: "red" }}>{error}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", textAlign: "left" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Posts</h2>
      {posts.map((p) => (
        <div key={p.id} style={box}>
          <h3 style={{ margin: "0 0 8px 0", color: "#333", textTransform: "capitalize" }}>
            {p.title}
          </h3>
          <p style={{ margin: 0, color: "#555", lineHeight: "1.5" }}>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

const box = {
  padding: "16px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
};

const spinnerStyle = {
  width: "36px",
  height: "36px",
  margin: "0 auto",
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #28a745",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default Posts;
