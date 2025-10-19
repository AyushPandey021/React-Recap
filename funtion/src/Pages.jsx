import React from 'react'
import './Page.css'
const Pages = () => {
    const pageScroll = ()=>{
console.log("user Scrolling");

    }
  return (
    <div onWheel={pageScroll} className='Pages'>       
        <div className="Page1">Page 1</div>
        <div className="Page2">Page 2</div>
        <div className="Page3">Page 3</div>
    </div>
  )
}

export default Pages