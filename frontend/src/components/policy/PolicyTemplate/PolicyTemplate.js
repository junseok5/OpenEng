import React from 'react'
import cx from 'classnames'
import './PolicyTemplate.scss'

import { Link } from 'react-router-dom'

const PolicyTemplate = ({ children, path }) => {
  return (
    <div className={cx('policy-template')}>
      <div className={cx('policy-header')}>
        <h2>
          <span>
            <Link to='/'>OpenEng</Link>
          </span>
        </h2>
        <div className={cx('header-nav')}>
          <div
            className={cx(
              'header-menu',
              path === '/policy/privacy' && 'active'
            )}
          >
            <Link to='/policy/privacy'>개인정보 처리 방침</Link>
          </div>
          <div
            className={cx('header-menu', path === '/policy/terms' && 'active')}
          >
            <Link to='/policy/terms'>이용약관</Link>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default PolicyTemplate
