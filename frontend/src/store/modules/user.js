import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'

// action types
const INITIALIZE = 'auth/INITIALIZE'
const SET_USER = 'auth/SET_USER'

// action creators
export const initialize = createAction(INITIALIZE)
export const setUser = createAction(SET_USER)

// initial state
const initialState = {
  user: null
}

export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [SET_USER]: (state, action) => {
      return produce(state, draft => {
        draft.user = action.payload
      })
    }
  },
  initialState
)
