import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './LoginForm.scss'

import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'

const LoginForm = ({ loginForm, _onChangeForm, _onSubmit }) => {
  return (
    <div className={cx('login-form')}>
      <div className={cx('login-form-header')}>
        <div className={cx('_header-name')}>
          <Link to='/'>OpenEng</Link>
        </div>
      </div>

      <div className={cx('_auth-form-contents')}>
        <h3>로그인</h3>
        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input
              type='email'
              placeholder='이메일 입력'
              name='email'
              value={loginForm.email}
              onChange={_onChangeForm}
            />
          </div>
        </div>

        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input
              type='password'
              placeholder='패스워드 입력'
              name='password'
              value={loginForm.password}
              onChange={_onChangeForm}
            />
          </div>
        </div>

        <div className={cx('_auth-button')} onClick={_onSubmit}>
          <span>로그인</span>
        </div>

        <div className={cx('_bottom-button')}>
          <div className={cx('_bottom-text')}>계정이 없으신가요?</div>
          <div className={cx('_bottom-auth-button')}>
            <span>
              <Link to='/sign_up'>회원가입</Link>
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

LoginForm.defaultProps = {
  loginForm: {
    email: '',
    password: ''
  }
}

LoginForm.propTypes = {
  loginForm: PropTypes.object
}

export default LoginForm