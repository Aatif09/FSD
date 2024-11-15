const searchUser = () => {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        document.getElementById("parent").innerHTML =
          '<p style="color: red;">User not found</p>';
        return;
      }
      document.getElementById("parent").innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <img src="${data.avatar_url}" alt="Avatar" width="150" />
      `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("parent").innerHTML =
        '<p style="color: red;">An error occurred</p>';
    });
};
