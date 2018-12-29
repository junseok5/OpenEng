import React from 'react'
import cx from 'classnames'
import './ListHeader.scss'

const ListHeader = ({ keyword, videos }) => {
  console.log(videos)
  return (
    <div className={cx('list-header')}>
      <span>{keyword}</span>에 대한 검색 결과
      {videos.length === 0 && '가 없습니다.'}
    </div>
  )
}

export default ListHeader
