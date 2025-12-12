import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "http://localhost:8080"
    : "http://localhost:8080",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;