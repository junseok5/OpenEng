import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import ErrorInfo from 'components/common/ErrorInfo'
import Base from 'containers/Base'

const NotFound = () => {
  return (
    <PageTemplate>
      <Base />
      <ErrorInfo message='Page Not Found' />
    </PageTemplate>
  )
}

export default NotFound
