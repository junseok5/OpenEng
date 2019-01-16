const Joi = require('joi')
const User = require('database/models/User')
const { getProfile } = require('lib/getSocialProfile')

// Regex definition
const displayNameRegex = /^[0-9a-zA-Z0-9ㄱ-힣]{3,12}$/

exports.localRegister = async ctx => {
  const { body } = ctx.request

  const schema = Joi.object({
    email: Joi.string().email().required(),
    displayName: Joi.string().regex(displayNameRegex).required(),
    password: Joi.string().min(6).max(30).required()
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const { email, displayName, password } = body

  try {
    // check email
    const exists = await User.findByEmail(email)

    if (exists) {
      ctx.status = 401
      ctx.body = 'EXISTS_EMAIL'
      return
    }

    const user = await User.localRegister({
      email,
      displayName,
      password
    })

    ctx.body = {
      _id: user._id,
      displayName,
      thumbnail: user.thumbnail
    }

    const accessToken = await user.generateToken()

    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.localLogin = async ctx => {
  const { body } = ctx.request

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30)
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const { email, password } = body

  try {
    const user = await User.findByEmail(email)

    if (!user) {
      ctx.status = 401
      ctx.body = 'USER_NOT_FOUND'
      return
    }

    const validated = user.validatePassword(password)

    if (!validated) {
      // wrong password
      ctx.status = 401
      ctx.body = 'WRONG_PASSWORD'
      return
    }

    const accessToken = await user.generateToken()

    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })

    const { _id, displayName, thumbnail } = user

    ctx.body = {
      _id,
      displayName,
      thumbnail
    }
  } catch (e) {
    ctx.throw(500, e)
  }
}

// exports.socialRegister = async ctx => {
//   const { body } = ctx.request
//   const { provider } = ctx.params

//   const schema = Joi.object({
//     displayName: Joi.string().regex(displayNameRegex).required(),
//     accessToken: Joi.string().required()
//   })

//   const result = Joi.validate(body, schema)

//   if (result.error) {
//     ctx.status = 400
//     ctx.body = result.error
//     return
//   }

//   const {
//     displayName,
//     accessToken
//   } = body

//   // get social info
//   let profile = null
//   try {
//     profile = await getProfile(provider, accessToken)
//   } catch(e) {
//     ctx.status= 403
//     return
//   }

//   if (!profile) {
//     ctx.status = 403
//     return
//   }

//   const { id, thumbnail, email } = profile

// }

exports.socialLogin = async ctx => {
  const schema = Joi.object().keys({
    accessToken: Joi.string().required()
  })

  const result = Joi.validate(ctx.request.body, schema)

  if (result.error) {
    ctx.status = 400
    return
  }

  const { provider } = ctx.params
  const { accessToken } = ctx.request.body

  // get social info
  let profile = null
  try {
    profile = await getProfile(provider, accessToken)
  } catch (e) {
    ctx.status = 401
    ctx.body = 'WRONG_CREDENTIALS'
    return
  }

  if (!profile) {
    ctx.status = 401
    ctx.body = 'WRONG_CREDENTIALS'
    return
  }

  // check account existancy
  let user = null
  try {
    user = await User.findSocialId({ provider, id: profile.id })
  } catch (e) {
    ctx.throw(500, e)
  }

  if (user) {
    try {
      const token = await user.generateToken()
      ctx.cookies.set('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
      })
    } catch (e) {
      ctx.throw(500, e)
    }

    const { _id, displayName } = user

    ctx.body = {
      _id,
      displayName
    }
    return
  }

  if (!user && profile.email) {
    let duplicated = null
    try {
      duplicated = await User.findByEmail(profile.email)
    } catch (e) {
      ctx.throw(500, e)
    }

    // if there is a duplicated email, merges the user account
    if (duplicated) {
      duplicated.social[provider] = {
        id: profile.id,
        accessToken
      }

      try {
        await duplicated.save()
      } catch (e) {
        ctx.throw(500, e)
      }

      try {
        const token = await duplicated.generateToken()
        ctx.cookies.set('access_token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7
        })
      } catch (e) {
        ctx.throw(500, e)
      }

      const { _id, displayName } = duplicated

      ctx.body = {
        _id,
        displayName
      }
    } else {
      // user was not registered
      try {
        user = await User.socialRegister({
          email: profile.email,
          displayName: profile.name,
          thumbnail: profile.thumbnail,
          provider,
          accessToken,
          socialId: profile.id
        })
      } catch (e) {
        ctx.throw(500, e)
      }

      ctx.body = {
        _id: user._id,
        displayName: user.displayName,
        thumbnail: user.thumbnail
      }
    }
  }
}

exports.check = async ctx => {
  const { user } = ctx

  if (!user) {
    ctx.status = 401
    return
  }

  try {
    const exists = await User.findById(user._id)

    if (!exists) {
      // invalid user
      ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
      })
      ctx.status = 401
      return
    }
  } catch (e) {
    ctx.throw(500, e)
  }

  ctx.body = user
}

exports.logout = ctx => {
  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  })

  ctx.status = 204
}
