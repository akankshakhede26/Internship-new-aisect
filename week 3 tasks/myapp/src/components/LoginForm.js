import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const cardStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
    textAlign: "center",
  };

  const inputStyle = {
    padding: "10px 14px",
    width: "80%",
    maxWidth: "280px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "10px 24px",
    marginTop: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    marginTop: "16px",
  };

  return (
    <div style={cardStyle}>
      {isLoggedIn ? (
        <div>
          <h2 style={{ color: "#28a745", marginBottom: "8px" }}>
            Welcome, {username}!
          </h2>
          <p style={{ color: "#555", margin: "4px 0" }}>
            You have successfully logged in.
          </p>
          <button style={logoutButtonStyle} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 style={{ marginTop: 0, marginBottom: "8px" }}>Login Form</h2>
          <p style={{ color: "#666", fontSize: "14px", marginBottom: "16px" }}>
            Please login to continue.
          </p>

          <div>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
