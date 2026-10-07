import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const inputStyle = {
    padding: "8px 12px",
    margin: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "220px",
  };

  const previewStyle = {
    display: "inline-block",
    textAlign: "left",
    backgroundColor: "#f8f9fa",
    padding: "15px 25px",
    borderRadius: "8px",
    border: "1px solid #dee2e6",
    marginTop: "12px",
    minWidth: "260px",
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2>Registration Form</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          style={inputStyle}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={previewStyle}>
        <h3 style={{ marginTop: 0, marginBottom: "8px" }}>Live Preview:</h3>
        <p style={{ margin: "4px 0" }}><strong>Name:</strong> {name || <em>(empty)</em>}</p>
        <p style={{ margin: "4px 0" }}><strong>Email:</strong> {email || <em>(empty)</em>}</p>
      </div>
    </div>
  );
}

export default UserForm;
