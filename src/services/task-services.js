import { axiosQuery } from "../utils/axios"


export const getTasks = async (status,name) => {
    try {

        console.log(name)
        const response = await axiosQuery.get("/task",{
            params: {status,search:name}
        });
        if(response.status === 200){
            return response.data
        }
    }catch(err) {
        console.log(err?.response?.data);
    }
}

export const createTask = async (data) => {
    try {
        const response = await axiosQuery.post("/task",data)
        return response.data;

    }
    catch(error) {
        throw error.response ? error.response.data : new Error ("Network Error")
    }
}

export const updateTask = async (id, data) => {
    try {
        const response = await axiosQuery.put(`/task/${id}`,data)
        return response.data;

    }
    catch(error) {
        throw error.response ? error.response.data : new Error ("Network Error")
    }
}
export const deleteTask = async (id) => {
    try {
        const response = await axiosQuery.put(`/task/${id}`)
        return response.data;

    }
    catch(error) {
        throw error.response ? error.response.data : new Error ("Network Error")
    }
}