import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import HeaderContainer from 'containers/HeaderContainer'
import ListHeaderContainer from 'containers/ListHeaderContainer'
import SideMenu from 'components/common/SideMenu'
import MainTemplate from 'components/common/MainTemplate'
import Introduction from 'components/intro/Introduction'
import VideoListContainer from 'containers/VideoListContainer'
import LoginBarContainer from 'containers/LoginBarContainer'
import Base from 'containers/Base'
import TabsContainer from 'containers/TabsContainer'

const Home = ({ match }) => {
  const { tag, channel, keyword } = match.params

  return (
    <PageTemplate>
      <Base />
      <HeaderContainer />
      <SideMenu tag={tag} />
      <TabsContainer />
      <MainTemplate>
        {!tag && !channel && !keyword && <Introduction />}
        {keyword && <ListHeaderContainer keyword={keyword} />}
        {channel && <ListHeaderContainer channel={channel} />}
        <VideoListContainer tag={tag} channel={channel} keyword={keyword} />
        <LoginBarContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default Home
