import axios from 'axios'

// [POST]
export const localRegister = ({ email, password, displayName }) =>
  axios.post('/api/v1.0/auth/register/local', {
    email,
    password,
    displayName
  })

export const localLogin = ({ email, password }) =>
  axios.post('/api/v1.0/auth/login/local', {
    email,
    password
  })

export const socialLogin = ({ provider, accessToken }) =>
  axios.post(`/api/v1.0/auth/login/${provider}`, {
    accessToken
  })

export const logout = () => axios.post('/api/v1.0/auth/logout')

// [GET]
export const checkLogin = () => axios.get('/api/v1.0/auth/check')
