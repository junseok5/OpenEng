import React from 'react'
import cx from 'classnames'
import './Loading.scss'

import ClipLoader from 'react-spinners/ClipLoader'

const Loading = () => {
  return (
    <div className={cx('loading')}>
      <ClipLoader color={'#ff2f6e'} />
    </div>
  )
}

export default Loading
