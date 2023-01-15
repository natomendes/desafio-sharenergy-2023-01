import { RemoteLoadUsers } from '@/data/usecases/remote-load-users'
import { makeAuthHttpClientDecorator } from '../decorators/auth-http-client-decorator-factory'
import { makeApiUrl } from '../http'

export const makeRemoteLoadUsers = (): RemoteLoadUsers => {
  return new RemoteLoadUsers(makeApiUrl('/users'), makeAuthHttpClientDecorator())
}
