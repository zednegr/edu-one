import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useState } from "react";

// const API = process.env.REACT_APP_API_KEY


const createTeacherPost = (body) => {
    return axios.post('https://64ca7e11700d50e3c704fadc.mockapi.io/edu', body)
}

const fetchTeacherData = () => {
    return axios.get('https://64ca7e11700d50e3c704fadc.mockapi.io/edu')
}



export const deleteTeacher = (userId) => {
    return axios.delete(`https://64ca7e11700d50e3c704fadc.mockapi.io/edu/${userId}`)
}

export const useDeleteTeacher = () => {
    const queryClient = useQueryClient()
    return useQuery(['delete-teacher', userId], () => deleteTeacher())
}

export const useFetchTeacherData = () => {
    return useQuery('teacher-data', fetchTeacherData)
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
