import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './PageTemplate.scss'

import HeaderContainer from 'containers/HeaderContainer'
import Tabs from 'components/common/Tabs'
import deviceType from 'lib/checkDevice'

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <HeaderContainer />
    <main>{children}</main>
    <Tabs />
    {/* {deviceType === 'Mobile' && <Tabs />} */}
  </div>
)

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate
