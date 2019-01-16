import React from 'react'
import AuthTemplate from 'components/auth/AuthTemplate'
import RegisterFormContainer from 'containers/RegisterFormContainer'
import Base from 'containers/Base'
import TabsContainer from 'containers/TabsContainer'

const SignUp = () => {
  return (
    <AuthTemplate>
      <Base />
      <TabsContainer />
      <RegisterFormContainer />
    </AuthTemplate>
  )
}

export default SignUp
