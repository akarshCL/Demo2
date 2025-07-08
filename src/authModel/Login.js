import React from 'react'
import CommonBtn from './CommonBtn'

const Login = () => {
        const handleLoginForm = () => {
        console.log("Signup Form")
    }
  return (
    <div>
      Login
          <CommonBtn
                text={"Login"}
                handleFunction={handleLoginForm} />
    </div>
  )
}

export default Login
