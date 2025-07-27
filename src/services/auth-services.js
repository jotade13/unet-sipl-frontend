import { axiosQuery } from '../utils/axios.js'

export const login = async (data) => {
    try {
        const response = await axiosQuery.post('/login', data);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}

export const register = async (data) => {
    try {
        const response = await axiosQuery.post('/register', data);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}