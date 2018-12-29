import React from 'react'
import cx from 'classnames'
import './SearchContents.scss'

const SearchContents = () => {
  return (
    <div className={cx('search-contents')}>
      <div className={cx('recent-keyword')}>
        <p>최근 검색어 (0)</p>
        <ul>{/* 최근 키워드 */}</ul>
      </div>
    </div>
  )
}

export default SearchContents
