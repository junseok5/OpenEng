import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './ListHeader.scss'

const ListHeader = ({ keyword, videosLength }) => {
  return (
    <div className={cx('list-header')}>
      <span>{keyword}</span>에 대한 검색 결과
      {videosLength === 0 && '가 없습니다.'}
    </div>
  )
}

ListHeader.defaultProps = {
  keyword: '',
  videosLength: 0
}

ListHeader.propTypes = {
  keyword: PropTypes.string,
  videosLength: PropTypes.number
}

export default ListHeader
