import axios from "axios"

export const axiosQuery = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 1000,
  headers: { 'Accept': 'application/json','Content-Type': 'application/json'}
});