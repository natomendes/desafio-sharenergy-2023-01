import { RemoteAddClient } from '@/data/usecases/client/remote-add-client'
import { makeApiUrl, makeAxiosHttpClient } from '../../http'

export const makeRemoteAddClient = (): RemoteAddClient => {
  return new RemoteAddClient(makeApiUrl('/clilents'), makeAxiosHttpClient())
}
