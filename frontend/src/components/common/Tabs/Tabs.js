import React from 'react'
import cx from 'classnames'
import './Tabs.scss'

import { FiHome, FiGrid, FiUser } from 'react-icons/fi'

const Tabs = () => {
  return (
    <div className={cx('tabs')}>
      <div className={cx('tab', 'active')}>
        <FiHome />
      </div>
      <div className={cx('tab')}>
        <FiGrid />
      </div>
      <div className={cx('tab')}>
        <FiUser />
      </div>
    </div>
  )
}

export default Tabs
