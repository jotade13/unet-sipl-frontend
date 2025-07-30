import {useCallback, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import { Input, Form } from "antd"
import { PuzzlePieceIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion } from 'motion/react'
import { getEquipment } from "../services/equipment-services.js";
import {createEquipmentRequest} from "../services/equipment-request-services.js";
import equipmentConsts from "../consts/equipment-consts.js";


function Login() {
    const status = Object.values(equipmentConsts.status)
    const navigate = useNavigate()
    const [statusSelect, setStatusSelect] = useState(0)
    const [user, setUser] = useState({})
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        setUser({name: 'Cesar Mora', email: 'morecontrol64@gmail.com', rol: 'admin'})
    },[])



    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await getEquipment(status[statusSelect]);
                setEquipments(response.data.equipments.data)
            } catch (error) {
                console.error("Error fetching equipment:", error);
            }
        };

        fetchEquipment();
    }, [statusSelect]);

    const requestEquipment = async (equipmentId) => {
        try {
            const response = await createEquipmentRequest(equipmentId)
            alert(response.message)
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <section className='flex justify-start flex-col items-center w-full h-[100vh] p-[100px]'>
            <div style={{borderRadius:'0px 0px 0px 40px'}} className='fixed right-0 top-0 w-[180px] h-[120px] border border-solid border-gray-200 shadow-md flex justify-center items-center gap-[5px] flex-col p-[40px]'>
                <UserIcon style={{width:'50px',height:'50px',minWidth:'50px',minHeight:'50px', color:'black'}}/>
                <p className='text-black text-center w-full'>{user?.name}</p>
            </div>
            <div onClick={() => {localStorage.setItem('token',''); navigate('/login')}} style={{borderRadius:'0px 0px 0px 40px', cursor:'pointer'}} className='fixed right-[180px] top-[0px] w-[180px] h-[60px] border border-solid border-gray-200 shadow-md flex justify-center items-center gap-[5px] flex-col p-[20px]'>
                <p className='text-black text-center w-full'>Cerrar Sesion</p>
            </div>
            <div className='w-full h-auto flex flex-row mb-[30px] gap-[20px]'>
                {status.map((e,index) => (
                    <div 
                        key={index}
                        style={{borderRadius:'20px', background: statusSelect === index ? '#162456' : 'white', color: statusSelect === index ? 'white' : '#162456', transition:'all ease-in-out 0.5s', cursor:'pointer'}} 
                        className='border-2 border-solid border-blue-950 p-[10px] font-bold'
                        onClick={() => setStatusSelect(index)}
                    >{e}</div>
                ))}
            </div>
            <div className='container-list'>
                {equipments.map(({id,name,status,description,is_requested},index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: index * 0.1 }} 
                        style={{borderRadius:'20px'}}
                        className='h-auto pt-[100px] w-[300px] relative flex flex-col justify-center items-center border border-solid border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-[10px]'
                    >
                        <div className='infiniti-move absolute right-[-10px] top-[-10px] max-w-[140px] border-2 p-[10px] bg-white' style={{borderRadius:'20px', zIndex:'2'}}>
                            {status}
                        </div>
                        <div className='flex absolute left-0 top-0 flex-row flex-nowrap justify-start items-center w-full gap-[20px] bg-[#162456]' style={{zIndex:'1', borderRadius:'18px 0px 0px 0px'}}>
                            <div className='w-[100px]'>
                                <PuzzlePieceIcon color='white'/>
                            </div>
                            <div className='flex w-full text-center justify-start items-center' style={{color:'white', height:'auto'}}>{name}</div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            {description}
                        </div>
                        <div className='flex justify-center items-center'>
                            {is_requested ? <button
                                type="submit"
                                style={{borderRadius:'20px',background:'#162456'}}
                                className='text-white flex justify-center items-center py-[5px] px-[10px] text-[18px] mt-[20px]'
                                onClick={() => {requestEquipment(id)}}
                            >
                                Solicitar
                            </button> : <button
                              type="submit"
                              style={{borderRadius:'20px',background:'#0fb630'}}
                              className='text-white flex justify-center items-center py-[5px] px-[10px] text-[18px] mt-[20px]'
                            >
                                Equipo ya solicitado
                            </button>}
                            {user?.rol === 'admin' && <button
                                type="submit" 
                                style={{borderRadius:'20px',background:'#162456'}} 
                                className='text-white flex justify-center items-center py-[5px] px-[10px] text-[18px] mt-[20px]'
                            >
                                Ver Solicitudes
                            </button>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Login