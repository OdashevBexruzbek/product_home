import { useLogin } from "../hooks/useLogin"
import { FcGoogle } from "react-icons/fc";;

function Login() {
  const {signUpWithGoogle} = useLogin()
  return (
    <div className="min-h-screen grid place-items-center ">
      <h3 className="-mb-96">Sign in with Google</h3>
      <button onClick={signUpWithGoogle} className="btn btn-primary"><FcGoogle /> Google</button>
    </div>
  )
}

export default Login