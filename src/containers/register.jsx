import { Link, useNavigate } from 'react-router'
import { Input, Form, Divider } from "antd"
import { axiosQuery } from '../utils/axios';
import { register } from '../services/auth-services';

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async () => {
    let data = form.getFieldsValue();
    await register(data)
    navigate('/login')    
  }

  return (
    <section className='flex justify-center flex-row items-center w-full h-[100vh]'>
      <div className='w-[50%] h-[100%] flex bg-[#2374a7]'></div>
      <div className='w-[50%] h-[100%] p-[20px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center' style={{borderRadius:'20px', border:'1px solid #2374a7', padding:'20px'}}>
          <h1 className='text-[50px] font-bold text-center'>Nuevo Usuario</h1>
          {/* formulario */}
          <div className='w-full h-auto px-[20px]'>
            <Form
              form={form}
              onFinish={onFinish}
              layout='vertical'
            >
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Por favor agrega tu nombre' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Por favor agrega tu email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'La contrasñea debe tener 8 caracteres'   }]}
              >
                <Input type='password'/>
              </Form.Item>
              <Form.Item
                label="Confirmar Contraseña"
                name="password_confirmation"
                rules={[{ required: true, message: 'La contrasñea debe tener 8 caracteres'   }]}
              >
                <Input type='password'/>
              </Form.Item>
              <Form.Item
                label="Cedula"
                name="identity_card"
                rules={[{ required: true, message: 'Por favor agrega tu Cedula' }]}
              >
                <Input />
              </Form.Item>
              <button
                type="submit" 
                style={{borderRadius:'20px',background:'#162456'}} 
                className='text-white flex justify-center items-center p-[15px] text-[20px]'
              >
                Continuar
              </button>
          </Form>
          </div>
        </div>
        <Link to="../login" className='text-[20px]'>Iniciar sesion</Link>
      </div>
    </section>
  )
}

export default Login
