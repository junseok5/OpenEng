import React from 'react'
import cx from 'classnames'
import './VideoTemplate.scss'

import VideoHeader from 'components/VideoHeader'

const VideoTemplate = ({ children }) => {
  return (
    <div className={cx('video-template')}>
      <VideoHeader />
      <main>{children}</main>
    </div>
  )
}

export default VideoTemplate
