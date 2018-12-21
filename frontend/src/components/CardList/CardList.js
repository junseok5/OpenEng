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
          src="http://img.youtube.com/vi/k94emBOFABM/mqdefault.jpg"
          draggable="false"
        />
      </div>
      <div className={cx('card-contents')}>
        <div className={cx('card-title')}>
          <span>인터스텔라 명장면 STAY</span>
        </div>
        <div className={cx('card-channel-name')}>
          <span>인터스텔라</span>
        </div>
      </div>
    </div>
  )
}

export default CardList
