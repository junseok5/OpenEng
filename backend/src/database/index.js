const mongoose = require('mongoose')

const {
  MONGO_URI: mongoURI,
  MONGO_USER: mongoUser,
  MONGO_PASS: mongoPass,
} = process.env

const dbOptions = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  user: mongoUser,
  pass: mongoPass,
}

module.exports = (() => {
  mongoose.Promise = global.Promise

  return {
    connect() {
      return mongoose
        .connect(mongoURI, dbOptions)
        .then(() => {
          console.log('Connected to mongodb')
        })
        .catch(e => {
          console.error(e)
        })
    },
    disconnect() {
      return mongoose.disconnect()
    },
  }
})()
