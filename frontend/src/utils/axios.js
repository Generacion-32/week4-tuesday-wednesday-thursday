import axiosOriginal from "axios";

const getAuthorization = () => 'Bearer '+localStorage.getItem('token')

const axios = () => axiosOriginal.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {'Authorization': getAuthorization()}
})

export default axios;