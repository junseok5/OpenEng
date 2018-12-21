import React from 'react'
import PageTemplate from 'components/PageTemplate'
import SideMenu from 'components/SideMenu'
import MainTemplate from 'components/MainTemplate'
import Introduction from 'components/Introduction'
import CardList from 'components/CardList'

const Home = () => {
  return (
    <PageTemplate>
      <SideMenu />
      <MainTemplate>
        <Introduction />
        <CardList />
      </MainTemplate>
    </PageTemplate>
  )
}

export default Home
