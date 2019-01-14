import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import RegisterForm from 'components/auth/RegisterForm'

class RegisterFormContainer extends Component {
  _onChangeForm = e => {
    const { name, value } = e.target
    AuthActions.changeRegisterForm({ name, value })
  }

  _onSubmit = () => {}

  render() {
    return (
      <RegisterForm
        registerForm={this.props.registerForm}
        _onChangeForm={this._onChangeForm}
      />
    )
  }
}

RegisterFormContainer.propTypes = {
  registerForm: PropTypes.object,
}

export default connect(state => ({
  registerForm: state.auth.registerForm,
}))(withRouter(RegisterFormContainer))
