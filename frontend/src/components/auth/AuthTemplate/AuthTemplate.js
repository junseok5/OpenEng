import React from 'react'
import cx from 'classnames'
import './AuthTemplate.scss'

const AuthTemplate = ({ children }) => {
  return <div className={cx('auth-template')}>{children}</div>
}

export default AuthTemplate
