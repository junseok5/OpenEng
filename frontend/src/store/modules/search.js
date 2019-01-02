import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
// import { pender } from 'redux-pender'
// import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'search/INITIALIZE'
const CHANGE_FORM = 'search/CHANGE_FORM'
const WRITE_RECENT_TAGS = 'search/WRITE_RECENT_TAGS'
const CHANGE_VIEW = 'search/CHANGE_VIEW'

// actions creators
export const initialize = createAction(INITIALIZE)
export const changeForm = createAction(CHANGE_FORM)
export const writeRecentTags = createAction(WRITE_RECENT_TAGS)
export const changeView = createAction(CHANGE_VIEW)

// initial state
const initialState = {
  form: '',
  result: null,
  recentTags: [],
  view: {
    focus: false,
    mouseOver: false
  }
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
    [WRITE_RECENT_TAGS]: (state, action) => {
      const tags = action.payload
      return produce(state, draft => {
        draft.recentTags = tags
      })
    },
    [CHANGE_VIEW]: (state, action) => {
      return {
        ...state,
        view: { ...state.view, ...action.payload }
      }
    }
  },
  initialState
)
