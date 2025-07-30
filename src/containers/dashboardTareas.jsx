import {useCallback, useEffect, useState, useRef} from 'react'
import { getTasks } from '../services/task-services';
import { Input } from 'antd';
import { CreateTaskModal } from "../components/CreateTaskModal"

function DashboardTareas() {
    const [tasks, setTasks] = useState([])
    const [name, setName] = useState('')
    const [status, setStatus] = useState('completed')
    const openModal = useRef({})

    const getTask = useCallback(async () => {
        let data = await getTasks(status, name);
        setTasks(data.data.tasks.data)
    },[status, name])

    useEffect(() => {
        getTask();
    },[status,name])

    return <div className='w-full h-[100vh]'>
        <div className='w-full h-[90px] border border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center'>
            <div className='w-auto ml-[40px] font-bold text-[25px]'>Control de tareas JCP++</div>
            <div className='w-auto mr-[40px]'>Nombre Apellido</div>
        </div>
        <div className='flex fixed right-[20px] top-[100px] p-[10px] bg-blue-950 text-white border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200 radius' onClick={() => {
            openModal.current(true)
        }}>Agregar Tarea</div>
        <div className='w-full h-auto flex flex-col justify-center items-center '>
            <div className='w-[60%] h-auto flex row '>
                <div className='w-[50%] radius m-[50px] p-[20px] h-auto flex flex-col border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <h1 className='font-bold text-[30px] w-full text-center p-20px'>Tareas Completadas</h1>
                    <h1 className='font-bold text-[30px] w-full text-center p-20px'>0</h1>
                </div>
                <div className='w-[50%] radius m-[50px] p-[20px] h-auto flex flex-col border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <h1 className='font-bold block text-[30px] w-full text-center p-20px'>Tareas Pendientes</h1>
                    <h1 className='font-bold block text-[30px] w-full text-center p-20px'>0</h1>
                </div>
            </div>
        </div>
        <div className='w-full h-auto flex row gap-5 justify-center items-center'>
            <div className='w-[60%] flex row gap-[20px]'>
                <div className='w-[60%]'>
                    <Input 
                        style={{height:'100%', borderRadius:'20px'}}
                        onChange={(e) => setName(e)}    
                    />
                </div>
                <div 
                    onClick={() => setStatus('completed')}
                    style={{cursor:'pointer'}}
                    className={status === 'completed' 
                        ? 'w-[15%] p-[10px] border border-solid border-blue-950 bg-blue-950 text-white radius flex justify-center items-center transition-all duration-700' 
                        : 'w-[15%] p-[10px] border border-solid border-blue-300 radius text-black flex justify-center items-center'
                    }
                >
                    Completadas
                </div>
                <div 
                    onClick={() => setStatus('pending')}
                    style={{cursor:'pointer'}}
                    className={status === 'pending' 
                        ? 'w-[15%] p-[10px] border border-solid border-blue-950 bg-blue-950 text-white radius flex justify-center items-center transition-all duration-700' 
                        : 'w-[15%] p-[10px] border border-solid border-blue-300 radius text-black flex justify-center items-center'
                    }
                >
                    Pendientes
                </div>
            </div>
        </div>
        <div className='container-list pt-[20px]'>
            {tasks?.map(({name,description,status}) => {
                return <div className='relative h-auto p-[20px] min-h-[100px] min-w-[100px] radius flex flex-col border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <p className='absolute top-[10px] right-[10px] radius2 border border-solid border-blue-950 text-blue-950 w-[100px] text-center p-[5px]'>{status}</p>
                    <h1 className='text-[30px] font-bold'>{name}</h1>
                    <p>{description}</p>
                </div>
            })}
        </div>
        <CreateTaskModal 
            openModal={(func) => {
                openModal.current = func
            }}
            setTasks={setTasks}
        />
    </div>
}

export default DashboardTareas