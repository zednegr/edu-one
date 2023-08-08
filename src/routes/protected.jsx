import React from 'react'
import { useEffect } from 'react'
import { DISABLE_SPEEDY } from 'styled-components/dist/constants'

const Protected = () => {

    let is_registered = localStorage.getItem("")
    useEffect(()=>{
        console.log("hello")
    },[])

  return (
    <div>Protected</div>
  )
}

export default Protected