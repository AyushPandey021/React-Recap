import React from 'react'
import Input  from './Input'

const App = () => {
 const  btnClick=()=>{
 document.body.textContent="Hello Brother Ayush"
 document.body.style.fontSize="50px"

  }
  const clicktoRed=()=>{
    document.body.style.backgroundColor="red"
  } 
  return (
    <div>
      <h1>Hello, Ayush</h1>
<button onClick={btnClick }>Click to Change</button>
<button onClick={clicktoRed}>Click to Red </button>
  <Input/>
    </div>
  
     )
}

export default App