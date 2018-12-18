import React from 'react'
import cx from 'classnames'
import './PageTemplate.scss'

import Header from 'components/Header'

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <Header />
    <main>{children}</main>
  </div>
)

PageTemplate.propTypes = {}

export default PageTemplate
