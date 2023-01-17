import { RemoteAddClient } from '@/data/usecases/client/remote-add-client'
import { makeAuthHttpClientDecorator } from '../../decorators/auth-http-client-decorator-factory'
import { makeApiUrl } from '../../http'

export const makeRemoteAddClient = (): RemoteAddClient => {
  return new RemoteAddClient(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
