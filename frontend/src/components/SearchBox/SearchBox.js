import React from 'react'
import cx from 'classnames'
import './SearchBox.scss'

import { FiSearch } from 'react-icons/fi'

const SearchBox = () => {
  return (
    <div className={cx('search-box')}>
      <div className={cx('search-form')}>
        <div className={cx('search-icon')}>
          <FiSearch fontSize="1.3rem" color="#747474" />
        </div>
        <input type="search" placeholder="검색" />
      </div>
    </div>
  )
}

export default SearchBox
