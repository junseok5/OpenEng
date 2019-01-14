import React from 'react'
import VideoTemplate from 'components/video/VideoTemplate'
import VideoContainer from 'containers/VideoContainer'
import Base from 'containers/Base'

const Videos = ({ match }) => {
  const { id } = match.params

  return (
    <VideoTemplate>
      <Base />
      <VideoContainer id={id} />
    </VideoTemplate>
  )
}

export default Videos
