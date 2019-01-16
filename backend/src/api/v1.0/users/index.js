const Router = require('koa-router')

const users = new Router()
const needsAuth = require('lib/middlewares/needsAuth')
const usersCtrl = require('./users.ctrl')

users.get('/:id', needsAuth, usersCtrl.getUserInfo)

module.exports = users
