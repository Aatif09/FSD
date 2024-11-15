//console.log(div);
const parent = document.getElementById("parent");

const data = fetch("https://api.github.com/users");
data.then((res) => {
  console.log(res);

  res.json().then((response) => {
    for (i = 0; i < 30; i++) {
      console.log(i);
      const div = document.createElement("div");
      const p = document.createElement("h2");

      div.style.backgroundColor = "cyan";
      parent.style.display = "flex";
      parent.style.flexWrap = "wrap";
      parent.style.justifyContent = "space-around";
      parent.style.alignContent = "space-around";
      const img = document.createElement("img");
      img.setAttribute("height", "200px");
      img.setAttribute("width", "200px");
      console.log(p);

      p.innerText = response[i].id + "-" + response[i].login;
      p.style.color = "black";
      div.appendChild(p);
      div.appendChild(img);

      parent.appendChild(div);
      img.src = response[i].avatar_url;

      //div.innerHTML = response[i].id + "-" + response[i].login;
      //img.src = response[i].avatar_url;
    }
    console.log("heeeeee");
  });
});
