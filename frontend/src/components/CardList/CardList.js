import React from 'react'
import cx from 'classnames'
import './CardList.scss'

const CardList = ({ children }) => {
  return (
    <div className={cx('card-list')}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

const Card = () => {
  return (
    <div className={cx('card')}>
      <div className={cx('card-thumbnail')}>
        <img
          src="http://img.youtube.com/vi/5apdLc2lHHY/mqdefault.jpg"
          draggable="false"
        />
        <div className={cx('video-overaytime')}>2:48</div>
      </div>
      <div className={cx('card-contents')}>
        <div className={cx('card-title')}>
          <span>인터스텔라 - 도킹씬</span>
        </div>
        <div className={cx('card-expression')}>
          <div className={cx('card-sentance')}>
            It's still work in progress.
          </div>
          <div className={cx('card-sentance-meaning')}>
            아직 완성된 건 아니지만..
          </div>
        </div>
        {/* <div className={cx('card-channel-name')}>
          <span>인터스텔라</span>
        </div> */}
      </div>
    </div>
  )
}

export default CardList
