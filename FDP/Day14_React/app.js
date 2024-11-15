// const react =require("react"); old way to import ..Common JS
import React from "react"; // ES6
import ReactDOM from "react-dom/client"; //ES6    "type": "module", in package.json
const parent=document.getElementById("parent");
const root=ReactDOM.createRoot(parent);

// // const title = React.createElement("h1", {}, "Hello My ReactApp");

//------------React ELEMENT-----------------

// const title =<h1>Hello React!!</h1>;    
// root.render(title);
// const Title =() =>{   // pascal case  "title" 
//   return <h1>Hello React!!</h1>;
// }
// const Navbar=()=>{
//   const cName="ABES"
//   return <div>Navbar--{cName}</div>
// }
// const Title =() =>{   // pascal case  "title" 
//   return (
//   <>
//   <ul>
//     <li> Hello </li>
//     <li>Hi</li>
//   </ul>
//   <Navbar/>
//   {Navbar()}
  
//   </>
//   );
// }
// // root.render(Title());
// // OR
// root.render(<Title/>);

// ==> on terminal  run ==>     npm init
// https://www.npmjs.com/   search react  ==> on terminal  run ==>     npm i react
// https://www.npmjs.com/package/react-dom   ==> on terminal  run ==> npm i react-dom

// webpack bundler when we create app through npx create-react-app
// parcel- easy
// vite -- moderate

// use parcel ==> https://www.npmjs.com/package/parcel   ===>  on terminal  run ==> npm i parcel
// npm i react react-dom parcel
// npx parcel aa.html
// NPX stands for Node Package eXecute. It is simply an NPM(Node Package Manager) package runner
// Error: Expected content key de1e4a02ec63c4eb to exist ==> Whenever you get such error
1. //Stop the app     delete .parcel-cache folder     ⁠delete dist folder

// ==========================CSS====================================

// const Navbar=()=>{
//   const cName="ABES ENgineering College, Ghaziabad"
//   return <div className="navbar">{cName}</div>
// }

// const Card=(name,id)=>{
//  // let name=Aatif;
//   return (<div className="info">
//     <h4>Name: {name}</h4>
//     <h4>EID: {id}</h4>
//     {/* <h4>EmpID: {eid}</h4> */}
//   </div>)
// }
// const Title =() =>{   // pascal case  "title" 
//   return (
//   <>
//   <h1 className="navbar">Hello Welcome to :::::</h1>
//   <Navbar/>
//   {/* {Navbar()} */}\
//   <div className="aa">
//   {Card("Aatif","2718")}
//   {Card("Prashant","2fcs718")} </div>
//   </>
//   );
// }
// root.render(<Title/>);


//==============Function Props vs JSX Props======================
// const Navbar=()=>{
//   const cName="ABES ENgineering College, Ghaziabad"
//   return <div className="navbar">{cName}</div>
// }

// const Card=(properties)=>{
//  // let name=Aatif;
//  console.log(properties);
//   return (<div className="info">
//     <h4>Name: </h4>
  
//   </div>)
// }
// const Title =() =>{   // pascal case  "title" 
//   return (
//   <>
//   <h1 className="navbar">Hello Welcome to :::::</h1>

//   {Card("Aatif")}
//   <Card name="AAAAAtif"/>
//   </>
//   );
// }
// root.render(<Title/>);


//==================JSX Props=================================

// const Card=(properties)=>{
//  // let name=Aatif;
//  console.log(properties);
//   return (<div className="info">
//     <h4>Name:{properties.name} </h4>
  
//   </div>)
// }
// const App =() =>{   // pascal case  "title" 
//   return (
//   <>

//   {Card({name:"Aatif"})}
//   <Card name="AAAAAtif"/>
//   </>
//   );
// }
// root.render(<App/>);


//================ Object Destructuring=================

// const student={
//   name:"aatif",
//   city:"ghaziabad"
// }
// const {name}=student; // destructuring
// console.log(name);

//==========================
// const Card=(properties)=>{  //  ({name, id})
//                  OR
// const Card=({name,id,language})=>{  //  ({name, id})
//  //const{name,id}=properties;
//  //console.log(properties);
//   return (<div className="info">
//     {/* <h4>Name:{properties.name} </h4>
//     <h4>ID:{properties.id} </h4> */}

// <h4> Name:{name}</h4>
// <h4> ID:{id}</h4>
// <h4> Languge:{language}</h4>

  
//   </div>)
// }
// const App =() =>{   // pascal case  "title" 
//   return (
//   <>

//   {/* {Card({name:"Aatif"})} */}
//   <Card name="AAAAAtif" id="02719" language="Java Programming" />
//   </>
//   );
// }
// root.render(<App/>);