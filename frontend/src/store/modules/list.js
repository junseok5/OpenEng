import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'list/INITIALIZE'
const GET_RECENT_VIDEOS = 'list/GET_RECENT_VIDEOS'

// action creators
export const initialize = createAction(INITIALIZE)
export const getRecentVideos = createAction(
  GET_RECENT_VIDEOS,
  VideoAPI.getRecentVideos
)

const initialListSet = {
  videos: [],
  page: 1,
  end: false
}

// initial state
const initialState = {
  recent: initialListSet
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    ...pender({
      type: GET_RECENT_VIDEOS,
      onSuccess: (state, action) => {
        const { data } = action.payload

        if (data.length === 0) {
          return produce(state, draft => {
            draft.recent.end = true
          })
        }

        return produce(state, draft => {
          draft.recent.videos = state.recent.videos.concat(data)
          draft.recent.page++
        })
      }
    })
  },
  initialState
)
