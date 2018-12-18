import React from 'react'
import cx from 'classnames'
import './MainTemplate.scss'

const MainTemplate = ({ children }) => {
  return <div className={cx('main-template')}>{children}</div>
}

export default MainTemplate
