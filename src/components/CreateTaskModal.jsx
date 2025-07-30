import Form, { useForm } from "antd/es/form/Form"
import Modal from "antd/es/modal/Modal"

export const CreateTaskModal = (open, id) => {
    const [form] = useForm()
    const onFinish = ()  => {
        let task = form.getFieldValue();
        const response = 
    }

    return <Modal open={open}>
        <Form onFinish={} form={form} layout="vertical"></Form>
    </Modal>
}