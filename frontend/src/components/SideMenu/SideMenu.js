import React from 'react'
import cx from 'classnames'
import './SideMenu.scss'

import { FiHome } from 'react-icons/fi'

const SideMenu = () => {
  return (
    <div className={cx('side-menu _p-pm')}>
      <div className={cx('side-menu-contents')}>
        <ul>
          <li className={cx('active')}>
            <div className={cx('menu-icon')}>
              <FiHome fontSize="1.5rem" />
            </div>
            <div className={cx('menu-text')}>홈</div>
          </li>
          <li>
            <div className={cx('menu-img')}>
              <img
                src={require('static/images/cover_1.png')}
                className={cx('_cover-photo')}
                draggable="false"
              />
            </div>
            <div className={cx('menu-text')}>영화 하이라이트</div>
          </li>
          <li>준비중..</li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
