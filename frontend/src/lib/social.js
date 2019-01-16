import hello from 'hellojs'

hello.init(
  {
    facebook: 2333261076885348,
    google:
      '976744408987-vcsgqi36uul52rabhge3cn5b9luvqh96.apps.googleusercontent.com'
  },
  { redirect_uri: '/' }
)

export default (() => {
  return {
    facebook: () => {
      return new Promise((resolve, reject) => {
        hello
          .login('facebook', { scope: 'email' })
          .then(auth => resolve(auth.authResponse.access_token), e => reject(e))
      })
    },
    google: () => {
      return new Promise((resolve, reject) => {
        hello
          .login('google', { scope: 'email' })
          .then(auth => resolve(auth.authResponse.access_token), e => reject(e))
      })
    }
  }
})()
