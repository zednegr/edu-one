import { createContext, useState, useEffect, useMemo } from "react";

//Import library I
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginPost, useCreateToken } from "../api/useLogin";

import { Button, message, Space } from 'antd';


const Context = createContext();

function Provider({ children }) {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const errorLogin = () => {
    messageApi.open({
      type: 'error',
      content: 'User name yoki parol xato kritildi',
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    setLoading(true)

    const { username, password } = e.target.elements;

    try {
      const res = await axios.post("http://esystem.uz/account/log-in/", {
        username: username.value,
        password: password.value,
      });

      if (res.data || res.status == 200) {
        localStorage.setItem("token", res.data.access);
        setToken(res.data.access);
        setLoading(false)
        navigate("/");
      }
    } catch (error) {
      setLoading(false)
      errorLogin()
    }
  };

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

       setLoading(false)

    } catch(error) {
       localStorage.removeItem('token')
       setToken(null)
       navigate('/login')
    }
  }

  let logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate('/login')
  };

  let authContextData = {
    loginUser: loginUser,
    authToken: token,
    loading: loading,
    logOut: logOut,
    contextHolder: contextHolder,
  };

  return (
    <Context.Provider value={authContextData}>{children}</Context.Provider>
  );
}

export { Context, Provider };
