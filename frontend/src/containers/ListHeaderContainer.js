import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListHeader from 'components/ListHeader'

class ListHeaderContainer extends Component {
  render () {
    return (
      <ListHeader
        keyword={this.props.keyword}
        videosLength={this.props.videosLength}
      />
    )
  }
}

ListHeaderContainer.propTypes = {
  keyword: PropTypes.string,
  videosLength: PropTypes.number
}

export default connect(state => ({
  videosLength: state.list.recent.videos.length
}))(ListHeaderContainer)
