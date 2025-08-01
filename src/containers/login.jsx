import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Input, Form } from "antd"
import { axiosQuery } from '../utils/axios';
import Lottie from "lottie-react";
import loginregistergif from '../assets/loginregistergif.json'

function Login() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false) 
  const [form] = Form.useForm();

  const   onFinish = async () => {
    setLoading(true);
    let user = form.getFieldValue();
    const response = await axiosQuery.post("/login",user);
    localStorage.setItem("token", response.data.data.token)
    setLoading(false)
    navigate("/dashboard")
  };

  const testAccounts = [
    { email: 'estudiante@unet.edu.ve', role: 'Estudiante' },
    { email: 'admin@unet.edu.ve', role: 'Administrador' }
  ];

  return (
    <section className='flex justify-center flex-row items-center w-full h-[100vh]'>
      <div className='w-[55%] h-[100%] flex bg-[#2374a7] overflow-hidden relative items-center justify-center'>
        <Lottie 
          animationData={loginregistergif} 
          loop={true} 
          autoplay={true} 
          style={{ width: "100%", height: "100%"}}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice"
          }}
        />
      </div>
      <div className='w-[45%] h-[100%] p-[20px] flex flex-col items-center justify-center'>
        <div className="h-[100%] flex items-center justify-center p-4 col min-w-[400px]">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="text-white p-8 text-center pb-4">
              <h1 className="text-black text-2xl font-bold mb-2">UNET</h1>
              <p className="text-black">Sistema...</p>
            </div>

            <div className="p-8 pt-0 pb-0">
              <Form
                form={form}
                layout='vertical'
                className='w-full'
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
                    disabled={loading}
                    className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                  </button>
                </div>
              </Form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Cuentas de Prueba:</h3>
                <div className="space-y-2">
                  {testAccounts.map((account, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        form.setFieldsValue({
                          email: account.email,
                          password: 'demo123'
                        })
                      }}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-sm">{account.role}</div>
                      <div className="text-xs text-gray-600">{account.email}</div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Contraseña para todas las cuentas: <strong>demo123</strong>
                </p>
                <div className="flex justify-center items-center pb-4">
                  <Link to="../register" className='text-[16px] pt-[40px] text-blue-500'>Crear una nueva cuenta</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
