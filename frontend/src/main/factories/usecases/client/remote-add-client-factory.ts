import { RemoteAddClient } from '@/data/usecases/client/remote-add-client'
import { makeAuthHttpClientDecorator } from '@/main/factories/decorators'
import { makeApiUrl } from '@/main/factories/http'

export const makeRemoteAddClient = (): RemoteAddClient => {
  return new RemoteAddClient(makeApiUrl('/clients'), makeAuthHttpClientDecorator())
}
