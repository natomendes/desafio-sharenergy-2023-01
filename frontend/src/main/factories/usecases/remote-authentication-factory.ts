import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteAuthentication } from '@/data/usecases'

export const makeRemoteAuthentication = (): RemoteAuthentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}
