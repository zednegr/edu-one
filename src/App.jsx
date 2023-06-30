import { useEffect, useState } from 'react'
import Login from '../screen/login/login'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'

import axios from 'axios'

function App() {

  return (
    <>
      <Navbar />
      <marquee direction="top">
        <h1>Hello World</h1>
      </marquee>
    </>
  )
}

export default App
