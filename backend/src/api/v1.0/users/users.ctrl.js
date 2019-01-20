const User = require('database/models/User')

exports.getUserInfo = async ctx => {
  const { user } = ctx
  const { id } = ctx.params

  if (user._id !== id) {
    ctx.status = 401
    return
  }

  try {
    const userData = await User.findById(user._id, {
      social: false,
      password: false,
      joinedDate: false
    }).exec()
    if (!userData) {
      ctx.status = 404
      return
    }
    ctx.body = userData
  } catch (e) {
    ctx.throw(500, e)
  }
}
