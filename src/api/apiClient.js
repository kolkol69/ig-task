import axios from 'axios'

import { setupInterceptorsTo } from './interceptors'

export const baseUrl =
  process.env.REACT_APP_BASE_URL === undefined
    ? 'http://localhost:4000'
    : process.env.REACT_APP_BASE_URL

export const authApi = setupInterceptorsTo(
  axios.create({
    baseURL: baseUrl,
    withCredentials: false,
  }),
)
