import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
      <Footer/>
    </>
  )
}

export default App
