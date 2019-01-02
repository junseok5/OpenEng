import React from 'react'
import PageTemplate from 'components/PageTemplate'
import ListHeaderContainer from 'containers/ListHeaderContainer'
import SideMenu from 'components/SideMenu'
import MainTemplate from 'components/MainTemplate'
import Introduction from 'components/Introduction'
import VideoListContainer from 'containers/VideoListContainer'

const Home = ({ match }) => {
  const { tag, keyword } = match.params

  return (
    <PageTemplate>
      <SideMenu tag={tag} />
      <MainTemplate>
        {!tag && !keyword && <Introduction />}
        {keyword && <ListHeaderContainer keyword={keyword} />}
        <VideoListContainer tag={tag} keyword={keyword} />
      </MainTemplate>
    </PageTemplate>
  )
}

export default Home
