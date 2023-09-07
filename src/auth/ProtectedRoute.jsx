import React, { useContext } from "react";
import { Context } from "../context/authState";
import Authentication from "./Authentication";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {authToken} = useContext(Context);

    if(authToken){
        return children
    }else{
        return <Navigate  to={'/login'}  />
    }
}

export default ProtectedRoute