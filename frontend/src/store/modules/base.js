import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

// action types
const INITIALIZE = 'base/INITIALIZE'
const CHANGE_MODAL = 'base/CHANGE_MODAL'
const CHANGE_TAB = 'base/CHANGE_TAB'

// action creators
export const initialize = createAction(INITIALIZE)
export const changeModal = createAction(CHANGE_MODAL)
export const changeTab = createAction(CHANGE_TAB)

// initial state
const initialState = {
  modal: {
    loading: false
  },
  activeTab: 0
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
    },
    [CHANGE_TAB]: (state, action) => {
      return produce(state, draft => {
        draft.activeTab = action.payload
      })
    }
  },
  initialState
)
