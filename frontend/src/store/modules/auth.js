import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as AuthAPI from 'lib/api/auth'

// action types
const INITIALIZE = 'auth/INITIALIZE'
const CHANGE_LOGIN_FORM = 'auth/CHANGE_LOGIN_FORM'
const CHANGE_REGISTER_FORM = 'auth/CHANGE_REGISTER_FORM'
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN'

// action creators
export const initialize = createAction(INITIALIZE)
export const changeLoginForm = createAction(CHANGE_LOGIN_FORM)
export const changeRegisterForm = createAction(CHANGE_REGISTER_FORM)
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin)

// initial state
const initialState = {
  loginForm: {
    email: '',
    password: ''
  },
  registerForm: {
    email: '',
    password: '',
    displayName: ''
  },
  result: null,
  error: null
}

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_LOGIN_FORM]: (state, action) => {
      const { name, value } = action.payload
      return produce(state, draft => {
        draft.loginForm[name] = value
      })
    },
    [CHANGE_REGISTER_FORM]: (state, action) => {
      const { name, value } = action.payload
      return produce(state, draft => {
        draft.registerForm[name] = value
      })
    },
    ...pender({
      type: LOCAL_LOGIN,
      onSuccess: (state, action) => {
        console.log(action.payload)
        const { data } = action.payload
        return produce(state, draft => {
          draft.result = data
        })
      },
      onFailure: (state, action) => {
        const { data } = action.payload.response
        return produce(state, draft => {
          draft.error = data
        })
      }
    })
  },
  initialState
)
