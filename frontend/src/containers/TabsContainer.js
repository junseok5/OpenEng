import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { BaseActions } from 'store/actionCreators'

import Tabs from 'components/common/Tabs'

class TabsContainer extends Component {
  _changeTab = () => {
    const { match } = this.props
    const { path } = match
    console.log(path)

    if (path === '/') {
      BaseActions.changeTab(0)
    } else if (path === '/user/:id') {
      BaseActions.changeTab(2)
    } else if (path === '/explore') {
      BaseActions.changeTab(1)
    } else if (path === '/sign_in' || path === '/sign_up') {
      BaseActions.changeTab(-1)
    }
    // BaseActions.changeTab(match.path)
  }

  componentDidMount() {
    this._changeTab()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeTab !== this.props.activeTab) {
      this._changeTab()
    }
  }

  render() {
    const { user, activeTab } = this.props
    return <Tabs userId={user ? user._id : false} activeTab={activeTab} />
  }
}

TabsContainer.propTypes = {
  user: PropTypes.any,
  activeTab: PropTypes.number,
}

export default connect(state => ({
  user: state.user.user,
  activeTab: state.base.activeTab,
}))(withRouter(TabsContainer))
