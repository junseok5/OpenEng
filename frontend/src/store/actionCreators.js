import { bindActionCreators } from 'redux'
import store from './index'
import * as baseActions from './modules/base'
import * as listActions from './modules/list'
import * as videoActions from './modules/video'
import * as searchActions from './modules/search'
import * as authActions from './modules/auth'
import * as userActions from './modules/user'

const { dispatch } = store

export const BaseActions = bindActionCreators(baseActions, dispatch)
export const ListActions = bindActionCreators(listActions, dispatch)
export const VideoActions = bindActionCreators(videoActions, dispatch)
export const SearchActions = bindActionCreators(searchActions, dispatch)
export const AuthActions = bindActionCreators(authActions, dispatch)
export const UserActions = bindActionCreators(userActions, dispatch)
