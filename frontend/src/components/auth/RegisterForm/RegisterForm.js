import React from 'react'
import cx from 'classnames'
import './RegisterForm.scss'

import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'

const RegisterForm = () => {
  return (
    <div className={cx('register-form')}>
      <div className={cx('register-form-header')}>
        <div className={cx('_header-name')}>OpenEng</div>
      </div>

      <div className={cx('_auth-form-contents')}>
        <h3>회원가입</h3>

        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input type='email' placeholder='이메일 입력' />
          </div>
        </div>

        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input type='password' placeholder='패스워드 입력' />
          </div>
        </div>

        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input type='password' placeholder='이름 입력' />
          </div>
        </div>

        <div className={cx('_auth-button')}>
          <span>가입하기</span>
        </div>

        <div className={cx('_bottom-button')}>
          <div className={cx('_bottom-text')}>이미 가입하셨나요?</div>
          <div className={cx('_bottom-auth-button')}>
            <span>
              <Link to='/sign_in'>로그인</Link>
            </span>
          </div>
        </div>

        <div className={cx('_border-line')}>
          <div className={cx('_line')} />
          <div className={cx('_text')}>OR</div>
          <div className={cx('_line')} />
        </div>

        <div className={cx('_social-login')}>
          <div className={cx('_facebook _social-button')}>
            <div className={cx('_social-icon')}>
              <FaFacebookSquare />
            </div>
            <div className={cx('_social-text')}>Facebook으로 로그인</div>
          </div>
          <div className={cx('_google _social-button')}>
            <div className={cx('_social-icon')}>
              <FaGoogle />
            </div>
            <div className={cx('_social-text')}>Google로 로그인</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
