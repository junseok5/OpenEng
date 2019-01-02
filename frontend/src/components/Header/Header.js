import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Header.scss'

import { FiHash, FiSearch, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = ({
  form,
  recentTags,
  view,
  _onChange,
  _onKeyPress,
  _onSearch,
  _onFocus,
  _onBlur,
  _onMouseOver,
  _onMouseOut,
  _onRemove,
  _onClear
}) => {
  const recentTagList = recentTags.map((tag, i) => {
    return (
      <li key={i}>
        <div className={cx('tag-wrap')} onClick={() => _onSearch(tag)}>
          <div className={cx('tag-icon')}>
            <FiHash color='white' />
          </div>

          <div className={cx('tag')}>{tag}</div>
        </div>
        <div className={cx('delete-icon')} onClick={() => _onRemove(i)}>
          <FiX />
        </div>
      </li>
    )
  })
  const searchView = view.focus || view.mouseOver

  return (
    <header>
      <div className={cx('header-main')}>
        <div className={cx('hm-logo _p-pm')}>
          <Link to='/'>심슨영어</Link>
        </div>
        <div className={cx('hm-search')}>
          <label className={cx('search-label')}>
            <FiHash fontSize='1.3rem' color='#747474' />
            <div className={cx('search-form')}>
              <input
                type='search'
                placeholder='검색'
                value={form}
                onChange={_onChange}
                onKeyPress={_onKeyPress}
                onFocus={_onFocus}
                onBlur={_onBlur}
              />
            </div>
          </label>
          {searchView && (
            <div
              className={cx('search-view')}
              onMouseOver={_onMouseOver}
              onMouseOut={_onMouseOut}
            >
              <div className={cx('recent-tags')}>
                <div className={cx('contents-header')}>
                  <div className={cx('contents-title')}>최근 검색어</div>
                  <div className={cx('contents-clear')} onClick={_onClear}>
                    <span>전체삭제</span>
                  </div>
                </div>
                <ul>{recentTagList}</ul>
              </div>
            </div>
          )}
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
}

Header.defaultProps = {
  form: '',
  recentTags: [],
  view: {}
}

Header.propTypes = {
  form: PropTypes.string,
  recentTags: PropTypes.array,
  view: PropTypes.object,
  _onChange: PropTypes.func,
  _onKeyPress: PropTypes.func,
  _onSearch: PropTypes.func,
  _onFocus: PropTypes.func,
  _onBlur: PropTypes.func,
  _onMouseOver: PropTypes.func,
  _onMouseOut: PropTypes.func,
  _onRemove: PropTypes.func,
  _onClear: PropTypes.func
}

export default Header
