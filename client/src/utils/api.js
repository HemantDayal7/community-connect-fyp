import axios from "axios";

// Base API URL from .env file
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

// Create Axios instance with common config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
