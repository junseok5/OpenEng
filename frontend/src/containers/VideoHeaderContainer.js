import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import VideoHeader from 'components/VideoHeader'

class VideoHeaderContainer extends Component {
  _goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return <VideoHeader _goBack={this._goBack} />
  }
}

export default withRouter(VideoHeaderContainer)
