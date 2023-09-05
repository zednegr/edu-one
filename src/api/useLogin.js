import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const loginPost = async (body) => {
   let res = await axios.post('http://esystem.uz/account/log-in/',{username: 'admin', password: '1'})
   console.log(res);
   return res.data
}

export const useCreateToken = () => {
    return useMutation(loginPost)
}