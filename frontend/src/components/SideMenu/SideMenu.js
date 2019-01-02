import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SideMenu.scss'

import { FiHome, FiBookOpen, FiShoppingBag, FiPhone } from 'react-icons/fi'
import { TiPlaneOutline } from 'react-icons/ti'
import { IoIosBed } from 'react-icons/io'
import { MdStoreMallDirectory, MdDirectionsCar } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SideMenu = ({ tag }) => {
  return (
    <div className={cx('side-menu _p-pm')}>
      <div className={cx('side-menu-contents')}>
        <ul>
          <Link to='/'>
            <li className={cx(!tag && 'active')}>
              <div className={cx('menu-icon')}>
                <FiHome />
              </div>
              <div className={cx('menu-text')}>하루 한 문장</div>
            </li>
          </Link>
          <div className={cx('list-title')}>태그</div>
          <Link to='/tag/일상생활'>
            <li className={cx(tag === '일상생활' && 'active')}>
              <div className={cx('menu-icon')}>
                <FiBookOpen />
              </div>
              <div className={cx('menu-text')}>일상생활</div>
            </li>
          </Link>
          <Link to='/tag/공항·비행기'>
            <li className={cx(tag === '공항·비행기' && 'active')}>
              <div className={cx('menu-icon')}>
                <TiPlaneOutline />
              </div>
              <div className={cx('menu-text')}>공항·비행기</div>
            </li>
          </Link>
          <Link to='/tag/숙박'>
            <li className={cx(tag === '숙박' && 'active')}>
              <div className={cx('menu-icon')}>
                <IoIosBed />
              </div>
              <div className={cx('menu-text')}>숙박</div>
            </li>
          </Link>
          <Link to='/tag/식당'>
            <li className={cx(tag === '식당' && 'active')}>
              <div className={cx('menu-icon')}>
                <MdStoreMallDirectory />
              </div>
              <div className={cx('menu-text')}>식당</div>
            </li>
          </Link>
          <Link to='/tag/쇼핑'>
            <li className={cx(tag === '쇼핑' && 'active')}>
              <div className={cx('menu-icon')}>
                <FiShoppingBag />
              </div>
              <div className={cx('menu-text')}>쇼핑</div>
            </li>
          </Link>
          <Link to='/tag/전화'>
            <li className={cx(tag === '전화' && 'active')}>
              <div className={cx('menu-icon')}>
                <FiPhone />
              </div>
              <div className={cx('menu-text')}>전화</div>
            </li>
          </Link>
          <Link to='/tag/교통'>
            <li className={cx(tag === '교통' && 'active')}>
              <div className={cx('menu-icon')}>
                <MdDirectionsCar />
              </div>
              <div className={cx('menu-text')}>교통</div>
            </li>
          </Link>
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
