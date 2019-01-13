import React from 'react'
import cx from 'classnames'
import './LoginTemplate.scss'

const LoginTemplate = ({ children }) => {
  return <div className={cx('login-template')}>{children}</div>
}

export default LoginTemplate
