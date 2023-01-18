import { RemoteLoadClients } from '@/data/usecases'
import { makeAuthHttpClientDecorator } from '@/main/factories/decorators'
import { makeApiUrl } from '@/main/factories/http'

export const makeRemoteLoadClients = (): RemoteLoadClients => {
  return new RemoteLoadClients(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
