const FacebookAPI = require('fb')
const { google } = require('googleapis')

function getFacebookProfile(accessToken) {
  return FacebookAPI.api('me', {
    fields: ['name', 'email', 'picture'],
    access_token: accessToken
  }).then(auth => ({
    id: auth.id,
    name: auth.name,
    email: auth.email || null,
    thumbnail: auth.picture.data.url
  }))
}

function getGoogleProfile(accessToken) {
  const plus = google.plus({
    version: 'v1',
    auth: process.env.GOOGLE_SECRET
  })
  return new Promise((resolve, reject) => {
    plus.people.get(
      {
        userId: 'me',
        access_token: accessToken
      },
      (err, auth) => {
        if (err) {
          reject(err)
          return
        }
        const {
 id, image, emails, displayName 
} = auth.data

        const profile = {
          id,
          thumbnail: image.url,
          email: emails[0].value,
          name: displayName && displayName.split(' (')[0]
        }
        resolve(profile)
      }
    )
  })
}

exports.getProfile = (provider, accessToken) => {
  const getters = {
    facebook: getFacebookProfile,
    google: getGoogleProfile
  }

  return getters[provider](accessToken)
}
