import React from 'react'
import cx from 'classnames'
import './ListHeader.scss'

const ListHeader = ({ keyword }) => {
  return (
    <div className={cx('list-header')}>
      {/* <h3>{keyword}에 대한 검색 결과</h3> */}
      <span>{keyword}</span>에 대한 검색 결과
    </div>
  )
}

export default ListHeader
