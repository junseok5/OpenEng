import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SideMenu.scss'

import { FiHome } from 'react-icons/fi'

import { Link } from 'react-router-dom'

const SideMenu = ({ tag, channel }) => {
  return (
    <div className={cx('side-menu _p-pm')}>
      <div className={cx('side-menu-contents')}>
        <ul>
          <Link to='/'>
            <li className={cx(!channel && 'active')}>
              <div className={cx('menu-icon')}>
                <FiHome />
              </div>
              <div className={cx('menu-text')}>홈</div>
            </li>
          </Link>
          <div className={cx('list-title')}>채널</div>
          <Link to='/channel/Team Coco'>
            <li className={cx(channel === 'Team Coco' && 'active')}>
              <div className={cx('menu-img')}>
                <img
                  src='https://yt3.ggpht.com/a-/AAuE7mCyzC1-No0_qQSIIj7adykHC3veXX3UxTJxrQ=s288-mo-c-c0xffffffff-rj-k-no'
                  className={cx('_cover-photo')}
                  draggable='false'
                />
              </div>
              <div className={cx('menu-text')}>Team Coco</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

SideMenu.defaultProps = {
  tag: ''
}

SideMenu.propTypes = {
  tag: PropTypes.string
}

export default SideMenu
