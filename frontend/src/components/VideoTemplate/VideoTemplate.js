import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './VideoTemplate.scss'

import VideoHeaderContainer from 'containers/VideoHeaderContainer'

const VideoTemplate = ({ children }) => {
  return (
    <div className={cx('video-template')}>
      <VideoHeaderContainer />
      <main>{children}</main>
    </div>
  )
}

VideoTemplate.propTypes = {
  children: PropTypes.node
}

export default VideoTemplate
