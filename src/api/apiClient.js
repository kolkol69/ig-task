import axios from 'axios'

import { setupInterceptorsTo } from './interceptors'

export const authApi = setupInterceptorsTo(
  axios.create({
    baseURL: 'https://recruitmentdb-508d.restdb.io/rest',
    withCredentials: false,
  }),
)
