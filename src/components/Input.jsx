export const Input = ({ label, register, required, type }) => (
  <>
    <label>{label}</label>
    <input type={type} {...register(label, { required })} />
  </>
)