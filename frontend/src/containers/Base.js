import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthActions, UserActions } from 'store/actionCreators'

import storage from 'lib/storage'
import LoadingModalContainer from 'containers/LoadingModalContainer'
import TabsContainer from 'containers/TabsContainer'

class Base extends Component {
  _checkLogin = async () => {
    const logged = storage.get('login')
    const { user } = this.props

    if (logged && !user) {
      try {
        await AuthActions.checkLogin()

        const { result } = this.props
        UserActions.setUser(result)
      } catch (e) {
        console.log(e)
      }
    }
  }

  componentDidMount() {
    this._checkLogin()
  }

  render() {
    return (
      <Fragment>
        <LoadingModalContainer />
        <TabsContainer />
      </Fragment>
    )
  }
}

Base.propTypes = {
  user: PropTypes.any,
  result: PropTypes.any,
}

export default connect(state => ({
  user: state.user.user,
  result: state.auth.result,
}))(Base)
