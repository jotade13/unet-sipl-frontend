import axiosQuery from '../utils/axios.js'

export const login = async (email, password) => {
    try {
        const response = await axiosQuery.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}

export const register = async (name, email, password) => {
    try {
        const response = await axiosQuery.post('/auth/register', { name, email, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}