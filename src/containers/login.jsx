import { useForm } from "react-hook-form"
import { Input } from "../components/Input"

function Login() {

  const { register, handleSubmit } = useForm()

  return (
    <>
      <h1 className='text-white'>haaola</h1>
      <form onSubmit={handleSubmit()}>
        <Input label="Email" register={register} required />
        <Input label="Password" type="password" register={register} required />
      </form>
    </>
  )
}

export default Login
