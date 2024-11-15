// let arr=[];
// console.log(arr);
// let programmig=["JS","JAva","C++","C"];
// console.log(programmig);

//let arr=new Array("JS","JAva","C++","C");
// console.log(arr);

// arr.push("Python");
// console.log(arr);
// arr.unshift("Springboot");
// console.log(arr);
// const query=document.querySelector("p");
// console.log(query);
// query.style.backgroundColor="red";
// query[1].style.backgroundColor="green";

// function fun(){

// let data=document.getElementById("name").value;
// console.log("Hi,"+ data);
// document.getElementById("msg").innerHTML=data;

// }
// const btn=document.getElementById("btn");
// console.dir(btn);
// console.log(btn.attributes.length);
// btn.addEventListener("click",fun);

// let a=12;
// if(a>10){
// let a=30;
// console.log(a);

// }
// console.log(a);

//const div=document.getElementById("p");
//console.log(div);

// const p1=document.getElementById("div");
// console.dir(p1);
// Call Back function

// function getMsg(data){
// console.log("Sum:"+ data);
// }

// function greeting(num1,num2,callBack){
// const arr=["Ram","Rahul","Prashant"];
// sum=num1+num2;
// callBack(sum);
// }

// greeting(2,5,getMsg);

// JS Single Threaded Model

// function display(){
// for(i=0;i<10000;i++){ // for(j=0;j<10;j++) // { // console.log(j); // } // } //
//document.getElementById("div").innerText = "Completed"; // } // let btn=document.getElementById("disp"); //
//btn.addEventListener("click", display); // function show(){ // console.log("Helllloooo"); // } //setTimeout(show,2000);
// setInterval(()=> {
// show();
// }, 1000);

// const arr=["Ram","Rahul","Prashant"];
// arr.forEach(element=>console.log(element));
// let dta=arr.filter(element=>element.length>4);
// console.log(dta);

// Promises in JS

//let data= fetch("https://dummyjson.com/products");

// let data = fetch("https://dummyjson.com/products");
// data.then((response) => {
//   console.log(response);
//   response.json().then((msg) => {
//     console.log(msg.length);
//     console.log(msg.products[0].title);

//     for (i = 0; i < msg.products.length; i++) {
//       console.log("inside loop");
//       console.log(msg.products[i].title + " ," + msg.products[i].description);
//     }

//     msg.products.map((data) => {
//       console.log(data.title);
//     });
//   });
// });

function display() {
  let data = fetch("https://dummyjson.com/products");
  data.then((response) => {
    console.log(response);
    response.json().then((msg) => {
      console.log(msg.length);
      console.log(msg.products[0].title);
      for (i = 0; i < msg.products.length; i++) {
        console.log("inside loop");
        console.log(msg.products[i].title + " ," + msg.products[i].description);
      }
      msg.products.map((data) => {
        console.log(data.title);
      });
    });
  });
}

function hi() {
  console.log("Data Loading, Please wait....");
  setTimeout(display, 2000);
}
hi();
