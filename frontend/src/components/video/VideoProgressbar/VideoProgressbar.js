import React from 'react'
import PropTypes from 'prop-types'
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

VideoProgressbar.defaultProps = {
  currentTime: 0,
  duration: 0
}

VideoProgressbar.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number
}

export default VideoProgressbar
