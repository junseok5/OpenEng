import React from 'react'
import PropTypes from 'prop-types'
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

VideoSubtitle.defaultProps = {
  contents: {
    // en: '',
    // ko: ''
  },
  language: 'ko-en'
}

VideoSubtitle.propTypes = {
  contents: PropTypes.object,
  language: PropTypes.string
}

export default VideoSubtitle
