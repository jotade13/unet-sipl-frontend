import axios from "axios"

export const axiosQuery = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosQuery.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
