import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'search/INITIALIZE'
const CHANGE_FORM = 'search/CHANGE_FORM'
const SEARCH = 'search/SEARCH'

// actions creators
export const initialize = createAction(INITIALIZE)
export const changeForm = createAction(CHANGE_FORM)
export const search = createAction(SEARCH, VideoAPI.getRecentVideos)

// initial state
const initialState = {
  form: '',
  result: null
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_FORM]: (state, action) => {
      return produce(state, draft => {
        draft.form = action.payload
      })
    },
    ...pender({
      type: SEARCH,
      onSuccess: (state, action) => {
        const { data } = action.payload
        return produce(state, draft => {
          draft.result = data
        })
      }
    })
  },
  initialState
)
