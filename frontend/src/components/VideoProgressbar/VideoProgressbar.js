import React from 'react'
import cx from 'classnames'
import './VideoProgressbar.scss'

const VideoProgressbar = () => {
  return (
    <div className={cx('video-progressbar')}>
      <div className={cx('currentbar')} />
    </div>
  )
}

export default VideoProgressbar
