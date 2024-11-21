import Image from 'next/image'
import React from 'react'
import loginImage from '../../../public/Log_in.png'

const Login = () => {
  return (
    <div>
    <Image src={loginImage} alt="login page"/>
    <h1>Login</h1>
    </div>
  )
}

export default Login