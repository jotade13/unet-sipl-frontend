import { useState } from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { Input, Form } from "antd"

function Login() {

  const { register, handleSubmit } = useForm()

  const onFinish = (values) => {
    console.log('Success:', values);
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
              <div className='flex justify-center items-center'>
                <button
                  type="submit" 
                  style={{borderRadius:'20px',background:'#162456'}} 
                  className='text-white flex justify-center items-center p-[15px] text-[20px] hover-button'
                >
                    Continuar
                </button>
              </div>
            </Form>
          </div>
          {/* cierre formulario */}
        </div>
        <Link to="../register" className='text-[20px] pt-[40px]'>Crear una nueva cuenta</Link>
      </div>
    </section>
  )
}

export default Login
