import React from 'react'
import './App.css'

const Change = () => {
    const SubmitHandler = (e)=>{
        e.preventDefault();
        console.log("From Submitted ");
        
    }
  return (
    <div>
        <form onSubmit={(e)=> {
            SubmitHandler()}} action="">
        <input type="text" placeholder='Enter your Name' />
        <button onClick={SubmitHandler}> Submit</button>
        </form>
    </div>
  )
}

export default Change