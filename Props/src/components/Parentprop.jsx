import React from 'react';
import Childprop from './childprop';

function Parentprop() {
  const Click = () => {
    alert('Button was clicked in the Child');
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Childprop Click={Click} />
    </div>
  );
}
export default Parentprop;
