require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const KoaBody = require('koa-body')
const path = require('path')
const views = require('koa-views')
const serve = require('koa-static')
const authToken = require('lib/middlewares/authToken')
const db = require('./database')
const api = require('./api')

const staticPath = path.join(__dirname, '../../frontend/build')

db.connect()

const { PORT: port } = process.env
const app = new Koa()

app.use(KoaBody({ multipart: true }))

const router = new Router()

// 라우터 설정
router.use('/api', api.routes())
app.use(router.routes()).use(router.allowedMethods())

app.use(serve('public'))
app.use(serve(staticPath))
app.use(authToken)
app.use(
  views(staticPath, {
    extension: 'html'
  })
)
app.use(async ctx => {
  await ctx.render('index.html')
})

app.listen(port, () => {
  console.log(`Listenint to port ${port}`)
})
