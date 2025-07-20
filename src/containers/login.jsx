import { Link, useNavigate } from 'react-router'
import { Input, Form } from "antd"
import { axiosQuery } from '../utils/axios';

function Login() {
  const navigate = useNavigate();



  const   onFinish = async (values) => {
    console.log(values)
    const response = await axiosQuery.post("/login",values);
    console.log(response)
    localStorage.setItem("token", response.data.data.token)
    navigate("dashboard")
  };

  return (
    <section className='flex justify-center flex-row items-center w-full h-[100vh]'>
      <div className='w-[50%] h-[100%] flex bg-[#2374a7]'></div>
      <div className='w-[50%] h-[100%] p-[20px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center' style={{borderRadius:'20px', border:'1px solid #2374a7', padding:'20px'}}>
          <h1 className='text-[50px] font-bold text-center'>Gestion de equipo</h1>
          {/* formulario */}
          <div className='w-full h-auto px-[20px]'>
            <Form
              layout='vertical'
              className='w-full'
              // style={{ maxWidth: 600 }}
              onFinish={onFinish}
              autoComplete="off"
            >
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
                rules={[{ required: true,min:8, message: 'La contrasñea debe tener 8 caracteres'   }]}
              >
                <Input type='password'  />
              </Form.Item>
              <div className='flex justify-center items-center'>
                <button
                  type="submit" 
                  style={{borderRadius:'20px',background:'#2346a7'}} 
                  className='text-white flex justify-center items-center p-[15px] text-[20px] hover-button'
                >
                    Continuar
                </button>
              </div>
            </Form>
          </div>
        </div>
        <Link to="../register" className='text-[20px] pt-[40px]'>Crear una nueva cuenta</Link>
      </div>
    </section>
  )
}

export default Login
