const mongoose = require('mongoose')

const { Schema } = mongoose

const Video = new Schema({
  youtubeId: String,
  overayTime: String,
  tags: {
    type: [String],
    text: true,
  },
  sentance: {
    type: {
      en: String,
      ko: String,
    },
    text: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
  subtitle: Array,
})

// 한 페이지에 보일 비디오 갯수
const videosPerPage = 20

Video.statics.findList = function (query, page) {
  return this.find(query)
    .sort({ _id: -1 })
    .limit(videosPerPage)
    .skip((page - 1) * videosPerPage)
    .lean()
    .exec()
}

// export schema
let VideoSchema = null

try {
  VideoSchema = mongoose.model('Video', Video)
} catch (e) {
  VideoSchema = mongoose.model('Video')
}

module.exports = VideoSchema
