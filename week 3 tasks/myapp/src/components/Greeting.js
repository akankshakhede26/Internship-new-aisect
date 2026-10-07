function Greeting(props) {
  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Hello, {props.name}!</h3>
      <p>I am learning {props.topic} today.</p>
    </div>
  );
}

export default Greeting;
