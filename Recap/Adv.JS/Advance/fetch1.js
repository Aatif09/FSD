// const getData = () => {
//   fetch(33)
//     .then((res) => res.json())
//     .then((data) => {
//       display(data);
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// };
const getData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Aatif09");
    const data = await res.json();
    display(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const display = (data) => {
  const parentDiv = document.getElementById("parent");
  const avatarImg = document.getElementById("avatar");
  avatarImg.style.display = "none";
  parentDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Username:</strong> ${data.login}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
    <p><strong>Public Repos:</strong> ${data.public_repos}</p>
    <img src="${data.avatar_url}" alt="Avatar" width="150" />
  `;
};
