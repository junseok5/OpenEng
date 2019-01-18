const mongoose = require('mongoose')

const { Schema } = mongoose

const Log = new Schema({
  event: String,
  subject: Schema.Types.Mixed,
  eventedDate: {
    type: Date,
    default: Date.now()
  }
})

let LogSchema = null
try {
  LogSchema = mongoose.model('Log', Log)
} catch (e) {
  LogSchema = mongoose.model('Log')
}

module.exports = LogSchema
