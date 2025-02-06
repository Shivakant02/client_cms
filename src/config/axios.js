import axios from "axios";

const baseURL= "https://claim-management-system-server.onrender.com/api/v1"

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = baseURL
axiosInstance.defaults.withCredentials = true

export default axiosInstance