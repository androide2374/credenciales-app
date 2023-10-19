import axios, { type AxiosHeaders, type AxiosInstance } from 'axios'

class ServiceBase {
  readonly client: AxiosInstance
  constructor ({ baseUrl, requiredAuth, tokenKey, storage }: { baseUrl: string, requiredAuth?: boolean, tokenKey?: string, storage?: 'localStorage' | 'sessionStorage' }) {
    const _storage = storage ?? 'localStorage'
    const _tokenKey = tokenKey ?? 'token'
    const _requiredAuth = requiredAuth ?? false
    this.client = axios.create({
      baseURL: baseUrl
    })
    if (_requiredAuth) {
      this.client.interceptors.request.use(function (config) {
        const token = window[_storage].getItem(_tokenKey)
        if (token !== null) {
          config.headers = { ...config.headers } as AxiosHeaders
          config.headers.set('Authorization', 'Bearer '.concat(token))
        }
        return config
      })
      this.client.interceptors.response.use(function (config) {
        if (config.status === 401) {
          return config
        }
        return config
      })
    }
  }
}
export default ServiceBase
