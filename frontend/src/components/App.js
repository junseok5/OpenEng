import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Videos, Search } from 'pages'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/category/:category' component={Home} />
      <Route path='/keyword/:keyword' component={Home} />
      <Route path='/videos/:id' component={Videos} />
      <Route path='/search' component={Search} />
    </Switch>
  )
}

export default App
