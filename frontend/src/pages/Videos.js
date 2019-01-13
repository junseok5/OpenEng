import React from 'react'
import VideoTemplate from 'components/video/VideoTemplate'
import VideoContainer from 'containers/VideoContainer'

const Videos = ({ match }) => {
  const { id } = match.params

  return (
    <VideoTemplate>
      <VideoContainer id={id} />
    </VideoTemplate>
  )
}

export default Videos
