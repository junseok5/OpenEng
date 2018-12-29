import React from 'react'
import cx from 'classnames'
import './Header.scss'

import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = ({ form, _onChange, _onKeyPress }) => (
  <header>
    <div className={cx('header-main')}>
      <div className={cx('hm-logo _p-pm')}>
        <Link to='/'>심슨영어</Link>
      </div>
      <div className={cx('hm-search')}>
        <label className={cx('search-label')}>
          <FiSearch fontSize='1.3rem' color='#747474' />
          <div className={cx('search-form')}>
            <input
              type='search'
              placeholder='검색'
              value={form}
              onChange={_onChange}
              onKeyPress={_onKeyPress}
            />
          </div>
        </label>
      </div>
      <div className={cx('hm-search-mobile')}>
        <Link to='/search'>
          <span>
            <FiSearch fontSize='1.4rem' />
          </span>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {}

export default Header
