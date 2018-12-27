import React from 'react'
import cx from 'classnames'
import './VideoSubtitle.scss'

const VideoSubtitle = ({ contents, language }) => {
  return (
    <div className={cx('video-subtitle')}>
      <div className={cx('subtitle-contents')}>
        <div className={cx('front-subtitle')}>
          {language === 'ko-en' ? contents.ko : contents.en}
        </div>
        <div className={cx('back-subtitle')}>
          {language === 'ko-en' ? contents.en : contents.ko}
        </div>
      </div>
    </div>
  )
}

export default VideoSubtitle
