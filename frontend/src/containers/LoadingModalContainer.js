import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoadingModal from 'components/modal/LoadingModal'

class LoadingModalContainer extends Component {
  render () {
    return <LoadingModal loadingModal={this.props.loadingModal} />
  }
}

LoadingModalContainer.propTypes = {
  loadingModal: PropTypes.bool
}

export default connect(state => ({
  loadingModal: state.base.modal.loading
}))(LoadingModalContainer)
