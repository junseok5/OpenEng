import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import Base from 'containers/Base'
import ProfileContainer from 'containers/ProfileContainer'

const User = () => {
  return (
    <PageTemplate>
      <Base />
      <ProfileContainer />
    </PageTemplate>
  )
}

export default User
