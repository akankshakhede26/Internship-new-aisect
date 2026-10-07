import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []); // runs once on mount

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <div style={spinnerStyle}></div>
        <h2 style={{ color: "#333", marginTop: "12px" }}>Loading...</h2>
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User List</h2>
      {users.map((user) => (
        <div key={user.id} style={cardStyle}>
          <h3 style={{ margin: "0 0 6px 0", color: "#007bff" }}>{user.name}</h3>
          <p style={{ margin: "4px 0", color: "#495057" }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ margin: "4px 0", color: "#495057" }}>
            <strong>City:</strong> {user.address.city}
          </p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  margin: "10px 0",
  padding: "14px 18px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
};

const spinnerStyle = {
  width: "36px",
  height: "36px",
  margin: "0 auto",
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #007bff",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default UserList;
