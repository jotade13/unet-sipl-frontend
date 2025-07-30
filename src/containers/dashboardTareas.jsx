import {useCallback, useEffect, useState, useRef} from 'react'
import { deleteTask, getTasks, updateTask } from '../services/task-services';
import { notification, Input, Popconfirm, Button } from 'antd';
import { CreateTaskModal } from "../components/CreateTaskModal"

function DashboardTareas() {
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState(false)
    const openModal = useRef({})

    const getTask = useCallback(async () => {
        let data = await getTasks((message) => {
            if(message){
                notification.error({message});
            }
        });
        setTasks(data.data.tasks.data)
    },[])

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
            alert("Error actualizando")
        }
    };

  

    const deleteId = (id) => {
        const response = deleteTask(id);

        if(!response.errors) {
            alert("tarea eliminada correctamente")
        } else {
            alert("Error eliminando tarea")
        }
    };

 

    useEffect(() => {
        getTask();
    },[])

    return <div className='w-full h-[100vh]'>
        <div className='w-full h-[90px] border border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center'>
            <div className='w-auto ml-[40px] font-bold text-[25px]'>Control de tareas JCP++</div>
            <Button type="primary" className="mr-6" onClick={() => {
                openModal.current(true)
            }}>Agregar Tarea</Button>
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center'>
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
                    <Input style={{height:'100%', borderRadius:'20px'}}/>
                </div>
                <div 
                    onClick={() => setStatus('completed')}
                    style={{cursor:'pointer'}}
                    className={status === 'completed' 
                        ? 'w-[15%] p-[10px] border border-solid border-blue-800 bg-blue-800 text-white radius flex justify-center items-center transition-all duration-700' 
                        : 'w-[15%] p-[10px] border border-solid border-blue-300 radius text-black flex justify-center items-center'
                    }
                >
                    Completadas
                </div>
                <div 
                    onClick={() => setStatus('pending')}
                    style={{cursor:'pointer'}}
                    className={status === 'pending' 
                        ? 'w-[15%] p-[10px] border border-solid border-blue-800 bg-blue-800 text-white radius flex justify-center items-center transition-all duration-700' 
                        : 'w-[15%] p-[10px] border border-solid border-blue-300 radius text-black flex justify-center items-center'
                    }
                >
                    Pendientes
                </div>
            </div>
        </div>
        <div className='container-list'>
            {tasks?.map(({id,name,description,status}) => {
                return <div key={id} className='h-auto min-h-[100px] min-w-[100px] radius flex row border-gray-200 border-solid shadow-sm hover:shadow-md transition-shadow duration-200'>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>{status}</p>
                    {status == 'pending' && <Popconfirm
                        title='Complete task'
                        onConfirm={() => {
                            completeTask(id)
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary">Complete task</Button>
                    </Popconfirm>}
                    <Popconfirm
                        title='delete task'
                        onConfirm={() => {
                            deleteId(id)
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="default">Eliminar task</Button>
                    </Popconfirm>
                </div>
            })}
        </div>
        <CreateTaskModal 
            openModal={(func) => {
                openModal.current = func
            }}
        />
    </div>
}

export default DashboardTareas