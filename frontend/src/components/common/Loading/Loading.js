import React from 'react'
import cx from 'classnames'
import './Loading.scss'

import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className={cx('loading')}>
      <ReactLoading type='spin' color='#ff2f6e' />
    </div>
  )
}

export default Loading
