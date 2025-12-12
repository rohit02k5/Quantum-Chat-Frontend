import axios from "axios";

const instance = axios.create({
   baseURL: process.env.REACT_APP_API_URL || (process.env.NODE_ENV === "production"
    ? "https://quantum-chat-backend.onrender.com"
    : "http://localhost:8080"),
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
