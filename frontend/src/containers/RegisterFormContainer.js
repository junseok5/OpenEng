import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, UserActions, BaseActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import RegisterForm from 'components/auth/RegisterForm'
import { emailCheck, passwordCheck, displayNameCheck } from 'lib/validation'
import storage from 'lib/storage'

class RegisterFormContainer extends Component {
  _onChangeForm = e => {
    const { name, value } = e.target
    AuthActions.changeRegisterForm({ name, value })
  }

  _onSubmit = async () => {
    const { registerForm } = this.props
    const { email, password, displayName } = registerForm

    if (!email && !password && !displayName) {
      return
    } else if (!emailCheck(email)) {
      AuthActions.setMessage('이메일 양식이 잘못되었습니다.')
      return
    } else if (!passwordCheck(password)) {
      AuthActions.setMessage('비밀번호는 6자리 이상입니다.')
      return
    } else if (!displayNameCheck(displayName)) {
      AuthActions.setMessage(
        '이름은 특수문자가 포함되지 않고 최소 2자 이상 입니다.'
      )
      return
    }

    try {
      BaseActions.changeModal({ name: 'loading', value: true })
      await AuthActions.localRegister({ email, password, displayName })

      const { result, history } = this.props
      UserActions.setUser(result)
      storage.set('login', true)
      BaseActions.changeModal({ name: 'loading', value: false })

      history.push('/')
    } catch (e) {
      const { error } = this.props

      if (error === 'EXISTS_EMAIL') {
        AuthActions.setMessage('이미 존재하는 계정입니다.')
      } else {
        AuthActions.setMessage('알 수 없는 오류로 회원가입에 실패하였습니다.')
      }
    }
  }

  _onKeyPress = e => {
    if (e.key === 'Enter') {
      this._onSubmit()
    }
  }

  componentDidMount() {
    AuthActions.initialize()
  }

  render() {
    return (
      <RegisterForm
        registerForm={this.props.registerForm}
        message={this.props.message}
        _onChangeForm={this._onChangeForm}
        _onSubmit={this._onSubmit}
        _onKeyPress={this._onKeyPress}
      />
    )
  }
}

RegisterFormContainer.propTypes = {
  registerForm: PropTypes.object,
  message: PropTypes.string,
  result: PropTypes.any,
  error: PropTypes.any,
}

export default connect(state => ({
  registerForm: state.auth.registerForm,
  message: state.auth.message,
  result: state.auth.result,
  error: state.auth.error,
}))(withRouter(RegisterFormContainer))
