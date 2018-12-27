import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'video/INITIALIZE'
const GET_VIDEO = 'video/GET_VIDEO'

// action creators
export const initialize = createAction(INITIALIZE)
export const getVideo = createAction(GET_VIDEO, VideoAPI.getVideo)

// initial state
const initialState = {
  video: null
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    ...pender({
      type: GET_VIDEO,
      onSuccess: (state, action) => {
        const { data } = action.payload
        return produce(state, draft => {
          draft.video = data
        })
      }
    })
  },
  initialState
)
