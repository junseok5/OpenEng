import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './ListHeader.scss'

const ListHeader = ({ tag, videosLength }) => {
  return (
    <div className={cx('list-header')}>
      <span>#{tag}</span>
      {videosLength === 0 && '에 대한 태그가 없습니다.'}
    </div>
  )
}

ListHeader.defaultProps = {
  tag: '',
  videosLength: 0
}

ListHeader.propTypes = {
  tag: PropTypes.string,
  videosLength: PropTypes.number
}

export default ListHeader
