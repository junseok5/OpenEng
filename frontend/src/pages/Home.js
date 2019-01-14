import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import ListHeaderContainer from 'containers/ListHeaderContainer'
import SideMenu from 'components/common/SideMenu'
import MainTemplate from 'components/common/MainTemplate'
import Introduction from 'components/intro/Introduction'
import VideoListContainer from 'containers/VideoListContainer'
import LoginBarContainer from 'containers/LoginBarContainer'
import Base from 'containers/Base'

const Home = ({ match }) => {
  const { tag, channel, keyword } = match.params

  return (
    <PageTemplate>
      <Base />
      <SideMenu tag={tag} />
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
