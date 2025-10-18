import React from 'react'

const Input = () => {
    const InputChangeing=()=>{
        console.log("user Is Typing");
        
    }
  return (
    <div>
        <input onChange={function (elem){
            console.log(elem.target.value);
            
        }} type="text"  placeholder='Enter Name' className='p-10' />
    </div>
  )
}

export default Input