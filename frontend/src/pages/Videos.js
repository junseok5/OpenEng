import React from 'react'
import VideoTemplate from 'components/VideoTemplate'
import Video from 'components/Video'
import VideoControls from 'components/VideoControls'
import VideoSubtitle from 'components/VideoSubtitle'

const Videos = () => {
  return (
    <VideoTemplate>
      <Video />
      <VideoSubtitle />
      <VideoControls />
    </VideoTemplate>
  )
}

export default Videos
