import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
    ? "https://quantum-chat-backend.onrender.com" 
    : "http://localhost:8080", // Default to localhost for both environments
});

export default instance;