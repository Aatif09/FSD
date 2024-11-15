import React, { useEffect, useState } from "react";

const Use2 = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  // Fetch data on initial render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Cycle through users every second
  useEffect(() => {
    if (users.length > 0) {
      const interval = setInterval(() => {
        setCount((prev) => (prev + 1) % users.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [users]);

  return (
    <div>
      <h1>List of Registered Users</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>Name: {user.name}</li>
        ))}
      </ol>

      <h1>List of Registered Users</h1>
      {users.length > 0 && (
        <p>
          {users[count].id} - {users[count].name}
        </p>
      )}
    </div>
  );
};

export default Use2;
