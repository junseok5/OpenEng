import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Loading from 'components/common/Loading'

const Home = Loadable({
  loader: () => import('pages/Home'),
  loading: Loading,
})

const Videos = Loadable({
  loader: () => import('pages/Videos'),
  loading: Loading,
})

const Search = Loadable({
  loader: () => import('pages/Search'),
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
      <Route path="/videos/:id" component={Videos} />
      <Route path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
