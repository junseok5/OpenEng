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
          함께 만들어가는 <span>영어</span> 공부 서비스
        </h2>
        <h3>유튜브를 통해 영어공부를!</h3>
        <p>OpenEng는 누구나 무료로 영어 공부를 할 수 있는 환경을 조성합니다.</p>
        {/* <p>

        </p> */}
        <div className={cx('intro-func')}>
          <div className={cx('intro-icon')}>
            <FiRepeat color='' />
            <div className={cx('intro-icon-text')}>구간반복</div>
          </div>
          <div className={cx('intro-icon')}>
            <FaRegClosedCaptioning />
            <div className={cx('intro-icon-text')}>자막</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
