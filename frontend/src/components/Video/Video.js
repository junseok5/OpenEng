import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Video.scss'

import Youtube from 'react-youtube'

const Video = ({ youtubeId, _onReady, _onStateChange }) => {
  const opts = {
    playerVars: {
      cc_load_policy: 0,
      disablekb: 1,
      controls: 0,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0
    }
  }

  return (
    <div className={cx('video')}>
      <div className={cx('video-wrap')}>
        <Youtube
          videoId={youtubeId}
          opts={opts}
          onReady={_onReady}
          onStateChange={_onStateChange}
        />
      </div>
    </div>
  )
}

Video.defaultProps = {
  youtubeId: ''
}

Video.propTypes = {
  video: PropTypes.object,
  _onReady: PropTypes.func,
  _onStateChange: PropTypes.func
}

export default Video
