import React from 'react'
import VideoTemplate from 'components/VideoTemplate'
import Video from 'components/Video'
import VideoProgressbar from 'components/VideoProgressbar'
import VideoSubtitle from 'components/VideoSubtitle'
import VideoControls from 'components/VideoControls'

const Videos = () => {
  return (
    <VideoTemplate>
      <Video />
      <VideoProgressbar />
      <VideoSubtitle />
      <VideoControls />
    </VideoTemplate>
  )
}

export default Videos
