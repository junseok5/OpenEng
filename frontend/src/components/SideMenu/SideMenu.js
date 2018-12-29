import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SideMenu.scss'

import { FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SideMenu = ({ category }) => {
  return (
    <div className={cx('side-menu _p-pm')}>
      <div className={cx('side-menu-contents')}>
        <ul>
          <Link to='/'>
            <li className={cx(!category && 'active')}>
              <div className={cx('menu-icon')}>
                <FiHome fontSize='1.5rem' />
              </div>
              <div className={cx('menu-text')}>홈</div>
            </li>
          </Link>
          <Link to='/category/영화'>
            <li className={cx(category === '영화' && 'active')}>
              <div className={cx('menu-img')}>
                <img
                  src={require('static/images/cover_1.png')}
                  className={cx('_cover-photo')}
                  draggable='false'
                />
              </div>
              <div className={cx('menu-text')}>영화</div>
            </li>
          </Link>
          <li>준비중..</li>
        </ul>
      </div>
    </div>
  )
}

SideMenu.defaultProps = {
  category: ''
}

SideMenu.propTypes = {
  category: PropTypes.string
}

export default SideMenu
