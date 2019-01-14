import React from 'react'
import AuthTemplate from 'components/auth/AuthTemplate'
import LoginFormContainer from 'containers/LoginFormContainer'

const Login = () => {
  return (
    <AuthTemplate>
      <LoginFormContainer />
    </AuthTemplate>
  )
}

export default Login
