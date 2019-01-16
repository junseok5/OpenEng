import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import Base from 'containers/Base'
import ProfileContainer from 'containers/ProfileContainer'

const User = ({ match }) => {
  const { id } = match.params

  return (
    <PageTemplate>
      <Base />
      <ProfileContainer id={id} />
    </PageTemplate>
  )
}

export default User
