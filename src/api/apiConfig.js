import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Địa chỉ JSON Server
});

export default axiosInstance;
