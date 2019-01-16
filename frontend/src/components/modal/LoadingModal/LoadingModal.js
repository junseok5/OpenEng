import React from 'react'
import cx from 'classnames'
import './LoadingModal.scss'

import ClipLoader from 'react-spinners/ClipLoader'

const LoadingModal = ({ loadingModal }) => {
  console.log(loadingModal)
  if (!loadingModal) return null
  return (
    <div className={cx('loading-modal')}>
      <ClipLoader color={'#fff'} />
    </div>
  )
}

export default LoadingModal
