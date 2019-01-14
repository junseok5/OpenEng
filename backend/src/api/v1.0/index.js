const Router = require('koa-router')

const auth = require('./auth')
const videos = require('./videos')

const api = new Router()

api.use('/auth', auth.routes())
api.use('/videos', videos.routes())

module.exports = api
