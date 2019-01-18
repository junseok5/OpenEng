import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Profile.scss'

import ErrorInfo from 'components/common/ErrorInfo'
import { Link } from 'react-router-dom'
import { FaFacebookMessenger } from 'react-icons/fa'

const Profile = ({ meta, message, _logout }) => {
  if (message) {
    return <ErrorInfo message={message} />
  }
  if (!meta) return null

  return (
    <div className={cx('profile')}>
      <div className={cx('profile-wrap')}>
        <div className={cx('profile-header')}>
          <h3>프로필</h3>
          <div className={cx('user-wrap')}>
            <div className={cx('user-info')}>
              <div className={cx('user-name')}>{meta.displayName}</div>
              <div className={cx('user-email')}>{meta.email}</div>
            </div>
            <div className={cx('logout')} onClick={_logout}>
              로그아웃
            </div>
          </div>
        </div>

        <div className={cx('profile-contents')}>
          <div className={cx('content')}>
            <a href='https://m.me/290530095155620' target='_blank'>
              <div className={cx('content-icon')}>
                <FaFacebookMessenger />
              </div>
              <div className={cx('content-text')}>건의하기</div>
            </a>
          </div>
          <div className={cx('content')}>
            <Link to='/policy/privacy'>개인정보취급방침</Link>
          </div>
          <div className={cx('content')}>이용약관</div>
        </div>
      </div>
    </div>
  )
}

Profile.defaultProps = {
  meta: null,
  message: ''
}

Profile.propTypes = {
  meta: PropTypes.any,
  message: PropTypes.string,
  _logout: PropTypes.func
}

export default Profile
