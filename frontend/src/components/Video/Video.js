import React from 'react'
import cx from 'classnames'
import './Video.scss'

const Video = () => {
  return (
    <div className={cx('video')}>
      <div className={cx('video-wrap')}>
        <iframe
          style={youtubeStyle}
          src="https://www.youtube.com/embed/A6imfUXiGTo?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  )
}

const youtubeStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
}

export default Video
