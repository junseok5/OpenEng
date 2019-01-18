import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, BaseActions, UserActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SocialLogin from 'components/auth/SocialLogin'
import storage from 'lib/storage'

class SocialLoginContainer extends Component {
  _socialLogin = async provider => {
    try {
      const { history } = this.props

      await AuthActions.providerLogin(provider)
      BaseActions.changeModal({ name: 'loading', value: true })

      const { socialInfo } = this.props

      await AuthActions.socialLogin({
        provider,
        accessToken: socialInfo.accessToken,
      })

      const { result } = this.props

      if (result) {
        UserActions.setUser(result)
        storage.set('login', true)

        history.push('/')
      }

      BaseActions.changeModal({ name: 'loading', value: false })
    } catch (e) {
      console.log(e)
      BaseActions.changeModal({ name: 'loading', value: false })
    }
  }

  render() {
    return <SocialLogin _socialLogin={this._socialLogin} />
  }
}

SocialLoginContainer.propTypes = {
  socialInfo: PropTypes.any,
  result: PropTypes.any,
}

export default connect(state => ({
  socialInfo: state.auth.socialInfo,
  result: state.auth.result,
}))(withRouter(SocialLoginContainer))
