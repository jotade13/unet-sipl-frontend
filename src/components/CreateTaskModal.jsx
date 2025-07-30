import Form, { useForm } from "antd/es/form/Form"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import Modal from "antd/es/modal/Modal"
import { createTask } from "../services/task-services"

export const CreateTaskModal = (open, id) => {
    const [form] = useForm()
    const onFinish = ()  => {
       
        let task = form.getFieldValue();
        console.log(task)
        const response = createTask(task);
    }

    return <Modal open={open}  onOk={onFinish} okText="Crear Tarea">
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