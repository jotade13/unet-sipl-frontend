import axios from "axios"

export const axiosQuery = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 8|RUMC3urBVlxnDM8hOofeWKrSPcUAsC8mVkyGxolebdcbc2ae'
  }
});