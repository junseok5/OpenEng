import React from 'react'
import cx from 'classnames'
import './VideoProgressbar.scss'

const VideoProgressbar = ({ currentTime, duration }) => {
  const barWidth = (currentTime / duration) * 100
  const style = {
    width: `${barWidth}%`
  }

  return (
    <div className={cx('video-progressbar')}>
      <div className={cx('currentbar')} style={style} />
    </div>
  )
}

export default VideoProgressbar
