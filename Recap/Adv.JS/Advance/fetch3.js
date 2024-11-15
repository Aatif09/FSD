const searchUser = () => {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        displayError("User not found");
        return;
      }

      displayUser(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      displayError("An error occurred");
    });
};

const displayUser = (data) => {
  const parent = document.getElementById("parent");

  // Create and append elements
  const h2 = document.createElement("h2");
  h2.innerText = data.name;
  parent.appendChild(h2);

  const p = document.createElement("p");
  p.innerHTML = `<strong>Username:</strong> ${data.login}`;
  parent.appendChild(p);

  const p1 = document.createElement("p");
  p1.innerHTML = `<strong>Bio:</strong> ${data.bio || "No bio available"}`;
  parent.appendChild(p1);

  const p2 = document.createElement("p");
  p2.innerHTML = `<strong>Public Repos:</strong> ${data.public_repos}`;
  parent.appendChild(p2);

  const img = document.createElement("img");
  img.src = data.avatar_url;
  // avatarImg.alt = "Avatar";
  // avatarImg.width = 150;
  parent.appendChild(img);
};
