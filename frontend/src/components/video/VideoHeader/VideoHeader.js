import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './VideoHeader.scss'

import { FiArrowLeft } from 'react-icons/fi'

const VideoHeader = ({ _goBack }) => {
  return (
    <div className={cx('video-header')}>
      <span onClick={_goBack}>
        <FiArrowLeft fontSize='3rem' />
      </span>
    </div>
  )
}

VideoHeader.propTypes = {
  _goBack: PropTypes.func
}

export default VideoHeader
