import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login, register } from "./actions/user-actions";

export interface UserInfo {
  username: string;
  email: string;
  password: string;
}

function App() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    email: "",
    password: ""
  })

  function userInfoHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo((prev: UserInfo) => ({ ...prev, [event.target.id]: event.target.value }))
  }

  async function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      let response
      if (isLogin) {
        response = await login(userInfo)
      } else {
        response = await register(userInfo)
      }
      navigate('/', { replace: true })
    } catch (err) {
      console.log("err", err)
    }
  }
  return (
    <div className="flex h-full justify-center items-center">
      <form onSubmit={formSubmitHandler} className="bg-white rounded-lg flex flex-col gap-2 p-4 px-6">
        <h1 className="font-open-sans text-xl mb-2 font-bold">{isLogin ? "Login" : "Register"}</h1>
        {!isLogin && <>
          <label htmlFor="username" >Username</label>
          <input id="username" className="ring-1 p-2 rounded-sm mb-2" placeholder="Username here" value={userInfo.username} onChange={userInfoHandler} />
        </>
        }
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="ring-1 p-2 rounded-sm mb-2" placeholder="Email here" value={userInfo.email} onChange={userInfoHandler} />

        <label htmlFor="password" >Password</label>
        <input id="password" type="password" className="ring-1 p-2 rounded-sm mb-2" value={userInfo.password} onChange={userInfoHandler} placeholder="Password here" />

        {isLogin
          ? <p onClick={() => setIsLogin(false)} className="mb-1 text-sm" >First time here?&nbsp;<span className="hover:underline font-bold cursor-pointer">Register</span></p>
          : <p onClick={() => setIsLogin(true)} className="mb-1 text-sm">Been here before?&nbsp;<span className="hover:underline font-bold cursor-pointer">Login</span></p>
        }

        <button type="submit" className=" btn-grad text-white py-2 font-medium rounded-md">Submit</button>
      </form>
    </div>

  )
}


export default App