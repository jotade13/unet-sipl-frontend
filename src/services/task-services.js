import { axiosQuery } from "../utils/axios"

export const createTask = async (data) => {
    try {
        const response = await axiosQuery.post("/task",data)
        return response.data;
    }
    catch(error) {
        throw error.response ? error.response.data : new Error ("Network Error")
    }
}