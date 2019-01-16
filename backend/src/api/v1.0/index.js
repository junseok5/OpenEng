const Router = require('koa-router')

const auth = require('./auth')
const videos = require('./videos')
const users = require('./users')

const api = new Router()

api.use('/auth', auth.routes())
api.use('/videos', videos.routes())
api.use('/users', users.routes())

module.exports = api
