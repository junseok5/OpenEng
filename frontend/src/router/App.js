import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Loading from 'components/common/Loading'
import { Explore, Home, Login, Register, Search, User, Video } from 'pages'

const Privacy = Loadable({
  loader: () => import('pages/Privacy'),
  loading: Loading,
})

const Terms = Loadable({
  loader: () => import('pages/Terms'),
  loading: Loading,
})

const NotFound = Loadable({
  loader: () => import('pages/NotFound'),
  loading: Loading,
})

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tag/:tag" component={Home} />
      <Route path="/channel/:channel" component={Home} />
      <Route path="/keyword/:keyword" component={Home} />
      <Route path="/videos/:id" component={Video} />
      <Route path="/search" component={Search} />
      <Route path="/sign_in" component={Login} />
      <Route path="/sign_up" component={Register} />
      <Route path="/user/:id" component={User} />
      <Route path="/explore" component={Explore} />
      <Route path="/policy/privacy" component={Privacy} />
      <Route path="/policy/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
