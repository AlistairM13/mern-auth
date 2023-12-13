import axios from "axios"
import { UserInfo } from "../App"
const BASE_URL = "http://localhost:5000/api"


export function register(userInfo: UserInfo) {
    return axios.post(
        `${BASE_URL}/users`,
        userInfo,
        { withCredentials: true }
    )
}

export function login(userInfo: UserInfo) {
    return axios.post(
        `${BASE_URL}/users/login`,
        userInfo,
        { withCredentials: true }
    )
}

export function getUsers() {
    return axios.get(
        `${BASE_URL}/users`,
        { withCredentials: true }
    )
}