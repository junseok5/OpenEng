import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './ListHeader.scss'

const ListHeader = ({ keyword, videosLength }) => {
  return (
    <div className={cx('list-header')}>
      <span>{keyword}</span>
      {videosLength === 0 && '에 대한 영상이 없습니다 ㅜ'}
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
