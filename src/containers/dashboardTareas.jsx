import {useCallback, useEffect, useState, useRef} from 'react'
import { deleteTask, getTasks, updateTask } from '../services/task-services';
import { Input, Popconfirm, Button, Spin } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import { CreateTaskModal } from "../components/CreateTaskModal"
import dashboard from '../assets/dashboard.json'
import Lottie from 'lottie-react';

function DashboardTareas() {
    const [tasks, setTasks] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [pending, setPending] = useState(0);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('completed');
    const openModal = useRef({})
    const lottieRef = useRef();

    const getTask = useCallback(async () => {
        setLoading(true)
        let data = await getTasks(status, name);
        setCompleted(data?.data?.completed_tasks);
        setPending(data?.data?.pending_tasks);
        setTasks(data.data.tasks.data)
        setLoading(false)
    },[status, name])

    const completeTask = (id) => {
        const response = updateTask(id, {
            status: 'completed'
        });

        if(!response.errors) {
            alert("Status actualizado correctamente")
            setTasks(tasks.map((task) => {
                if(task.id == id) {
                    task.status = 'completed'
                }
                return task;
            }))
        } else {
            toast.error('Error actualizando');
        }
    };

  

    const deleteId = (id) => {
        const response = deleteTask(id);

        if(!response.errors) {
            toast.error('tarea eliminada correctamente');
        } else {
            alert("Error eliminando tarea")
            toast.error('Error eliminando tarea');
        }
    };

    useEffect(() => {
        getTask();
    },[status,name])

    return <><div className='box-load'>
            <Lottie 
                animationData={dashboard} 
                loop={true} 
                lottieRef={lottieRef}
                autoplay={true} 
                style={{ width: "100%", height: "100%"}}
                onDOMLoaded={() => {
                    lottieRef.current.setSpeed(1); // Velocidad 2x
                }}
            />
        </div><div className='w-full h-[100vh]'>
        <div className='w-full h-[90px] border border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center'>
            <div className='w-auto ml-[40px] font-bold text-[25px]'>Control de tareas JCG++</div>
            <Button type="primary" className="mr-6" onClick={() => {
                openModal.current(true)
            }}>Agregar Tarea</Button>
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className='w-[60%] h-auto flex row '>
                <div className='w-[50%] radius m-[50px] p-[20px] shadow-green-200 h-auto flex flex-col border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <h1 className='font-bold text-[30px] w-full text-center p-20px'>Tareas Completadas</h1>
                    <h1 className='font-bold text-[50px] w-full text-center p-20px'>{completed}</h1>
                </div>
                <div className='w-[50%] radius m-[50px] p-[20px] shadow-green-200 h-auto flex flex-col border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <h1 className='font-bold block text-[30px] w-full text-center p-20px'>Tareas Pendientes</h1>
                    <h1 className='font-bold block text-[50px] w-full text-center p-20px'>{pending}</h1>
                </div>
            </div>
        </div>
        <div className='w-full h-auto flex row gap-5 justify-center items-center'>
            <div className='w-[60%] flex row gap-[20px]'>
                <div className='w-[60%]'>
                    <Input 
                        style={{height:'100%', borderRadius:'20px'}}
                        onChange={(e) => setName(e?.target?.value)}    
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
        <div className='container-list pt-[20px] relative'>
            {loading ? <div className='w-full absolute h-[100px] flex justify-center items-center'><Spin/></div> : tasks.filter(e => e?.status === status)?.map(({id,name,description,status}) => {
                return <div key={id} className='relative h-auto p-[20px] min-h-[100px] min-w-[100px] radius flex flex-col border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <p className='absolute top-[10px] right-[10px] radius2 border border-solid border-blue-950 text-blue-950 w-[100px] text-center p-[5px]'>{status}</p>
                    <h1 className='text-[30px] font-bold'>{name}</h1>
                    <p>{description}</p>
                    {status == 'pending' && <Popconfirm
                        title='Complete task'
                        onConfirm={() => {
                            completeTask(id)
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" className='mt-2'>Complete task</Button>
                    </Popconfirm>}
                    <Popconfirm
                        title='delete task'
                        onConfirm={() => {
                            deleteId(id)
                            getTask()
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="default" className='mt-2'>Eliminar task</Button>
                    </Popconfirm>
                </div>
            })}
        </div>
        <CreateTaskModal 
            openModal={(func) => {
                openModal.current = func
            }}
            setTasks={setTasks}
            toast={toast}
        />
        <Toaster position="top-right" />
    </div>
        {/* <div>
            <div>
                <div></div>
                <Button></Button>
            </div>
            <div>
                <div>
                    <div>
                        <h1></h1>
                        <h1></h1>
                    </div>
                    <div>
                        <h1></h1>
                        <h1></h1>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Input></Input>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p></p>
                    <h1></h1>
                    <p></p>
                    <div>
                        <Button></Button>
                        <Popconfirm><Button></Button></Popconfirm>
                    </div>
                </div>
            </div>
        </div> */}
    </>
}

export default DashboardTareas