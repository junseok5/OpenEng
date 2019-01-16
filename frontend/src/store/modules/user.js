import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as UserAPI from 'lib/api/user'

// action types
const INITIALIZE = 'user/INITIALIZE'
const SET_USER = 'user/SET_USER'
const GET_USER_INFO = 'user/GET_USER_INFO'
const SET_MESSAGE = 'user/SET_MESSAGE'

// action creators
export const initialize = createAction(INITIALIZE)
export const setUser = createAction(SET_USER)
export const getUserInfo = createAction(GET_USER_INFO, UserAPI.getUserInfo)
export const setMessage = createAction(SET_MESSAGE)

// initial state
const initialState = {
  user: null,
  meta: null,
  message: ''
}

export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [SET_USER]: (state, action) => {
      return produce(state, draft => {
        draft.user = action.payload
      })
    },
    ...pender({
      type: GET_USER_INFO,
      onSuccess: (state, action) => {
        const { data } = action.payload
        return produce(state, draft => {
          draft.meta = data
        })
      },
      onFailure: (state, action) => {
        const { status } = action.payload.response

        return produce(state, draft => {
          if (status === 401) {
            draft.message = 'UNAUTHORIZED'
          } else if (status === 404) {
            draft.message = 'NOT_EXISTS_USER'
          }
        })
      }
    }),
    [SET_MESSAGE]: (state, action) => {
      return produce(state, draft => {
        draft.message = action.payload
      })
    }
  },
  initialState
)
