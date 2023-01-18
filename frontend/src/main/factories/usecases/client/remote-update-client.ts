import { RemoteUpdateClient } from '@/data/usecases'
import { makeAuthHttpClientDecorator } from '@/main/factories/decorators'
import { makeApiUrl } from '@/main/factories/http'

export const makeRemoteUpdateClient = (): RemoteUpdateClient => {
  return new RemoteUpdateClient(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
