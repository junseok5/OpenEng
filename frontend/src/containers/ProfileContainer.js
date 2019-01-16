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

  _getUserInfo = async () => {
    const { meta } = this.props

    if (meta) return
    try {
      await UserActions.getUserInfo(this.props.id)
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    UserActions.setMessage('')
    this._getUserInfo()
  }

  render() {
    return (
      <Profile
        meta={this.props.meta}
        message={this.props.message}
        _logout={this._logout}
      />
    )
  }
}

ProfileContainer.propTypes = {
  id: PropTypes.string,
  meta: PropTypes.any,
  message: PropTypes.string,
}

export default connect(state => ({
  meta: state.user.meta,
  message: state.user.message,
}))(withRouter(ProfileContainer))
