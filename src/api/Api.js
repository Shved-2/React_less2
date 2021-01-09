import * as axios from "axios";


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&Count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "031f8b3c-bf4d-4b85-976c-10a38a1d6fc7"
    }
});



export const getUsers2 = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&Count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}