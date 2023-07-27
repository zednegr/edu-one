import { useEffect, useState } from 'react'
import Login from '../screen/login/login'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import styled from "styled-components"

import axios from 'axios'
import NavbarLeft from './components/navbar-left/navbar-left.jsx'

const Wrapper = styled.section`
    padding: 15px;
`

function App() {

  return (
    <>
      <Navbar />
      <Wrapper>
        <NavbarLeft />
      </Wrapper>
    </>
  )
}

export default App
