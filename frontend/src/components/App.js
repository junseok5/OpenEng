import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Videos, Search, NotFound } from 'pages/index.async'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/category/:category' component={Home} />
      <Route path='/keyword/:keyword' component={Home} />
      <Route path='/videos/:id' component={Videos} />
      <Route path='/search' component={Search} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
