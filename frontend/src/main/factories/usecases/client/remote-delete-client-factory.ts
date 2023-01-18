import { RemoteDeleteClient } from '@/data/usecases'
import { makeAuthHttpClientDecorator } from '@/main/factories/decorators'
import { makeApiUrl } from '@/main/factories/http'

export const makeRemoteDeleteClient = (): RemoteDeleteClient => {
  return new RemoteDeleteClient(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
