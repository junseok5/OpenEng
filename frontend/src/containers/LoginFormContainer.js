import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import LoginForm from 'components/auth/LoginForm'

class LoginFormContainer extends Component {
  _onChangeForm = e => {
    const { name, value } = e.target
    AuthActions.changeLoginForm({ name, value })
  }

  _onSubmit = async () => {
    const { loginForm } = this.props
    try {
      await AuthActions.localLogin({
        email: loginForm.email,
        password: loginForm.password,
      })

      const { result } = this.props
      console.log(result)
    } catch (e) {
      const { error } = this.props
      console.log(error)
    }
  }

  render() {
    return (
      <LoginForm
        loginForm={this.props.loginForm}
        _onChangeForm={this._onChangeForm}
        _onSubmit={this._onSubmit}
      />
    )
  }
}

LoginFormContainer.propTypes = {
  loginForm: PropTypes.object,
  result: PropTypes.any,
  error: PropTypes.any,
}

export default connect(state => ({
  loginForm: state.auth.loginForm,
  result: state.auth.result,
  error: state.auth.error,
}))(withRouter(LoginFormContainer))
