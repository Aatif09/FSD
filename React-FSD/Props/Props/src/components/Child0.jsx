import React from "react";

// The props (or whatever name you choose) is an object that contains the properties passed to the component, and you need to access those properties through that object.

//  React cannot render Date directly as text.
function Child0(props) {
  return (
    <>
      <h1>Hello, {props.name}!</h1>
      <h2>{JSON.stringify(props.date)}</h2>

      <h2 style={{ marginBottom: "20px" }}>{props.date.toLocaleString()}</h2>
      <p style={{ color: "red", fontSize: "60px" }}>{props.year.join(" ")}</p>
    </>
  );
}

export default Child0;

