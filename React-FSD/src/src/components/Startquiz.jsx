import React from 'react'
import '../styles/startquiz.css'
const Startquiz = () => {
  const handleClick = () => {
    console.log("event handled");
    window.location.href = 'https://www.javatpoint.com';
  };
  return (
    <div className='startquiz'>General Instructions: <br/>
       <ol>
        <li>Paper consists of THREE sections and Six questions.</li>
        <li>Write the correct question number in the answer script.</li>
        <li>Attempt all the questions in the stipulated time.</li>
        <li>This Paper has 4 printed pages. Please check that before you begin attempting the exam</li>
       </ol>
   	   <button id="start" onClick={handleClick}>Start</button>
    </div>
  )
}

export default Startquiz