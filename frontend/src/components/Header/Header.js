import React from 'react'
import cx from 'classnames'
import './Header.scss'

import { FiSearch } from 'react-icons/fi'

const Header = () => (
  <header>
    <div className={cx('header-main')}>
      <div className={cx('hm-logo')}>심슨영어</div>
      <div className={cx('hm-search')}>
        <label className={cx('search-label')}>
          {/* <div className={cx('search-icon _p-ps')}> */}
          <FiSearch fontSize="1.3rem" color="#747474" />
          {/* </div> */}
          <div className={cx('search-form')}>
            <input type="search" placeholder="검색" />
          </div>
        </label>
      </div>
      <div className={cx('hm-search-mobile')}>
        <FiSearch fontSize="1.4rem" />
      </div>
    </div>
  </header>
)

Header.propTypes = {}

export default Header
