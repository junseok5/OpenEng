import React from 'react'
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

export default SearchTemplate
