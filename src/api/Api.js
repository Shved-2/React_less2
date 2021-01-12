import * as axios from "axios";
//import { follow } from "../Redux/userReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "031f8b3c-bf4d-4b85-976c-10a38a1d6fc7"
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&Count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    }
}


