import React from 'react'
import Home from './components/Home'
import Card from './components/Card'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>    
      <Card/>
      
    </div>
  )
}

export default App