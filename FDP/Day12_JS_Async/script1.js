// const getData = () => {

//     fetch("https://api.github.com/users/Aatif09").then(
//         (res) => {
//             res.json().then(
//                 (data) => {
//                     display(data);
//                 }
//             )
//         }
//     )
// }
const getData = () => {
const val=document.getElementById("s-t").value;
    fetch(`https://api.github.com/users/${val}`).then(
        (res) => {
            res.json().then(
                (data) => {
                    display(data);
                }
            )
        }
    )
}
// const ans = getData();
// console.log(ans);
getData();
// function display(data) {
//     const parent = document.getElementById("parent");

//     const title1 = document.createElement("h4");
//     title1.innerText = data[0].login;
//     parent.appendChild(title1);

//     const title2 = document.createElement("h4");
//     title2.innerText = data[1].login;
//     parent.appendChild(title2);
// }
function display(data) {
    const parent = document.getElementById("parent");
console.log(data);
    const title = document.createElement("h4");
    title.innerHTML=`${data.login} <span style="color:red">(${data.bio})</span>`
    // title.innerText = data.login;

    title.setAttribute("class","card-title");
    parent.appendChild(title);

    const image=document.createElement("img");
    image.setAttribute("src",data.avatar_url);
    image.setAttribute("class","card-img");

    parent.appendChild(image);
}
