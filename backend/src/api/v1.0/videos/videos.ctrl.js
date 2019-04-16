const Video = require("database/models/Video")
// const Joi = require('joi')

exports.list = async ctx => {
    const page = parseInt(ctx.query.page || 1, 10)
    const { tag, channel, keyword } = ctx.query

    const baseQuery = { published: "public" }
    let query = {}
    query = channel && { ...baseQuery, channel }
    query = tag && { ...baseQuery, tags: tag }
    query = keyword && {
        ...baseQuery,
        title: { $regex: keyword, $options: "i" }
    }
    // : { ...query }

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

        // 조회 수 증가
        video.updateOne({ views: video.views + 1 })
    } catch (e) {
        ctx.throw(e, 500)
    }
}
