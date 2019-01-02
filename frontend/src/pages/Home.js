import React from 'react'
import PageTemplate from 'components/PageTemplate'
import ListHeaderContainer from 'containers/ListHeaderContainer'
import SideMenu from 'components/SideMenu'
import MainTemplate from 'components/MainTemplate'
import Introduction from 'components/Introduction'
import VideoListContainer from 'containers/VideoListContainer'

const Home = ({ match }) => {
  const { tag } = match.params

  return (
    <PageTemplate>
      <SideMenu tag={tag} />
      <MainTemplate>
        {!tag && <Introduction />}
        {tag && <ListHeaderContainer tag={tag} />}
        <VideoListContainer tag={tag} />
      </MainTemplate>
    </PageTemplate>
  )
}

export default Home
