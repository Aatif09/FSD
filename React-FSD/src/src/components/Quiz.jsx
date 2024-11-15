import React from 'react'
import qBank from './QuestionBank.jsx';
import '../styles/quiz.css'
const Quiz = () => {
  return (
    <div className='container'>
        <div className='quiz'>
        Question: {qBank.id}{qBank.question}<br/>
         <input type="radio" name="q"/>{qBank.options[0]}<br/>
         <input type="radio" name="q"/>{qBank.options[1]}<br/>
         <input type="radio" name="q"/>{qBank.options[2]}<br/>
         <input type="radio" name="q"/>{qBank.options[3]}<br/>
         <button id="previous">previous</button>
         <button id="next">next</button>
        
        </div>
    
       
    </div>
  );
};

export default Quiz;