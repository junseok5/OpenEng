import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import HeaderContainer from 'containers/HeaderContainer'
import Base from 'containers/Base'
import ProfileContainer from 'containers/ProfileContainer'
import TabsContainer from 'containers/TabsContainer'

const User = ({ match }) => {
  const { id } = match.params

  return (
    <PageTemplate>
      <Base />
      <HeaderContainer />
      <TabsContainer />
      <ProfileContainer id={id} />
    </PageTemplate>
  )
}

export default User
