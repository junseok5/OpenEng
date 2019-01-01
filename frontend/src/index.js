import React from 'react'
import ReactDOM from 'react-dom'
import { matchPath } from 'react-router-dom'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import 'styles/base.scss'

// const renderAfterPreload = async () => {
//   if (process.env.NODE_ENV === 'production') {
//     const promises = []
//     routeConfig.forEach(route => {
//       const match = matchPath(window.location.pathname, route)
//     })
//   }
// }

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
