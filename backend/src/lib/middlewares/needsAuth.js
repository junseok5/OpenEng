export default (ctx, next) => {
  if (!ctx.user) {
    ctx.status = 401
    return
  }
  return next()
}
