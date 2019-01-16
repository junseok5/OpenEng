import React from 'react'
import cx from 'classnames'
import './SocialLogin.scss'

import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'

const SocialLogin = ({ _socialLogin }) => {
  return (
    <div className={cx('_social-login')}>
      <div
        className={cx('_facebook _social-button')}
        onClick={() => _socialLogin('facebook')}
      >
        <div className={cx('_social-icon')}>
          <FaFacebookSquare />
        </div>
        <div className={cx('_social-text')}>Facebook으로 로그인</div>
      </div>
      <div
        className={cx('_google _social-button')}
        onClick={() => _socialLogin('google')}
      >
        <div className={cx('_social-icon')}>
          <FaGoogle />
        </div>
        <div className={cx('_social-text')}>Google로 로그인</div>
      </div>
    </div>
  )
}

export default SocialLogin
