import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { makeApiUrl, makeAxiosHttpClient } from '../http'

export const makeRemoteAuthentication = (): RemoteAuthentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}
