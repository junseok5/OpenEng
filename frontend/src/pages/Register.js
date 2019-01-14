import React from 'react'
import AuthTemplate from 'components/auth/AuthTemplate'
import RegisterFormContainer from 'containers/RegisterFormContainer'

const SignUp = () => {
  return (
    <AuthTemplate>
      <RegisterFormContainer />
    </AuthTemplate>
  )
}

export default SignUp
