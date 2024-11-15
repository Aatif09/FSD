import React from 'react';

function Childprop({ Click }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={Click}>Click Me</button>
    </div>
  );
}
export default Childprop;
