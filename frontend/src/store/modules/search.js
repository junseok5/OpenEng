import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'search/INITIALIZE'
const CHANGE_SEARCH_FORM = 'search/CHANGE_SEARCH_FORM'
const SEARCH = 'search/SEARCH'

// actions creators
export const initialize = createAction(INITIALIZE)
export const changeSearchForm = createAction(CHANGE_SEARCH_FORM)
export const search = createAction(SEARCH, VideoAPI.getRecentVideos)

// initial state
const initialState = {
  searchForm: '',
  result: null
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_SEARCH_FORM]: (state, action) => {
      return produce(state, draft => {
        draft.searchForm = action.payload
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
