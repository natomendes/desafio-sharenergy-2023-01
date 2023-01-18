import { AuthHttpClientDecorator } from '@/main/decorators/auth-http-client-decorator'
import { HttpClient } from '@/data/protocols/http/http-client'
import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeAuthHttpClientDecorator = (): HttpClient => {
  return new AuthHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient())
}
