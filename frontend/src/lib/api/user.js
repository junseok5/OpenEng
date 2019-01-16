import axios from 'axios'

// [GET]
export const getUserInfo = id => axios.get(`/api/v1.0/users/${id}`)
