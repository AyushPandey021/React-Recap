import React, { useEffect, useState } from 'react'
import API from "./API"

const App = () => {
   const [num, setNum]=  useState(0)
   const [num2, setNum2]=  useState(0)
  useState(100)
  // useEffect chalega jab bhi component render hoga
useEffect(function(){
  console.log("Use Effect Is Running...");
  
},[])



// useEffect is a react hook it use to perfrom work in side effect after the component  rendering , useEffect useing for fatching the data, event listen
  const [a, setA] = useState(0)
  const [b,setB] = useState(0)

function aChanging(){
  console.log("A ki Value  Change ho gyi");
  
}
function bChanging(){
  console.log("B ki Vlaue Change ho gyi");
  

}
useEffect(function(){
  console.log("Use Effect is Runing");
  
},[a])
  return (
  <div>
      <h1>Count: {num}</h1>
      <h1>num2 {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)

      }}
      onMouseLeave={()=>{
        setNum2(num2 + 10 )
      }}>
        Hover
      </button>
      <API/>
<div className="">
  <h1>A is {a}</h1>
  <h1>B is {b}</h1>
  
<button onClick={()=>{
  setA(a+1)
}}>Change A</button>
<button onClick={()=>{
  setB(b-1)
}}>Change B</button>
</div>

    </div>
  )
}

export default App