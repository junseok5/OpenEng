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
          <span>무료</span> 영어 회화공부
        </h2>
        <h3>유튜브로 영어 공부하자!</h3>
        <p>OpenEng에서 쉐도잉 영어 공부를 해보세요.</p>
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
