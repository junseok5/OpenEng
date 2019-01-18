import React from 'react'
import PolicyTemplate from 'components/policy/PolicyTemplate'
import PrivacyView from 'components/policy/PrivacyView'

const Privacy = ({ match }) => {
  const path = match.path
  return (
    <PolicyTemplate path={path}>
      <PrivacyView />
    </PolicyTemplate>
  )
}

export default Privacy
