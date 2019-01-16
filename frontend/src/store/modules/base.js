import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

// action types
const INITIALIZE = 'base/INITIALIZE'
const CHANGE_MODAL = 'base/CHANGE_MODAL'

// action creators
export const initialize = createAction(INITIALIZE)
export const changeModal = createAction(CHANGE_MODAL)

// initial state
const initialState = {
  modal: {
    loading: false
  }
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_MODAL]: (state, action) => {
      const { name, value } = action.payload
      return produce(state, draft => {
        draft.modal[name] = value
      })
    }
  },
  initialState
)
