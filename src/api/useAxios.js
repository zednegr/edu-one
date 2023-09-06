import axios from "axios";
import { useContext } from "react";
import { Context } from "../context/authState";

function useAxios() {

    const {authToken} = useContext(Context);

    console.log(authToken);

    const axiosCreate = axios.create({
        baseURL: 'http://esystem.uz/api',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${authToken}`
        }
    })

    return axiosCreate
}

export default useAxios