import React, { useState } from 'react'

const Binding = () => {
    const [a, setA] = useState('')
    const SubmitHandler = (e)=>{
        e.preventDefault();
        console.log("From Submitted by ",a);
    }
  return (
    <div>
        <form action="">
        <input type="text" placeholder='Enter your Name' value={a}  onChange={(e)=>{
            setA(e.target.value);
            
        }}/>
        <button onClick={SubmitHandler}> Submit</button>
        </form>
    </div>
  )
}

export default Binding