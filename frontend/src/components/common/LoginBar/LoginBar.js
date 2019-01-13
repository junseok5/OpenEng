import React from 'react'
import cx from 'classnames'
import './LoginBar.scss'

import { Link } from 'react-router-dom'

const LoginBar = () => {
  return (
    <div className={cx('login-bar')}>
      <div className={cx('logo')}>OpenEng</div>
      <div className={cx('buttons')}>
        <div className={cx('login-button')}>
          <Link to='/sign_in'>로그인</Link>
        </div>
        <div className={cx('register-button')}>
          <Link to='/sign_up'>회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginBar
