const jwt = require('jsonwebtoken')

const { JWT_SECRET: secret } = process.env

exports.generate = (payload, subject) => new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      {
        issuer: 'OpenEng',
        expiresIn: '7d',
        subject
      },
      (error, token) => {
        if (error) reject(error)
        resolve(token)
      }
    )
  })

exports.decode = token => new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) reject(error)
      resolve(decoded)
    })
  })
