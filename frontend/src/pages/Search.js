import React from 'react'
import SearchTemplate from 'components/search/SearchTemplate'
import SearchContentsContainer from 'containers/SearchContentsContainer'
import Base from 'containers/Base'

const Search = () => {
  return (
    <SearchTemplate>
      <Base />
      <SearchContentsContainer />
    </SearchTemplate>
  )
}

export default Search
