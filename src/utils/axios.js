import axios from "axios"

export const axiosQuery = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 16|SQ5zo9T5Q99QaM7RmGfEc0r3M5dQNlVGAyZ4SOTU063fe1ef'
  }
});