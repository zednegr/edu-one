import { createContext, useState, useEffect, useMemo } from "react";

//Import library I
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function Provider({ children }) {
  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    verifyToken()
  }, []);

  async function verifyToken() {
    try {
       const res = await axios.post('http://esystem.uz/account/verify/', {token: token})

       if(res.status !== 200) {
          localStorage.removeItem('token')
          setToken(null)
          navigate('/login')
       }

       console.log(res);
    } catch(error) {
       console.log(error);
       localStorage.removeItem('token')
       setToken(null)
       navigate('/login')
    }
  }

  const loginUser = async (e) => {
    e.preventDefault()

    const {username, password} = e.target.elements

    const res = await axios.post('http://esystem.uz/account/log-in/', {username: username.value, password: password.value})  

    console.log(res);

    if(res.data || res.status == 200) {
        localStorage.setItem('token', res.data.access)
        setToken(res.data.access)
        navigate('/')
    }

  }

  let logOut = () => {
    setToken(null)
    localStorage.removeItem('token')
    
  }

  let authContextData = {
    loginUser: loginUser,
    authToken: token,
    // logOut: logOut,
  }

      
  return(
    <Context.Provider value={authContextData}>
        {children}
    </Context.Provider>
  )
}

export { Context, Provider };
