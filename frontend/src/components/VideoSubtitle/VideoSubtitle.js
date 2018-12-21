import React from 'react'
import cx from 'classnames'
import './VideoSubtitle.scss'

const VideoSubtitle = () => {
  return (
    <div className={cx('video-subtitle')}>
      <div className={cx('subtitle-contents')}>
        <div className={cx('front-subtitle')}>아직 완성된 건 아니지만,</div>
        <div className={cx('back-subtitle')}>
          It's still a work in progress.
        </div>
      </div>
    </div>
  )
}

export default VideoSubtitle
