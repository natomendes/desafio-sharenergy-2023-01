import { RemoteLoadClients } from '@/data/usecases/client/remote-load-clients'
import { makeAuthHttpClientDecorator } from '../../decorators/auth-http-client-decorator-factory'
import { makeApiUrl } from '../../http'

export const makeRemoteLoadClients = (): RemoteLoadClients => {
  return new RemoteLoadClients(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
