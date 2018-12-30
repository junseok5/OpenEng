import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as VideoAPI from 'lib/api/video'

// action types
const INITIALIZE = 'video/INITIALIZE'
const GET_VIDEO = 'video/GET_VIDEO'
const SET_YOUTUBE = 'video/SET_YOUTUBE'

// action creators
export const initialize = createAction(INITIALIZE)
export const getVideo = createAction(GET_VIDEO, VideoAPI.getVideo)
export const setYoutube = createAction(SET_YOUTUBE)

// initial state
const initialState = {
  video: {
    _id: '',
    youtubeId: '',
    title: '',
    overayTime: '',
    category: '',
    mainSentance: '',
    views: 0,
    subtitles: []
  },
  youtube: {
    player: null,
    playerReady: false,
    timer: null,
    playing: false,
    cursor: 0,
    currentTime: 0,
    duration: 0,
    subtitleContents: {
      en: '',
      ko: ''
    },
    language: 'ko-en',
    sectionRepeat: false,
    initPlay: false
  }
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    ...pender({
      type: GET_VIDEO,
      onSuccess: (state, action) => {
        const { data } = action.payload
        return produce(state, draft => {
          draft.video = data
        })
      }
    }),
    [SET_YOUTUBE]: (state, action) => {
      return {
        ...state,
        youtube: { ...state.youtube, ...action.payload }
      }
    }
  },
  initialState
)
