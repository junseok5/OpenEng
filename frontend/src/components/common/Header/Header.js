import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Header.scss'

import { FiSearch, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = ({
  form,
  recentKeywords,
  view,
  user,
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
  const recentKeywordList = recentKeywords.map((keyword, i) => {
    return (
      <li key={i}>
        <div className={cx('keyword-wrap')} onClick={() => _onSearch(keyword)}>
          <div className={cx('keyword-icon')}>
            <FiSearch color='white' />
          </div>

          <div className={cx('keyword')}>{keyword}</div>
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
          <Link to='/'>OpenEng</Link>
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
              <div className={cx('recent-keywords')}>
                <div className={cx('contents-header')}>
                  <div className={cx('contents-title')}>최근 검색어</div>
                  <div className={cx('contents-clear')} onClick={_onClear}>
                    <span>전체삭제</span>
                  </div>
                </div>
                <ul>{recentKeywordList}</ul>
              </div>
            </div>
          )}
        </div>
        <div className={cx('header-login')}>
          {!user ? (
            <div className={cx('login-button')}>
              <Link to='/sign_in'>로그인</Link>
            </div>
          ) : (
            <div className={cx('header-user')}>
              <div className={cx('user-thumbnail')}>
                <img
                  src={user.thumbnail}
                  className={cx('_cover-photo')}
                  alt={user.displayName}
                  draggable='false'
                />
              </div>
              {/* <div className={cx('user-name')}>{user.displayName}</div> */}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  form: '',
  recentKeywords: [],
  view: {},
  user: null
}

Header.propTypes = {
  form: PropTypes.string,
  recentKeywords: PropTypes.array,
  view: PropTypes.object,
  user: PropTypes.any,
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
