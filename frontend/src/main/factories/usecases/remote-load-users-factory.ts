import { RemoteLoadUsers } from '@/data/usecases/remote-load-users'
import { makeApiUrl, makeAxiosHttpClient } from '../http'

export const makeRemoteLoadUsers = (): RemoteLoadUsers => {
  return new RemoteLoadUsers(makeApiUrl('/users'), makeAxiosHttpClient())
}
