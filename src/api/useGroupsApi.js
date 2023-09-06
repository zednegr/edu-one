import { useQuery } from "react-query";

import axios from "axios";

const fetchGroupsData = () => {
    return axios.get('http://esystem.uz/api/group/')
}

export const useGroupsData = () => {
    return useQuery(fetchGroupsData)
}