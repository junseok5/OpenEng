import React from 'react'
import cx from 'classnames'
import './VideoControls.scss'

import { FaStepBackward, FaPlay, FaStepForward } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { MdSubtitles } from 'react-icons/md'

const VideoControls = () => {
  return (
    <div className={cx('video-controls')}>
      <div className={cx('controls-view')}>
        <div
          className={cx('controls-icon controls-language')}
          title="자막 설정">
          한/영
        </div>
        <div className={cx('controls-icon')} title="이전 자막">
          <FaStepBackward />
        </div>
        <div className={cx('controls-icon')}>
          <FaPlay />
        </div>
        <div className={cx('controls-icon')} title="다음 자막">
          <FaStepForward />
        </div>
        <div className={cx('controls-icon')} title="구간반복">
          <FiRepeat />
        </div>
      </div>
    </div>
  )
}

export default VideoControls
