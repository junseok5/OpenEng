import React from 'react'
import AuthTemplate from 'components/auth/AuthTemplate'
import LoginFormContainer from 'containers/LoginFormContainer'
import Base from 'containers/Base'
import TabsContainer from 'containers/TabsContainer'

const Login = () => {
  return (
    <AuthTemplate>
      <Base />
      <TabsContainer />
      <LoginFormContainer />
    </AuthTemplate>
  )
}

export default Login
