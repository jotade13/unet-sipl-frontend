import { axiosQuery } from "../utils/axios"


export const getTasks = async (status,name) => {
    try {

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