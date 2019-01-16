import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './PageTemplate.scss'

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <main>{children}</main>
  </div>
)

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate
