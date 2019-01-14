import React from 'react'
import AuthTemplate from 'components/auth/AuthTemplate'
import LoginFormContainer from 'containers/LoginFormContainer'
import Base from 'containers/Base'

const Login = () => {
  return (
    <AuthTemplate>
      <Base />
      <LoginFormContainer />
    </AuthTemplate>
  )
}

export default Login
