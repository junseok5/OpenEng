import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, UserActions, BaseActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import Profile from 'components/user/Profile'
import storage from 'lib/storage'

class ProfileContainer extends Component {
  _logout = async () => {
    try {
      const { history } = this.props

      BaseActions.changeModal({ name: 'loading', value: true })
      await AuthActions.logout()
      UserActions.setUser(null)
      storage.set('login', false)
      BaseActions.changeModal({ name: 'loading', value: false })

      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return <Profile _logout={this._logout} />
  }
}

export default connect(state => ({}))(withRouter(ProfileContainer))
