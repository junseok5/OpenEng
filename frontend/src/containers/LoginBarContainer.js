import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginBar from 'components/common/LoginBar'

class LoginBarContainer extends Component {
  render () {
    return <LoginBar user={this.props.user} />
  }
}

LoginBarContainer.propTypes = {
  user: PropTypes.any
}

export default connect(state => ({
  user: state.user.user
}))(LoginBarContainer)
