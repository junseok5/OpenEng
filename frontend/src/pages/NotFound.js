import React from 'react'
import PageTemplate from 'components/PageTemplate'
import ErrorInfo from 'components/ErrorInfo'

const NotFound = () => {
  return (
    <PageTemplate>
      <ErrorInfo message='Page Not Found' />
    </PageTemplate>
  )
}

export default NotFound
