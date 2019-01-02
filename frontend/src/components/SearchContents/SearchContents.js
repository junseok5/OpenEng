import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SearchContents.scss'

import { FiHash, FiX } from 'react-icons/fi'

const SearchContents = ({ recentTags, _onRemove, _onClear, _onSearch }) => {
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
  return (
    <div className={cx('search-contents')}>
      <div className={cx('recent-tags')}>
        <div className={cx('contents-header')}>
          <div className={cx('contents-title')}>최근 검색어</div>
          <div className={cx('contents-clear')} onClick={_onClear}>
            전체삭제
          </div>
        </div>
        <ul>{recentTagList}</ul>
      </div>
    </div>
  )
}

SearchContents.defaultPrpos = {
  recentTags: []
}

SearchContents.propTypes = {
  recentTags: PropTypes.array,
  _onRemove: PropTypes.func,
  _onClear: PropTypes.func,
  _onSearch: PropTypes.func
}

export default SearchContents
