const mongoose = require('mongoose')

const { Schema } = mongoose

const User = new Schema({
  email: String,
  social: {
    facebook: {
      id: String,
      accessToken: String,
    },
    google: {
      id: String,
      accessToken: String,
    },
  },
  password: String,
  displayName: String,
  profilePicture: {
    type: String,
    default: '/images/users/default.jpg',
  },
  joinedDate: {
    type: Date,
    default: Date.now(),
  },
})

let UserSchema = null
try {
  UserSchema = mongoose.model('User', User)
} catch (e) {
  UserSchema = mongoose.model('User')
}

module.exports = UserSchema
