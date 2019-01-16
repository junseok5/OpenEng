import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Tabs.scss'

import { Link } from 'react-router-dom'
import { FiHome, FiGrid, FiUser } from 'react-icons/fi'

const Tabs = ({ userId, activeTab }) => {
  return (
    <div className={cx('tabs')}>
      <div className={cx('tab', activeTab === 0 && 'active')}>
        <Link to='/'>
          <FiHome />
        </Link>
      </div>
      <div className={cx('tab')}>
        <FiGrid />
      </div>
      <div className={cx('tab', activeTab === 2 && 'active')}>
        {userId ? (
          <Link to={`/user/${userId}`}>
            <FiUser />
          </Link>
        ) : (
          <Link to='sign_in'>
            <FiUser />
          </Link>
        )}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  userId: null,
  activeTab: 0
}

Tabs.propTypes = {
  userId: PropTypes.any,
  activeTab: PropTypes.number
}

export default Tabs
