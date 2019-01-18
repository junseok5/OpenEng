import React from 'react'
// import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
// import Loading from 'components/common/Loading'
import {
  Explore,
  Home,
  Login,
  NotFound,
  Register,
  Search,
  User,
  Video
} from 'pages'

// const Home = Loadable({
//   loader: () => import('pages/Home'),
//   loading: Loading,
// })

// const Videos = Loadable({
//   loader: () => import('pages/Videos'),
//   loading: Loading,
// })

// const Search = Loadable({
//   loader: () => import('pages/Search'),
//   loading: Loading,
// })

// const Login = Loadable({
//   loader: () => import('pages/Login'),
//   loading: Loading,
// })

// const Register = Loadable({
//   loader: () => import('pages/Register'),
//   loading: Loading,
// })

// const User = Loadable({
//   loader: () => import('pages/User'),
//   loading: Loading,
// })

// const Explore = Loadable({
//   loader: () => import('pages/Explore'),
//   loading: Loading,
// })

// const NotFound = Loadable({
//   loader: () => import('pages/NotFound'),
//   loading: Loading,
// })

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/tag/:tag' component={Home} />
      <Route path='/channel/:channel' component={Home} />
      <Route path='/keyword/:keyword' component={Home} />
      <Route path='/videos/:id' component={Video} />
      <Route path='/search' component={Search} />
      <Route path='/sign_in' component={Login} />
      <Route path='/sign_up' component={Register} />
      <Route path='/user/:id' component={User} />
      <Route path='/explore' component={Explore} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
