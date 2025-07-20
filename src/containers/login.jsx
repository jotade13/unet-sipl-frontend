import { useState } from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { Input } from "../components/Input"

function Login() {

  const { register, handleSubmit } = useForm()

  return (
    <section className='flex justify-center flex-row items-center w-full h-[100vh]'>
      <div className='w-[50%] h-[100%] flex bg-[#2374a7]'></div>
      <div className='w-[50%] h-[100%] p-[20px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center' style={{borderRadius:'20px', border:'1px solid #2374a7', padding:'20px'}}>
          <h1 className='text-[50px] font-bold text-center'>Gestion de equipo</h1>
          {/* formulario */}
          <form onSubmit={handleSubmit()}>
            <Input label="Email" register={register} required />
            <Input label="Password" type="password" register={register} required />
          </form>
          {/* cierre formulario */}
          <button
            type="submit" 
            style={{borderRadius:'20px',background:'#2346a7'}} 
            className='text-white flex justify-center items-center p-[15px] text-[20px] hover-button'
          >
              Continuar
          </button>
        </div>
        <Link to="../register" className='text-[20px] pt-[40px]'>Crear una nueva cuenta</Link>
      </div>
    </section>
  )
}

export default Login
