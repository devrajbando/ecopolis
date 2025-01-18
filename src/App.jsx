import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
    </>
  )
}

export default App
