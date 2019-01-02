const Video = require('database/models/video')
// const Joi = require('joi')

exports.list = async ctx => {
  const page = parseInt(ctx.query.page || 1, 10)
  const { tag, keyword } = ctx.query

  let query = {}
  query = tag && { tags: tag }
  query = keyword
    ? {
      ...query,
      sentance: { $text: { $search: keyword } },
    }
    : { ...query }

  if (page < 1) {
    ctx.status = 400
    return
  }

  try {
    const videos = await Video.findList(query, page)

    ctx.body = videos
  } catch (e) {
    ctx.throw(e, 500)
  }
}

exports.read = async ctx => {
  const { id } = ctx.params

  try {
    const video = await Video.findById(id).exec()

    if (!video) {
      ctx.status = 404
      return
    }
    ctx.body = video
  } catch (e) {
    ctx.throw(e, 500)
  }
}
