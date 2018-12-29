import React from 'react'
import cx from 'classnames'
import './SearchContents.scss'

import { Link } from 'react-router-dom'
import { FiSearch, FiX } from 'react-icons/fi'

const SearchContents = ({ recentKeywords, _onRemove, _onClear, _onSearch }) => {
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
  return (
    <div className={cx('search-contents')}>
      <div className={cx('recent-keywords')}>
        <div className={cx('contents-header')}>
          <div className={cx('contents-title')}>최근 검색어</div>
          <div className={cx('contents-clear')} onClick={_onClear}>
            전체삭제
          </div>
        </div>
        <ul>{recentKeywordList}</ul>
      </div>
    </div>
  )
}

export default SearchContents
