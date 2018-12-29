import React from 'react'
import cx from 'classnames'
import './SearchHeader.scss'

import { FiSearch } from 'react-icons/fi'

const SearchHeader = ({ form, _onChange, _onKeyPress }) => {
  return (
    <div className={cx('search-header')}>
      <div className={cx('search-wrap')}>
        <div className={cx('search-icon')}>
          <FiSearch fontSize='1.3rem' color='#747474' />
        </div>
        <div className={cx('search-form')}>
          <input
            type='search'
            placeholder='검색'
            value={form}
            onChange={_onChange}
            onKeyPress={_onKeyPress}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchHeader
