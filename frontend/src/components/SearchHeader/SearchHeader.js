import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SearchHeader.scss'

import { FiArrowLeft, FiSearch } from 'react-icons/fi'

const SearchHeader = ({ form, _onChange, _onKeyPress, _onSearch, _goBack }) => {
  return (
    <div className={cx('search-header')}>
      <div className={cx('search-wrap')}>
        <div className={cx('back-icon icon')} onClick={_goBack}>
          <FiArrowLeft fontSize='1.5rem' color='#747474' />
        </div>
        <div className={cx('search-form')}>
          <input
            type='search'
            placeholder='해시태그 검색'
            value={form}
            onChange={_onChange}
            onKeyPress={_onKeyPress}
          />
        </div>
        <div className={cx('search-icon icon')} onClick={_onSearch}>
          <FiSearch fontSize='1.3rem' color='#747474' />
        </div>
      </div>
    </div>
  )
}

SearchHeader.defaultProps = {
  form: ''
}

SearchHeader.propTypes = {
  form: PropTypes.string,
  _onChange: PropTypes.func,
  _onKeyPress: PropTypes.func,
  _goBack: PropTypes.func
}

export default SearchHeader
