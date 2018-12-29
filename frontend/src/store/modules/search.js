import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'search/INITIALIZE'
const CHANGE_FORM = 'search/CHANGE_FORM'
const SEARCH = 'search/SEARCH'
const WRITE_RECENT_KEYWORDS = 'search/WRITE_RECENT_KEYWORDS'

// actions creators
export const initialize = createAction(INITIALIZE)
export const changeForm = createAction(CHANGE_FORM)
export const search = createAction(SEARCH, VideoAPI.getRecentVideos)
export const writeRecentKeywords = createAction(WRITE_RECENT_KEYWORDS)

// initial state
const initialState = {
  form: '',
  result: null,
  recentKeywords: []
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
    }),
    [WRITE_RECENT_KEYWORDS]: (state, action) => {
      const keywords = action.payload
      return produce(state, draft => {
        draft.recentKeywords = keywords
      })
    }
  },
  initialState
)
