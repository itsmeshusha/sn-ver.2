import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4176d453-1d14-4d67-b327-209c3ed24c14"
    }
});

export const usersAPI = {
    getUsers() {
        return instance.get(`users`).then(res => res.data)
    }
}