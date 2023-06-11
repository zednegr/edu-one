import { useEffect, useState } from 'react'
import Login from '../screen/login/login'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'

import axios from 'axios'

function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  async function dataFetch() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  console.log(data);

  useEffect(() => {
    dataFetch()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <>
      {/* <Navbar /> */}

    {
      data?.map((item, index) => {
        return(
         <>
          <p>Name: {item.name}</p>
          <p>UserName: {item.username}</p>
          <br />
          <br />
         </>
        )
      })
    }

    </>
  )
}

export default App
