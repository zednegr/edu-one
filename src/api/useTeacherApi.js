import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

import useAxios from "./useAxios";

// const newAxios = useAxios()

// Fetching Teacher Data
const fetchTeacherData = () => {
    return axios.get('http://esystem.uz/api/employee/')
}

// Delete Teacher
export const useFetchTeacherData = () => {
    return useQuery('teacher-data', fetchTeacherData)
}

export const deleteTeacher = (userId) => {
    return axios.delete(`https://64ca7e11700d50e3c704fadc.mockapi.io/edu/${userId}`)
}

export const useDeleteTeacher = () => {
    const queryClient = useQueryClient()
    return useQuery(['delete-teacher', userId], () => deleteTeacher())
}

// Create Teacher 
const createTeacherPost = (body) => {
    return axios.post('http://esystem.uz/api/employee-create/', body)
}

export const useAddTeacherData = () => {
    const queryClient = useQueryClient()
    return useMutation(createTeacherPost, {
        onSuccess: () => {
            queryClient.invalidateQueries('teacher-data')
            queryClient.invalidateQueries('delete-teacher')
        }
    })
}
