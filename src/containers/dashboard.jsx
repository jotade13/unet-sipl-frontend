import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { Input, Form } from "antd"
import { PuzzlePieceIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion } from 'motion/react'

function Login() {

    const { register, handleSubmit } = useForm()
    const [statusSelect, setStatusSelect] = useState(0)
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({name: 'Cesar Mora', email: 'morecontrol64@gmail.com', rol: 'student'})
    },[])

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const status = ['Disponible','Prestamo','Mantenimiento']
    const equipmentTest = [
        {id:0,status:'Disponible',name:'Lapiz',description:'Hola que hace'},
        {id:2,status:'Prestamo',name:'Lonchera',description:'Hola que hace'},
        {id:3,status:'Mantenimiento',name:'Manual',description:'Hola que hace'},
        {id:4,status:'Disponible',name:'Colchon',description:'Hola que hace'},
        {id:5,status:'Disponible',name:'Armadillo',description:'Hola que hace'},
    ]

    return (
        <section className='flex justify-start flex-col items-center w-full h-[100vh] p-[100px]'>
            <div style={{borderRadius:'0px 0px 0px 40px'}} className='fixed right-0 top-0 w-[180px] h-[120px] border-6 border-solid border-[#2374a7] flex justify-center items-center gap-[5px] flex-col p-[40px]'>
                <UserIcon style={{width:'50px',height:'50px',minWidth:'50px',minHeight:'50px', color:'black'}}/>
                <p className='text-black text-center w-full'>{user?.name}</p>
            </div>
            <div className='w-full h-auto flex flex-row mb-[30px] gap-[20px]'>
                {status.map((e,index) => (
                    <div 
                        style={{borderRadius:'20px', background: statusSelect === index ? '#162456' : 'white', color: statusSelect === index ? 'white' : '#162456', transition:'all ease-in-out 0.5s', cursor:'pointer'}} 
                        className='border-2 border-solid border-blue-950 p-[10px] font-bold'
                        onClick={() => setStatusSelect(index)}
                    >{e}</div>
                ))}
            </div>
            <div className='container-list'>
                {equipmentTest.map(({name,status,description},index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: index * 0.1 }} 
                        style={{borderRadius:'20px'}}
                        className='h-auto pt-[100px] w-[300px] relative flex flex-col justify-center items-center border-2 border-solid border-blue-950 p-[10px]'
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
                            <button
                                type="submit" 
                                style={{borderRadius:'20px',background:'#162456'}} 
                                className='text-white flex justify-center items-center py-[5px] px-[10px] text-[18px] mt-[20px]'
                            >
                                Solicitar
                            </button>
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