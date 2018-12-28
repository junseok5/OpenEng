import React from 'react'
import cx from 'classnames'
import './VideoControls.scss'

import { FaStepBackward, FaPlay, FaPause, FaStepForward } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { MdSubtitles } from 'react-icons/md'

const VideoControls = ({
  _onStateControl,
  playing,
  language,
  sectionRepeat,
  changeLanguage,
  skipPrev,
  skipNext,
  changeSectionRepeat
}) => {
  return (
    <div className={cx('video-controls')}>
      <div className={cx('controls-view')}>
        <div
          className={cx('controls-icon controls-language')}
          title='자막 설정'
          onClick={changeLanguage}
        >
          <span>{language === 'ko-en' ? '한/영' : '영/한'}</span>
        </div>
        <div
          className={cx('controls-icon')}
          title='이전 자막'
          onClick={skipPrev}
        >
          <FaStepBackward />
        </div>
        <div className={cx('controls-icon')} onClick={_onStateControl}>
          {!playing ? <FaPlay /> : <FaPause />}
        </div>
        <div
          className={cx('controls-icon')}
          title='다음 자막'
          onClick={skipNext}
        >
          <FaStepForward />
        </div>
        <div
          className={cx('controls-icon', sectionRepeat && 'active')}
          title='구간반복'
          onClick={changeSectionRepeat}
        >
          <FiRepeat />
        </div>
      </div>
    </div>
  )
}

export default VideoControls
