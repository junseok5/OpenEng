import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
// import ExploreSearch from 'components/explore/ExploreSearch'
import SearchHeaderContainer from 'containers/SearchHeaderContainer'
import Base from 'containers/Base'
import TabsContainer from 'containers/TabsContainer'
import ChannelList from 'components/explore/ChannelList'

const Explore = () => {
  return (
    <PageTemplate>
      <Base />
      <SearchHeaderContainer />
      <TabsContainer />
      <ChannelList />
    </PageTemplate>
  )
}

export default Explore
