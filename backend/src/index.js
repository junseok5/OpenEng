require('dotenv').config()

// const createServer = require('lib/letsencrypt')
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

// const { HTTP_PORT: httpPort, HTTPS_PORT: httpsPort, EMAIL: email } = process.env
const { HTTP_PORT: httpPort } = process.env
const app = new Koa()

app.use(KoaBody({ multipart: true }))
app.use(serve('public'))
app.use(serve(staticPath))
app.use(authToken)

// 라우터 설정
const router = new Router()

router.use('/api', api.routes())
app.use(router.routes()).use(router.allowedMethods())

app.use(
  views(staticPath, {
    extension: 'html'
  })
)
app.use(async ctx => {
  await ctx.render('index.html')
})

// createServer(
//   {
//     email,
//     debug: process.env.NODE_ENV === 'development' && true,
//     agreeTos: true,
//     domains: ['openeng.org'],
//     configDir: '',
//     ports: {
//       http: httpPort,
//       https: httpsPort
//     },
//     version: 'draft-11'
//   },
//   app.callback()
// )

app.listen(httpPort, () => {
  console.log(`Listenint to port ${httpPort}`)
})
