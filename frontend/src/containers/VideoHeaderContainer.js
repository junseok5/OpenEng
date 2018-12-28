import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import VideoHeader from 'components/VideoHeader'

class VideoHeaderContainer extends Component {
  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return <VideoHeader goBack={this.goBack} />
  }
}

export default withRouter(VideoHeaderContainer)
