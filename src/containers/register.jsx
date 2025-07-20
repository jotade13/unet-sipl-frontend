import { useState } from 'react'
import { Link } from 'react-router'

function Register() {

  return (
    <section className='flex justify-center flex-row items-center w-full h-[100vh]'>
      <div className='w-[50%] h-[100%] flex bg-[#2374a7]'></div>
      <div className='w-[50%] h-[100%] p-[20px] flex flex-col items-center justify-center'>
          <h1 className='text-[50px] font-bold text-center'>Gestion de equipo</h1>
          {/* formulario */}
          {/* cierre formulario */}
          <button
            type="submit" 
            style={{borderRadius:'20px',background:'#2346a7'}} 
            className='text-white flex justify-center items-center p-[15px] text-[20px]'
          >
              Continuar
          </button>
          <Link to="../login" className='text-[20px]'>Iniciar sesion</Link>
      </div>
    </section>
  )
}

export default Register
