import { useState, useEffect } from "react";

const Use1 = () => {
  let [count, setCount] = useState(0);
  const [calcu, setCalcu] = useState(0);

  useEffect(() => {
    setCalcu(() => count * 2);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>New Increase Count</button>
      <h1>Calculation: {calcu}</h1>
    </div>
  );
};

export default Use1;
