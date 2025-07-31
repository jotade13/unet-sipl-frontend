import { useEffect,useState } from "react"
import Form, { useForm } from "antd/es/form/Form"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import Modal from "antd/es/modal/Modal"
import { createTask } from "../services/task-services"

export const CreateTaskModal = ({openModal=() => {}, setTasks, toast}) => {
    const [form] = useForm()
    const [openState, setOpenState] = useState(false)
    const onFinish = async ()  => {
        let task = form.getFieldValue();
        const response = await createTask(task);
        setTasks((prev) => [...prev, response?.data?.task])
        toast.success(response?.data?.message || 'Tarea Creada Con Exito')
        setOpenState(false)
        form.resetFields()
    }

    useEffect(() => {
        if(typeof openModal === 'function'){
            openModal((bul) => {setOpenState(bul)})
        }
    },[openModal])

    return <Modal open={openState} onOk={onFinish} onCancel={() => setOpenState(false)} okText="Crear Tarea">
        <Form form={form} layout="vertical">
            <FormItem name="name" label="Nombre">
                <Input/>
            </FormItem>
            <FormItem name="description" label="Descripcion">
                <Input/>
            </FormItem>
        </Form>
    </Modal>
}