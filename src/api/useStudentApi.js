import { useQuery } from "react-query";
import axios from "axios";

const fetchStudentData = () => {
    return axios.get('http://esystem.uz/api/student/')
}

export const useStudentData = () => {
    return useQuery('student-data', fetchStudentData)
}