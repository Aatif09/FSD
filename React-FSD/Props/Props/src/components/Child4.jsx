import React from 'react';


function Child4({ name,age,hobbies,isMember }) {
  return (
    <div>
      <h1>{name}'s Profile Web</h1>
      <p>Age: {age}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>{isMember ? "Member" : "Not a Member"}</p>
    </div>
  );
}

export default Child4;