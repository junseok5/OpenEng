import { bindActionCreators } from 'redux'
import store from './index'
import * as listActions from './modules/list'
import * as videoActions from './modules/video'
import * as searchActions from './modules/search'
import * as authActions from './modules/auth'

const { dispatch } = store

export const ListActions = bindActionCreators(listActions, dispatch)
export const VideoActions = bindActionCreators(videoActions, dispatch)
export const SearchActions = bindActionCreators(searchActions, dispatch)
export const AuthActions = bindActionCreators(authActions, dispatch)
