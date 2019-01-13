import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './MainTemplate.scss'

const MainTemplate = ({ children }) => {
  return <div className={cx('main-template')}>{children}</div>
}

MainTemplate.propTypes = {
  children: PropTypes.node
}

export default MainTemplate
