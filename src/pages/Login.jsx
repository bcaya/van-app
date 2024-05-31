import React from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {loginUser} from "../../api"
import { Box,Stack } from "../assets/CSS/StylesMain"

export default function Login(){
  const [loginFormData, setLoginFormData] = React.useState({email:"", password:""})
  const [status, setStatus] = React.useState("idle")
  const [error, setError] = React.useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || "/host"

  function handleSubmit(e){
    e.preventDefault()
    setStatus("submitting")
    loginUser(loginFormData)
      .then(data => {
        setError(null)
        localStorage.setItem("loggedin", true)
        navigate(from, {replace: true})
      })
      .catch(err=> {
        setError(err)
      })
      .finally(() => {
        setStatus("idle")
      })
  }
  function handleChange(e){
    const {name, value} = e.target 
    setLoginFormData(prev => ({
      ...prev,
      [name]: value 
    }))
  }
  return(
    <box-l>
      <div className="login-container">
        <stack-l>

        
        {
          location.state?.message &&
          <h3 className="login-error">{location.state.message}</h3>
        }
        <box-l>
        <h1>Sign in to your account</h1>
        {error?.message &&
        <h3 className="login-error">{error.message}</h3>}
        </box-l>
        <box-l>
         
            <form onSubmit={handleSubmit} className="login-form">
            <stack-l>
              <input 
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                value={loginFormData.email}
              />
                            <input 
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="password"
                value={loginFormData.email}
              />
              <button 
                disabled={status === "submitting"}
                >{status === "submitting"
                    ? "Logging in..."
                    : "Log in" }</button>
              </stack-l>
            </form>
          
        </box-l>

        </stack-l>

      </div>
    </box-l>
  )
}