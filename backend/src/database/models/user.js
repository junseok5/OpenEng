const mongoose = require('mongoose')
const hash = require('lib/hash')
const token = require('lib/token')

const { Schema } = mongoose

const User = new Schema({
  email: String,
  social: {
    facebook: {
      id: String,
      accessToken: String
    },
    google: {
      id: String,
      accessToken: String
    }
  },
  password: String,
  displayName: String,
  thumbnail: {
    type: String,
    default: '/images/users/default.jpg'
  },
  joinedDate: {
    type: Date,
    default: Date.now()
  }
})

User.statics.findByEmail = function (email) {
  return this.findOne({ email }).exec()
}

User.statics.findSocialId = function ({ provider, id }) {
  const key = `social.${provider}.id`
  return this.findOne({
    [key]: id
  })
}

User.statics.localRegister = function ({ email, displayName, password }) {
  const user = new this({
    email,
    displayName,
    password: hash(password)
  })

  return user.save()
}

User.statics.socialRegister = function ({
  email,
  displayName,
  provider,
  accessToken,
  socialId
}) {
  const user = new this({
    email,
    displayName,
    social: {
      [provider]: {
        id: socialId,
        accessToken
      }
    }
  })

  return user.save()
}

User.methods.validatePassword = function (password) {
  const hashed = hash(password)
  return this.password === hashed
}

User.methods.generateToken = function () {
  const { _id, displayName } = this
  return token.generateToken(
    {
      user: {
        _id,
        displayName
      }
    },
    'user'
  )
}

let UserSchema = null
try {
  UserSchema = mongoose.model('User', User)
} catch (e) {
  UserSchema = mongoose.model('User')
}

module.exports = UserSchema
