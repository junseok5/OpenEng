import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './LoadingModal.scss'

import ClipLoader from 'react-spinners/ClipLoader'

const LoadingModal = ({ loadingModal }) => {
  if (!loadingModal) return null
  return (
    <div className={cx('loading-modal')}>
      <ClipLoader color={'#fff'} />
    </div>
  )
}

LoadingModal.defaultProps = {
  loadingModal: false
}

LoadingModal.propTypes = {
  loadingModal: PropTypes.bool
}

export default LoadingModal
