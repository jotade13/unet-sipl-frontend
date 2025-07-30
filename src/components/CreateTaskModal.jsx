import { useEffect,useState } from "react"
import Form, { useForm } from "antd/es/form/Form"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import Modal from "antd/es/modal/Modal"
import { createTask } from "../services/task-services"

export const CreateTaskModal = ({openModal=() => {}}) => {
    const [form] = useForm()
    const [openState, setOpenState] = useState(false)
    const onFinish = ()  => {
        let task = form.getFieldValue();
        console.log(task)
       createTask(task);
    }

    useEffect(() => {
        if(typeof openModal === 'function'){
            openModal((bul) => {setOpenState(bul)})
        }
    },[openModal])

    return <Modal open={openState} onOk={onFinish} onCancel={() => setOpenState(false)} okText="Crear Tarea">
        <Form onFinish={onFinish} form={form} layout="vertical">
            <FormItem name="name" label="Nombre">
                <Input/>
            </FormItem>
            <FormItem name="description" label="Descripcion">
                <Input/>
            </FormItem>
        </Form>
    </Modal>
}