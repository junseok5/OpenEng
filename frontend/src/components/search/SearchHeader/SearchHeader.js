import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SearchHeader.scss'

import { FiArrowLeft, FiSearch } from 'react-icons/fi'

const SearchHeader = ({
  form,
  path,
  _onChange,
  _onKeyPress,
  _onSearch,
  _goBack,
  _moveToSearchPage
}) => {
  return (
    <div className={cx('search-header')}>
      <div className={cx('search-wrap')}>
        <div className={cx('back-icon icon')} onClick={_goBack}>
          {path === '/search' ? <FiArrowLeft /> : <FiSearch />}
        </div>
        <div className={cx('search-form')}>
          {path === '/explore' ? (
            <input
              type='search'
              placeholder='검색'
              value={form}
              onChange={_onChange}
              onKeyPress={_onKeyPress}
              onClick={_moveToSearchPage}
            />
          ) : (
            <input
              type='search'
              placeholder='검색'
              value={form}
              onChange={_onChange}
              onKeyPress={_onKeyPress}
              onClick={_moveToSearchPage}
              autoFocus
            />
          )}
        </div>
        <div className={cx('search-icon icon')} onClick={_onSearch}>
          {path === '/search' && <FiSearch />}
        </div>
      </div>
    </div>
  )
}

SearchHeader.defaultProps = {
  path: '/',
  form: ''
}

SearchHeader.propTypes = {
  path: PropTypes.string,
  form: PropTypes.string,
  _onChange: PropTypes.func,
  _onKeyPress: PropTypes.func,
  _goBack: PropTypes.func,
  _moveToSearchPage: PropTypes.func
}

export default SearchHeader
