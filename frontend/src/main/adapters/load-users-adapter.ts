import { UserModel } from '@/domain/models'
import { makeRemoteLoadUsers } from '../factories/usecases'

export const loadUsersAdapter = async (): Promise<UserModel[]> => {
  const data = await makeRemoteLoadUsers().load('1')

  return data
}
