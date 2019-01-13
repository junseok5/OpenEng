import React from 'react'
import cx from 'classnames'
import './LoginForm.scss'

import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'

const LoginForm = () => {
  return (
    <div className={cx('login-form')}>
      <div className={cx('login-form-header')}>
        <div className={cx('header-name')}>OpenEng</div>
      </div>

      <div className={cx('login-form-contents')}>
        <div className={cx('form-wrap')}>
          <div className={cx('form-title')}>이메일</div>
          <div className={cx('form-input')}>
            <input type='email' placeholder='이메일 입력' />
          </div>
        </div>

        <div className={cx('form-wrap')}>
          <div className={cx('form-title')}>비밀번호</div>
          <div className={cx('form-input')}>
            <input type='password' placeholder='패스워드 입력' />
          </div>
        </div>

        <div className={cx('login-button')}>
          <span>로그인</span>
        </div>

        <div className={cx('bottom-button')}>
          <div className={cx('bottom-text')}>계정이 없으신가요?</div>
          <div className={cx('register-button')}>
            <span>회원가입</span>
          </div>
        </div>

        <div className={cx('border-line')}>
          <div className={cx('line')} />
          <div className={cx('text')}>OR</div>
          <div className={cx('line')} />
        </div>

        <div className={cx('social-login')}>
          <div className={cx('facebook social-button')}>
            <div className={cx('social-icon')}>
              <FaFacebookSquare />
            </div>
            <div className={cx('social-text')}>Facebook 로그인</div>
          </div>
          <div className={cx('google social-button')}>
            <div className={cx('social-icon')}>
              <FaGoogle />
            </div>
            <div className={cx('social-text')}>Google 로그인</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
