import React from 'react'
import App from 'components/App'
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
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
