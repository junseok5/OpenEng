const Router = require('koa-router')

const videos = new Router()
const videosCtrl = require('./videos.ctrl')

videos.get('/', videosCtrl.getList)
videos.get('/:id', videosCtrl.getVideo)
videos.post('/', videosCtrl.writeVideo)
videos.patch('/:id', videosCtrl.patchVideo)
videos.delete('/:id', videosCtrl.deleteVideo)

module.exports = videos
