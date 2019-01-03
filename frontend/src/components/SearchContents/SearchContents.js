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
      <div className={cx('recommand-tags')}>
        <div className={cx('contents-header')}>
          <div className={cx('contents-title')}>추천 태그</div>
        </div>
        <ul>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('일상생활', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>일상생활</div>
            </div>
          </li>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('공항·비행기', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>공항·비행기</div>
            </div>
          </li>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('숙박', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>숙박</div>
            </div>
          </li>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('식당', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>식당</div>
            </div>
          </li>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('쇼핑', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>쇼핑</div>
            </div>
          </li>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('전화', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>전화</div>
            </div>
          </li>
          <li>
            <div
              className={cx('tag-wrap')}
              onClick={() => _onSearch('교통', true)}
            >
              <div className={cx('tag-icon')}>
                <FiHash color='white' />
              </div>

              <div className={cx('tag')}>교통</div>
            </div>
          </li>
        </ul>
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
