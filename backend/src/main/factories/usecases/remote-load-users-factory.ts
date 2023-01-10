import { RemoteLoadUsers } from '../../../data/usecases/remote-load-users'
import { AxiosHttpClient } from '../../../infra/http/axios-http-client'

export const makeRemoteLoadUsers = (): RemoteLoadUsers => {
  const url = 'https://randomuser.me/api/?inc=name,email,login,dob,picture'
  const axiosHttpClient = new AxiosHttpClient()
  return new RemoteLoadUsers(url, axiosHttpClient)
}
