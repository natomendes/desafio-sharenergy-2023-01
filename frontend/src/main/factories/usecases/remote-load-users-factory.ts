import { makeAuthHttpClientDecorator } from '@/main/factories/decorators'
import { makeApiUrl } from '@/main/factories/http'
import { RemoteLoadUsers } from '@/data/usecases'

export const makeRemoteLoadUsers = (): RemoteLoadUsers => {
  return new RemoteLoadUsers(makeApiUrl('/users'), makeAuthHttpClientDecorator())
}
