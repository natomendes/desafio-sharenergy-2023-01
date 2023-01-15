import { HttpClient } from '@/data/protocols/http/http-client'
import { AuthHttpClientDecorator } from '@/main/decorators/auth-http-client-decorator'
import { makeLocalStorageAdapter } from '../cache'
import { makeAxiosHttpClient } from '../http'

export const makeAuthHttpClientDecorator = (): HttpClient => {
  return new AuthHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient())
}
