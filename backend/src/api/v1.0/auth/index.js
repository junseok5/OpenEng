const Router = require('koa-router')

const auth = new Router()
const authCtrl = require('./auth.ctrl')

auth.post('/register/local', authCtrl.localRegister)
auth.post('/login/local', authCtrl.localLogin)
auth.post('/register/:provider(facebook|google)', authCtrl.socialRegister)
auth.post('/login/:provider(facebook|google)', authCtrl.socialLogin)
auth.post('/logout', authCtrl.logout)

auth.get('/check', authCtrl.check)

module.exports = auth
