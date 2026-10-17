import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: "8px 18px",
    margin: "0 6px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2>Counter: {count}</h2>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#6c757d" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterApp;
