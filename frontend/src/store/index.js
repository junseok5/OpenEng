import configure from './configure'

const store = configure(
  typeof window === 'undefined' ? undefined : window.__REDUX_STATE__
)

export default store
