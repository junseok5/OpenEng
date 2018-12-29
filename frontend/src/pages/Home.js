import React from 'react'
import PageTemplate from 'components/PageTemplate'
import ListHeader from 'components/ListHeader'
import SideMenu from 'components/SideMenu'
import MainTemplate from 'components/MainTemplate'
import Introduction from 'components/Introduction'
import VideoListContainer from 'containers/VideoListContainer'

const Home = ({ match }) => {
  const { category, keyword } = match.params
  console.log(category, keyword)

  return (
    <PageTemplate>
      <SideMenu category={category} />
      <MainTemplate>
        {!category && !keyword && <Introduction />}
        {keyword && <ListHeader keyword={keyword} />}
        <VideoListContainer category={category} keyword={keyword} />
      </MainTemplate>
    </PageTemplate>
  )
}

export default Home
