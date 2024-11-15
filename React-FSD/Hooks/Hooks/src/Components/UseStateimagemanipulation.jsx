import React, { useState } from 'react'
import image from './abeslogo.png';
function UseStateimagemanipulation() {
  const[height, setHeight]=useState(100);
  const[width, setWidth]=useState(100);
  const[rotate1,setRotate]=useState(60);
  const[red,setRed]=useState(100);
  const[green,setGreen]=useState(100);
  const[blue,setBlue]=useState(100);
 
  function increaseHeight(){
      setHeight(height+30);
  }
  function increseWidth(){
    setWidth(width+30);
  }
  function rotateImage(){
    
setRotate(rotate1+30);

}

function changeColor(){
            setRed(Math.random()*255);
              setGreen(Math.random()*255);
              setBlue(Math.random()*255);
}
    return (
    <div style={{backgroundColor:rgb(${red},${green},${blue})}}>
        <div style={{border:'2px solid green',height:'300px', width:'300px',padding:'50px',marginTop:'20px', marginLeft:'200px' }}>
        <img src={image} height={height} width={width} style={{transform:rotate(${rotate1}deg)}}   />
        </div>
        <div>
        <button onClick={increaseHeight}>increase Height</button>
        <button onClick={increseWidth}>increase Width</button>
        <button onClick={rotateImage}>Rotate</button>
        <button onClick={changeColor}>ChnageColor</button>
    
    </div>
    </div>
  )
}

export default UseStateimagemanipulation;