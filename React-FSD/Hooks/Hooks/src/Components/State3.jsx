import { useState } from "react";

function Count() {
  const [count, setCount] = useState(10);

  return (
    <>
      <h1>My Counter</h1>

      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Prashant
      </button>
    </>
  );
}
export default Count;
