import React from 'react'
import cx from 'classnames'
import './VideoHeader.scss'

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const VideoHeader = ({ goBack }) => {
  return (
    <div className={cx('video-header')}>
      {/* <Link to='/'> */}
      <span onClick={goBack}>
        <FiArrowLeft fontSize='3rem' />
      </span>
      {/* </Link> */}
    </div>
  )
}

export default VideoHeader
