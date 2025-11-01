import React, { useState } from 'react'
import Ap from './Ap'

const App = () => {
  const [one , setOne ] =useState(0)
  return (
    <div>
<h1>
Count:
<button onClick={()=>{
  setOne(one+1)
}}>Click</button>
 
<button onClick={()=>{
  if(one>0)
  setOne(one-1)
}}>Click</button>
 
<h2>{one}</h2>
<Ap name="OM" course="Full stack developement" Cname="ITRediant"  />
</h1>

    </div>
  )
}

export default App