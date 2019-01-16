import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'
import * as AuthAPI from 'lib/api/auth'

// action types
const INITIALIZE = 'auth/INITIALIZE'
const CHANGE_LOGIN_FORM = 'auth/CHANGE_LOGIN_FORM'
const CHANGE_REGISTER_FORM = 'auth/CHANGE_REGISTER_FORM'
const SET_MESSAGE = 'auth/SET_MESSAGE'
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN'
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER'
const CHECK_LOGIN = 'auth/CHECK_LOGIN'
const LOGOUT = 'auth/LOGOUT'

// action creators
export const initialize = createAction(INITIALIZE)
export const changeLoginForm = createAction(CHANGE_LOGIN_FORM)
export const changeRegisterForm = createAction(CHANGE_REGISTER_FORM)
export const setMessage = createAction(SET_MESSAGE)
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin)
export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister)
export const checkLogin = createAction(CHECK_LOGIN, AuthAPI.checkLogin)
export const logout = createAction(LOGOUT, AuthAPI.logout)

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
  message: '',
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
    [SET_MESSAGE]: (state, action) => {
      return produce(state, draft => {
        draft.message = action.payload
      })
    },
    ...pender({
      type: LOCAL_LOGIN,
      onSuccess: (state, action) => {
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
    }),
    ...pender({
      type: LOCAL_REGISTER,
      onSuccess: (state, action) => {
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
    }),
    ...pender({
      type: CHECK_LOGIN,
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
