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
        <p>영어회화 공부는 흥미가 있어야 합니다.</p>
        <p>흥미가 없는 영어 공부는 지속되지 못합니다. </p>
        <p>
          <span>심슨영어</span>에서 <b>영화 하이라이트 장면</b>으로 영어 공부를
          해보세요!{' '}
        </p>
        <p className={cx('intro-func')}>
          <div className={cx('intro-icon')}>
            <FiRepeat color="" />
            <div className={cx('intro-icon-text')}>구간반복</div>
          </div>
          <div className={cx('intro-icon')}>
            <FaRegClosedCaptioning />
            <div className={cx('intro-icon-text')}>한글/영어 자막</div>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Introduction
