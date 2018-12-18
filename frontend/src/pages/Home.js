import React from 'react'
import PageTemplate from 'components/PageTemplate'
import SideMenu from 'components/SideMenu'
import MainTemplate from 'components/MainTemplate'
import Introduction from 'components/Introduction'

const Home = () => {
  return (
    <PageTemplate>
      <SideMenu />
      <MainTemplate>
        <Introduction />
      </MainTemplate>
    </PageTemplate>
  )
}

export default Home
