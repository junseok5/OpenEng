import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import LoginForm from 'components/auth/LoginForm'
import { emailCheck, passwordCheck } from 'lib/validation'

class LoginFormContainer extends Component {
  _onChangeForm = e => {
    const { name, value } = e.target
    AuthActions.changeLoginForm({ name, value })
  }

  _onSubmit = async () => {
    const { loginForm } = this.props
    const { email, password } = loginForm

    if (!emailCheck(email)) {
      AuthActions.setMessage('이메일 양식이 잘못되었습니다.')
      return
    } else if (!passwordCheck(password)) {
      AuthActions.setMessage('비밀번호는 6자 이상 30자 이하입니다.')
      return
    }

    try {
      await AuthActions.localLogin({ email, password })

      const { result } = this.props

      console.log(result)
    } catch (e) {
      const { error } = this.props

      if (error === 'USER_NOT_FOUND' || error === 'WRONG_PASSWORD') {
        AuthActions.setMessage('이메일 또는 비밀번호가 정확하지 않습니다.')
      } else {
        AuthActions.setMessage('알 수 없는 이유로 로그인에 실패하였습니다.')
      }
    }
  }

  componentDidMount() {
    AuthActions.initialize()
  }

  render() {
    return (
      <LoginForm
        loginForm={this.props.loginForm}
        message={this.props.message}
        _onChangeForm={this._onChangeForm}
        _onSubmit={this._onSubmit}
      />
    )
  }
}

LoginFormContainer.propTypes = {
  loginForm: PropTypes.object,
  message: PropTypes.string,
  result: PropTypes.any,
  error: PropTypes.any,
}

export default connect(state => ({
  loginForm: state.auth.loginForm,
  message: state.auth.message,
  result: state.auth.result,
  error: state.auth.error,
}))(withRouter(LoginFormContainer))
