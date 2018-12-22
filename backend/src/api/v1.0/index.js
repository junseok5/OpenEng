const Router = require('koa-router')

const videos = require('./videos')

const api = new Router()

api.use('/videos', videos.routes())

module.exports = api
