import React from 'react'
import cx from 'classnames'
import './Introduction.scss'

import { FiRepeat } from 'react-icons/fi'
import { FaRegClosedCaptioning } from 'react-icons/fa'

const Introduction = () => {
  return (
    <div className={cx('introduction')}>
      <div className={cx('introduction-main')}>
        <h2>
          <span>무료</span> 영어회화 공부 앱
        </h2>
        <h3>하루에 한 문장!</h3>
        <p>모든 생활 영어가 영화 속에 녹아있습니다.</p>
        <p>
          <b>영화클립</b> 장면으로 영어 공부를 해보세요!{' '}
        </p>
        <div className={cx('intro-func')}>
          <div className={cx('intro-icon')}>
            <FiRepeat color='' />
            <div className={cx('intro-icon-text')}>구간반복</div>
          </div>
          <div className={cx('intro-icon')}>
            <FaRegClosedCaptioning />
            <div className={cx('intro-icon-text')}>한글/영어 자막</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
