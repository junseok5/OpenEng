import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './RegisterForm.scss'

import SocialLoginContainer from 'containers/SocialLoginContainer'

import { Link } from 'react-router-dom'

const RegisterForm = ({
  registerForm,
  message,
  _onChangeForm,
  _onSubmit,
  _onKeyPress
}) => {
  return (
    <div className={cx('register-form')}>
      <div className={cx('register-form-header')}>
        <div className={cx('_header-name')}>
          <Link to='/'>
            <span>OpenEng</span>
          </Link>
        </div>
      </div>

      <div className={cx('_auth-form-contents')}>
        <h3>회원가입</h3>

        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input
              type='email'
              placeholder='이메일 입력'
              name='email'
              value={registerForm.email}
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
              value={registerForm.password}
              onChange={_onChangeForm}
            />
          </div>
        </div>

        <div className={cx('_form-wrap')}>
          <div className={cx('_form-input')}>
            <input
              type='text'
              placeholder='이름 입력'
              name='displayName'
              value={registerForm.displayName}
              onChange={_onChangeForm}
              onKeyPress={_onKeyPress}
            />
          </div>
        </div>

        <div className={cx('_form-message')}>{message}</div>

        <div className={cx('_auth-button')} onClick={_onSubmit}>
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

        <SocialLoginContainer />
      </div>
    </div>
  )
}

RegisterForm.defaultPropt = {
  registerForm: {
    email: '',
    password: '',
    displayName: ''
  },
  message: ''
}

RegisterForm.propTypes = {
  registerForm: PropTypes.object,
  message: PropTypes.string,
  _onChangeForm: PropTypes.func,
  _onSubmit: PropTypes.func,
  _onKeyPress: PropTypes.func
}

export default RegisterForm
