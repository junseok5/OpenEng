const Router = require('koa-router')

const videos = new Router()
const videosCtrl = require('./videos.ctrl')

videos.get('/', videosCtrl.list)
videos.get('/:id', videosCtrl.read)

module.exports = videos
