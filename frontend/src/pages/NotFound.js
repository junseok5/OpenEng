import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import ErrorInfo from 'components/common/ErrorInfo'

const NotFound = () => {
  return (
    <PageTemplate>
      <ErrorInfo message='Page Not Found' />
    </PageTemplate>
  )
}

export default NotFound
