import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

// action types
const INITIALIZE = 'search/INITIALIZE'
const CHANGE_SEARCH_FORM = 'search/CHANGE_SEARCH_FORM'

// actions creators
export const initialize = createAction(INITIALIZE)
export const changeSearchForm = createAction(CHANGE_SEARCH_FORM)

// initial state
const initialState = {
  searchForm: ''
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_SEARCH_FORM]: (state, action) => {
      return produce(state, draft => {
        draft.searchForm = action.payload
      })
    }
  },
  initialState
)
