import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListHeader from 'components/ListHeader'

class ListHeaderContainer extends Component {
  render () {
    if (this.props.loading) return null
    return (
      <ListHeader
        channel={this.props.channel}
        keyword={this.props.keyword}
        videosLength={this.props.videosLength}
      />
    )
  }
}

ListHeaderContainer.propTypes = {
  channel: PropTypes.string,
  keyword: PropTypes.string,
  videosLength: PropTypes.number,
  loading: PropTypes.bool
}

export default connect(state => ({
  videosLength: state.list.recent.videos.length,
  loading: state.pender.pending['list/GET_RECENT_VIDEOS']
}))(ListHeaderContainer)
