import { useState } from "react";
import React from "react";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  // const [value, setValue] = useState({
  //   brand: "Ford",
  //   model: "Mustang",
  //   year: "1964",
  //   color: "red",
  // });
  // const [value, setValue] = useState(["Ford", "Mustang", "1964", "red"]);
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {model} {color} from {year}.
      </p>
    </>
  );
}
export default Car;
