const onRequest = (config) => {
  config.headers['x-apikey'] = '5d9f48133cbe87164d4bb12c'
  return config
}

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.request.use(onRequest)
  return axiosInstance
}
