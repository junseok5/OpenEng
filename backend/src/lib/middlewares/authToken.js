import { generate, decode } from 'lib/token'

export default async (ctx, next) => {
  const token = ctx.cookies.get('access_token')

  if (!token) {
    ctx.user = null
    return next()
  }

  try {
    const decoded = await decode(token)
    const { user } = decoded

    // re-issue token when its age is over 4days
    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 4) {
      const freshToken = await generate({ user }, 'user')

      ctx.cookies.set('access_token', freshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7
      })
    }

    ctx.user = user
  } catch (e) {
    ctx.user = null
  }

  return next()
}
