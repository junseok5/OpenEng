import React from 'react'
import AppRouter from 'router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import ScrollMemory from 'react-router-scroll-memory'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ScrollMemory />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
