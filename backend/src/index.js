require('dotenv').config()

const createServer = require('auto-sni')
// const http = require('http')
// const https = require('https')

const Koa = require('koa')
const Router = require('koa-router')
const KoaBody = require('koa-body')
const path = require('path')
const views = require('koa-views')
const serve = require('koa-static')
const authToken = require('lib/middlewares/authToken')

const staticPath = path.join(__dirname, '../../frontend/build')

const { HTTP_PORT: httpPort, HTTPS_PORT: httpsPort } = process.env

const app = new Koa()

app.use(KoaBody({ multipart: true }))
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

const db = require('./database')

db.connect()

// 라우터 설정
const api = require('./api')

const router = new Router()

router.use('/api', api.routes())
app.use(router.routes()).use(router.allowedMethods())

createServer(
  {
    email: 'vkehrkrl82@gmail.com',
    agreeTos: true,
    debug: true,
    domains: ['openeng.org', ['openeng.org', 'www.openeng.org']],
    dir: '~/etc/letsencrypt',
    ports: {
      http: httpPort,
      https: httpsPort
    }
  },
  app.callback()
)

// app.listen(httpPort, () => {
//   console.log(`Listenint to port ${httpPort}`)
// })
