import React from 'react'
import cx from 'classnames'
import './Video.scss'

import Youtube from 'react-youtube'

const Video = ({ video, ready, _onReady, _onStateChange }) => {
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
          videoId={video.youtubeId}
          opts={opts}
          onReady={_onReady}
          onStateChange={_onStateChange}
        />
      </div>
    </div>
  )
}

export default Video
