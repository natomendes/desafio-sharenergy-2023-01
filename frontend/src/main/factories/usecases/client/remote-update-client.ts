import { RemoteUpdateClient } from '@/data/usecases/client/remote-update-client'
import { makeAuthHttpClientDecorator } from '../../decorators/auth-http-client-decorator-factory'
import { makeApiUrl } from '../../http'

export const makeRemoteUpdateClient = (): RemoteUpdateClient => {
  return new RemoteUpdateClient(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
