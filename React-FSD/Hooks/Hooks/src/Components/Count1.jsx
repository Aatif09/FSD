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
        Hey Here
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Count1;
