import {axiosQuery} from '../utils/axios.js'

export const createEquipmentRequest = async (equipmentId) => {
    try {
        const response = await axiosQuery.post('/equipment-request', {
            equipment_id: equipmentId
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}
export const getEquipmentRequest = async (equipmentId) => {
    try {
        const response = await axiosQuery.get('/equipment-request', {
            equipment_id: equipmentId
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}