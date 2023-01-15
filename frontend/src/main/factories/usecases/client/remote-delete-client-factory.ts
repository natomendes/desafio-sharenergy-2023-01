import { RemoteDeleteClient } from '@/data/usecases/client/remote-delete-client'
import { makeAuthHttpClientDecorator } from '../../decorators/auth-http-client-decorator-factory'
import { makeApiUrl } from '../../http'

export const makeRemoteDeleteClient = (): RemoteDeleteClient => {
  return new RemoteDeleteClient(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
