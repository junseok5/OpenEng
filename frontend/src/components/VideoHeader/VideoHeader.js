import React from 'react'
import cx from 'classnames'
import './VideoHeader.scss'

import { FiArrowLeft } from 'react-icons/fi'

const VideoHeader = () => {
  return (
    <div className={cx('video-header')}>
      <span>
        <FiArrowLeft fontSize="3rem" />
      </span>
    </div>
  )
}

export default VideoHeader
