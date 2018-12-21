import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Videos } from 'pages'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/videos/:id" component={Videos} />
    </Switch>
  )
}

export default App
