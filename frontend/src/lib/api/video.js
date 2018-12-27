import axios from 'axios'
import queryString from 'query-string'

// GET
export const getVideo = id => axios.get(`/api/v1.0/videos/${id}`)

// GET list
export const getRecentVideos = ({ page, category, keyword }) =>
  axios.get(
    `/api/v1.0/videos/?${queryString.stringify({ page, category, keyword })}`
  )
