import { useNavigate } from "react-router-dom"

const Login = () => {
  const Navigate =  useNavigate()
  const handldeLogin = ()=>{
     Navigate('/login')
  }
  return (
    <div>
        <button onClick={handldeLogin}  className="font-body capitalize px-3 hover:bg-[#fefefe] hover:text-[#b440ee] transition py-1 border-2 border-amber-100 rounded-full text-white">Login/Signup</button>
    </div>
  )
}

export default Login
