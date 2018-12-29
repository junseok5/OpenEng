import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListHeader from 'components/ListHeader'

class ListHeaderContainer extends Component {
  render () {
    return (
      <ListHeader keyword={this.props.keyword} videos={this.props.videos} />
    )
  }
}

export default connect(state => ({
  videos: state.list.recent.videos
}))(ListHeaderContainer)
