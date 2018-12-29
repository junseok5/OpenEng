import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SearchTemplate.scss'

import SearchHeaderContainer from 'containers/SearchHeaderContainer'

const SearchTemplate = ({ children }) => {
  return (
    <div className={cx('search-template')}>
      <SearchHeaderContainer />
      <main>{children}</main>
    </div>
  )
}

SearchTemplate.propTypes = {
  children: PropTypes.node
}

export default SearchTemplate
