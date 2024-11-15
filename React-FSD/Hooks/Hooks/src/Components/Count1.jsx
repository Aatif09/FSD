import React, { useState } from "react";

const Count1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CLick here for +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        CLick here for -
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Count1;
