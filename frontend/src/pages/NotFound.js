import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import HeaderContainer from 'containers/HeaderContainer'
import ErrorInfo from 'components/common/ErrorInfo'
import Base from 'containers/Base'
import TabsContainer from 'containers/TabsContainer'

const NotFound = () => {
  return (
    <PageTemplate>
      <Base />
      <HeaderContainer />
      <TabsContainer />
      <ErrorInfo message='Page Not Found' />
    </PageTemplate>
  )
}

export default NotFound
