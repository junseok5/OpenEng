require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const db = require('./database')
const api = require('./api')

db.connect()

const { Port: port } = process.env

const app = new Koa()

const router = new Router()

// 라우터 설정
router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log('Listenint to port 4000')
})
