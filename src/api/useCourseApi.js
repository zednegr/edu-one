import { useQuery } from "react-query";

import axios from "axios";

const fetchCourseData = () => {
    return axios.get('http://esystem.uz/api/course/')
}

export const useCourseData = () => {
    return useQuery('course-data', fetchCourseData)
} 