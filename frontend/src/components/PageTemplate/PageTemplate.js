import React from 'react'
import cx from 'classnames'
import './PageTemplate.scss'

import HeaderContainer from 'containers/HeaderContainer'

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <HeaderContainer />
    <main>{children}</main>
  </div>
)

PageTemplate.propTypes = {}

export default PageTemplate
