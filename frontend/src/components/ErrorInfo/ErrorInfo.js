import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './ErrorInfo.scss'

import { FaRegMeh } from 'react-icons/fa'

const ErrorInfo = ({ message }) => {
  return (
    <div className={cx('error-info')}>
      <div className={cx('error-icon')}>
        <FaRegMeh />
      </div>
      <div className={cx('error-text')}>{message}</div>
    </div>
  )
}

ErrorInfo.defaultProps = {
  message: ''
}

ErrorInfo.propTypes = {
  message: PropTypes.string
}

export default ErrorInfo
