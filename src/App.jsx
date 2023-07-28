import { useEffect, useState } from 'react'
import Login from '../screen/login/login'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'

import NavbarLeft from './components/navbar-left/navbar-left.jsx'
import Content from './components/content/content'

import 'primeicons/primeicons.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home/home'
import Students from './pages/students/students'
import Teacher from './pages/teachers/teachers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/students/list',
    element: <Students />,
  },
  {
    path: '/teachers/list',
    element: <Teacher />,
  }
])


function App() {


  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
