require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const views = require('koa-views')
const serve = require('koa-static')
const db = require('./database')
const api = require('./api')

const staticPath = path.join(__dirname, '../../frontend/build')

db.connect()

const { Port: port } = process.env

const app = new Koa()

const router = new Router()

// 라우터 설정
router.use('/api', api.routes())

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
app.use(serve(staticPath))
app.use(
  views(staticPath, {
    extension: 'html',
  }),
)
app.use(async ctx => {
  await ctx.render('index.html')
})

app.listen(port, () => {
  console.log('Listenint to port 4000')
})
