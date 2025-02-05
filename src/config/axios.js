import axios from "axios";

const baseURL= "https://soft-glade-03b5.kants6397.workers.dev/api/v1"

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = baseURL
axiosInstance.defaults.withCredentials = true

export default axiosInstance