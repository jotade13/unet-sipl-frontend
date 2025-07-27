import { useCallback, useState, useEffect } from "react"
import { Outlet,Navigate } from "react-router"
import { axiosQuery } from "../utils/axios";
import { Spin } from "antd";

export const DefaultLayout = () => {
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    const verify = useCallback(async () => {
        try {
            await axiosQuery.get('/equipment', {params: {status:''}});
            setLogged(true)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw error.response ? error.response.data : new Error('Network Error');
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(() => { verify() },[])

    return loading ? <div className="d-flex w-full h-[100vh] flex justify-center items-center">
        <Spin/>
    </div> : logged ? <Outlet/> : <Navigate to="/login" replace /> 
} 