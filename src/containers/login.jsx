import { useState } from 'react'
import { Link } from 'react-router'

function Login() {

  return (
    <section className='d-flex justify-center flex-row items-center'>
        <div className='w-[50%] d-flex'></div>
        <div className='w-[50%] p-[20px] d-flex flex-col items-center justify-center'>
            <h1 className='text-[40px] font-bold text-center'>Gestion de equipo</h1>
            {/* formulario */}
            {/* cierre formulario */}
            <button
                type="submit" 
                style={{borderRadius:'20px',background:'#646cffaa'}} 
                className='text-white d-flex justify-center items-center'
            >
                Continuar
            </button>
            <Link to="/register" className='text-[25px] '>Crear una nueva cuenta</Link>
        </div>
    </section>
  )
}

export default Login
