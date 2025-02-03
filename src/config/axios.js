import axios from "axios";

const baseURL= "http://localhost:5000/api/v1"

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = baseURL
axiosInstance.defaults.withCredentials = true

export default axiosInstance