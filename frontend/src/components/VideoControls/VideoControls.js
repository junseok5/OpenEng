import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './VideoControls.scss'

import { FaStepBackward, FaPlay, FaPause, FaStepForward } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'

const VideoControls = ({
  playerReady,
  playing,
  language,
  sectionRepeat,
  _onStateControl,
  _changeLanguage,
  _skipPrev,
  _skipNext,
  _changeSectionRepeat
}) => {
  if (!playerReady) return null
  return (
    <div className={cx('video-controls')}>
      <div className={cx('controls-view')}>
        <div
          className={cx('controls-icon controls-language')}
          title='자막 설정'
          onClick={_changeLanguage}
        >
          <span>{language === 'ko-en' ? '한/영' : '영/한'}</span>
        </div>
        <div
          className={cx('controls-icon')}
          title='이전 자막'
          onClick={_skipPrev}
        >
          <FaStepBackward />
        </div>
        <div className={cx('controls-icon')} onClick={_onStateControl}>
          {!playing ? <FaPlay /> : <FaPause />}
        </div>
        <div
          className={cx('controls-icon')}
          title='다음 자막'
          onClick={_skipNext}
        >
          <FaStepForward />
        </div>
        <div
          className={cx('controls-icon', sectionRepeat && 'active')}
          title='구간반복'
          onClick={_changeSectionRepeat}
        >
          <FiRepeat />
        </div>
      </div>
    </div>
  )
}

VideoControls.defaultProps = {
  playerReady: false,
  playing: false,
  language: 'ko-en',
  sectionRepeat: false
}

VideoControls.propTypes = {
  playerReady: PropTypes.bool,
  playing: PropTypes.bool,
  language: PropTypes.string,
  sectionRepeat: PropTypes.bool,
  _onStateControl: PropTypes.func,
  _changeLanguage: PropTypes.func,
  _skipPrev: PropTypes.func,
  _skipNext: PropTypes.func,
  _changeSectionRepeat: PropTypes.func
}

export default VideoControls
