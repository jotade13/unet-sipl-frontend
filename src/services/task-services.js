import { axiosQuery } from "../utils/axios"

export const getTasks = async (callback) => {
    try {
        const response = await axiosQuery.get("/task");
        if(response.status === 200){
            return response.data
        }
    }catch(err) {
        console.log(err?.response?.data);
        if(typeof callback === 'function'){callback(err?.response?.data)};
    }
}

export const createTask = async () => {
    try {
        const response = await axiosQuery.post("/task")

    }
    catch {

    }
}