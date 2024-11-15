import { useState, useEffect } from "react";

const Use = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("first");
    alert("useEffect called after every render");
    return () => {
      console.log("Cleanup before the next render or unmount");
    };
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Use;
