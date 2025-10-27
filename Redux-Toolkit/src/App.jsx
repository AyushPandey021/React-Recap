import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
const getData=async ()=>{
  const [data, setData] = useState([])
  const responce = await axios.get('https://picsum.photos/v2/list')
   
   setData(responce.data)
    
  
}
  return (

    <div> 


      <button onClick={getData}>Get Data </button>

      <div className="">
        {data.map(function(elem,idx){
          return <h3>hello {idx}</h3>
        })}
      </div>
     </div>
  )
}

export default App