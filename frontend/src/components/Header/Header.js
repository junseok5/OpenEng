import React from 'react'
import cx from 'classnames'
import './Header.scss'

const Header = () => (
  <header>
    <div className={cx('header-bg')}>
      <img src={require('static/images/bg_1.jpg')} draggable="false" />
    </div>
    <div className={cx('header-main')}>
      <div className={cx('hm-contents')}>
        <div className={cx('hm-logo')}>심슨영어</div>
      </div>
    </div>
  </header>
)

Header.propTypes = {}

export default Header
