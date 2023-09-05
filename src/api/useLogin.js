import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useState } from "react";

const login = (body) => {
    return axios.post('http://esystem.uz/account/login-in/',body)
}

export const useCreateToken = () => {
    return useMutation(login)
}



