import React from 'react'
import PolicyTemplate from 'components/policy/PolicyTemplate'
import TermsView from 'components/policy/TermsView'

const Terms = ({ match }) => {
  const path = match.path
  return (
    <PolicyTemplate path={path}>
      <TermsView />
    </PolicyTemplate>
  )
}

export default Terms
