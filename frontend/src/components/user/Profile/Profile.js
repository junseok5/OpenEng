import React from 'react'
import cx from 'classnames'
import './Profile.scss'

const Profile = ({ _logout }) => {
  return (
    <div className={cx('profile')}>
      <div className={cx('profile-wrap')}>
        <div className={cx('profile-header')}>
          <h3>프로필</h3>
          <div className={cx('user-wrap')}>
            <div className={cx('user-info')}>
              <div className={cx('user-name')}>오준석</div>
              <div className={cx('user-email')}>vkehrkrl82@gmail.com</div>
            </div>
            <div className={cx('logout')} onClick={_logout}>
              로그아웃
            </div>
          </div>
        </div>

        <div className={cx('profile-contents')}>
          <div className={cx('app-suggestion')}>건의하기</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
