import {axiosQuery} from '../utils/axios.js'

export const getEquipment = async (status) => {
    try {
        const response = await axiosQuery.get('/equipment', {
            params: {status}
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}
