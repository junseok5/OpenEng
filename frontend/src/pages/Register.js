import React from 'react'
import AuthTemplate from 'components/auth/AuthTemplate'
import RegisterFormContainer from 'containers/RegisterFormContainer'
import Base from 'containers/Base'

const SignUp = () => {
  return (
    <AuthTemplate>
      <Base />
      <RegisterFormContainer />
    </AuthTemplate>
  )
}

export default SignUp
